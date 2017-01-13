import React from 'react'
import { connect } from 'react-redux'
import { removeTodo } from '../actions'

// 这边接收的text，id，completed是从...state状态里面传进来的
let Todo = ({ text, id, onClick, completed, dispatch }) => (
    <li className="list-group-item"
        onClick = {onClick}
        style = {{
            textDecoration: completed? 'line-through' : 'none'
        }}
    >
        <button className="close">
            <span
                onClick={ e => {
                    e.stopPropagation()
                    dispatch(removeTodo(id))
                }}
            >&times;</span>
        </button>
        {text}
    </li>
)

Todo = connect()(Todo)

export default Todo