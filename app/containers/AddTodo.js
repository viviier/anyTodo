// 划分AddTodo
// 我们需要一个addTodo的UI组件，AddTodoForm
// AddTodo里面仅有一个dispatch，因此只需要写一个mapDispatchToProps
// 用到了addTodo action

import AddTodoForm from '../components/AddTodoForm'
import { addTodo } from '../actions'
import { connect } from 'react-redux'

const mapDispatchToProps = ({
    onClick: addTodo
})

const AddTodo = connect(
    null,
    mapDispatchToProps
)(AddTodoForm)

export default AddTodo