// 划分visibletodo
// 我们需要一个todolist ui组件
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions'

const getVisibleTodo = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_ACTIVE':
            return todos.filter( t => !t.completed )
        case 'SHOW_COMPLETED':
            return todos.filter ( t => t.completed )
        default:
            return todos
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodo(state.todos, state.visibilityFilter),
    filter: state.visibilityFilter
})

const mapDispatchToProps = ({
    onTodoClick: toggleTodo
})

const VisibleTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodo