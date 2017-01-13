// todolist 有一个toggle点击方法，有一个列表里面是todo，然后有一个todos
import React from 'react'
import Todo from '../containers/Todo'


const TodoList = ({ todos, onTodoClick, filter }) => {
    if(todos.length == 0) {
        switch (filter) {
            case 'SHOW_COMPLETED':
                return (
                    <div
                        className="ui middle aligned divided list"
                        style={{ width: '100%' }}
                    >
                    <div className="item">
                        <div className="left floated content" style={{lineHeight: '2'}}><h2>您目前没有以完成的任务</h2></div>
                    </div>
                    </div>
                )
            default:
                return (
                    <div
                        className="ui middle aligned divided list"
                        style={{ width: '100%' }}
                    >
                    <div className="item">
                        <div className="left floated content" style={{lineHeight: '2'}}><h2>恭喜您，目前没有待办任务</h2></div>
                    </div>
                    </div>
                )
        }
    }

    return (
    <div
        className="ui middle aligned animated divided list"
        style={{ width: '100%' }}
    >
            {
                todos.map( todo =>
                    <Todo
                        key={todo.id}
                        {...todo}  // 这里的{...todo} 是state状态里面的每一个todo{}对象里面的属性，id，text，completed 然后传入了Todo组件
                        onClick = { () => onTodoClick(todo.id)}
                    />
                )
            }
    </div>
    )
}

export default TodoList