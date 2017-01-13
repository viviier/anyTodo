// 纯ui组件
// 有一个点击事件
import React from 'react'

const AddTodoForm = ({onClick}) => {
    let input
       return (
           <div className="row">
            <div className="col-lg-6 col-xs-12">
                <div className="input-group">
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button"
                            onClick = { e => {
                                e.preventDefault()
                                if(!input.value.trim()) {
                                return
                                }
                                onClick(input.value)
                                input.value = ''
                            }}
                        >
                            Add Todo
                        </button>
                    </span>
                    <input
                    type="text" className="form-control"
                    ref={ node => input = node }
                    />
                </div>
            </div>
        </div>
    )
}

export default AddTodoForm