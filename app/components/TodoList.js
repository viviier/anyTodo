// todolist 有一个toggle点击方法，有一个列表里面是todo，然后有一个todos
import React from 'react'
import Todo from './Todo'


const TodoList = ({ todos, onTodoClick, filter }) => {
    if(todos.length == 0) {
        switch (filter) {
            case 'SHOW_ALL':
                return <p>请输入Todo</p>
            case 'SHOW_ACTIVE':
                return <p>没有正在进行的Todo项</p>
            case 'SHOW_COMPLETED':
                return <p>没有已完成的Todo项</p>
            default:
                return <p>请输入Todo</p>
        }
    }

    return (
    <div>
        <ul className="list-group">
            {
                todos.map( todo =>
                    <Todo
                        key={todo.id}
                        {...todo}  // 这里的{...todo} 是state状态里面的每一个todo{}对象里面的属性，id，text，completed 然后传入了Todo组件
                        onClick = { () => onTodoClick(todo.id)}
                    />
                )
            }
        </ul>
    </div>
    )
}

export default TodoList