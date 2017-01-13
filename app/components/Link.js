// Link是FilterLink的UI组件
//  他有一个active状态判断，有一个子节点children，还有一个点击方法
import React from 'react'

const Link = ({ active, children, onClick }) => {
    if(active) {
        return  <button className="btn btn-primary">{children}</button>
    }

    return (
        <button className='btn btn-default'
            onClick = { e => {
                e.preventDefault()
                onClick()
            }}
        >
            {children}
        </button>
    )
}

export default Link