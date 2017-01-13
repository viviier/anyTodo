import React from 'react'
import { connect } from 'react-redux'
import { removeTodo } from '../actions'

// 这边接收的text，id，completed是从...state状态里面传进来的
let Todo = ({ text, id, onClick, completed, dispatch }) => (
    <div className="item"
        onClick = {onClick}
    >
        <div className="right floated content">
        <button
            className="ui inverted red button"
            onClick={ e => {
                e.stopPropagation()
                dispatch(removeTodo(id))
            }}
        >
                删除
        </button>
        </div>
        <div
            className="left floated content"
            style={{
                lineHeight: '2',
                textDecoration: completed? 'line-through' : 'none'}}>
            {text}
        </div>
    </div>
)

Todo = connect()(Todo)

export default Todo