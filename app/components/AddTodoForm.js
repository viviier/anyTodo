// 纯ui组件
// 有一个点击事件
import React from 'react'

const AddTodoForm = ({onClick, onPress}) => {
    let input
       return (
           <div
               className="ui icon input"
               style={{ width: '100%' }}
           >
               <input
                   onKeyPress={ e => {
                       if(e.which == '13') {
                           onPress(input.value)
                           input.value = ''
                       }
                   }}
                   type="text"
                   placeholder="请输入您的待办Todo，点击按钮添加..."
                   ref={ node => input = node }
               />
                        <i
                            className="plus link icon"
                            onClick = { e => {
                                e.preventDefault()
                                if(!input.value.trim()) {
                                return
                                }
                                onClick(input.value)
                                input.value = ''
                            }}
                        />
                </div>
    )
}

export default AddTodoForm