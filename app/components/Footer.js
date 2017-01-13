// 划分Footer
// 里面有一个需要提交自身的FilterLink容器组件
// Footer是纯UI，先布局
import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
    <div>
        <p>
            SHOW:
            {' '}
        <div className="btn-group">
            <FilterLink filter="SHOW_ALL">
                All
            </FilterLink>
            {' '}
            <FilterLink filter="SHOW_ACTIVE">
                Active
            </FilterLink>
            {' '}
            <FilterLink filter="SHOW_COMPLETED">
                Completed
            </FilterLink>
        </div>
        </p>
    </div>
)

export default Footer