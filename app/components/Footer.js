// 划分Footer
// 里面有一个需要提交自身的FilterLink容器组件
// Footer是纯UI，先布局
import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
    <div  className='ui grid' style={{ width: '100%' }}>
        <div className="left floated content">
            show:
        </div>
        <div className="right floated content">
            <div className="ui breadcrumb">
            <FilterLink filter="SHOW_ALL">
                全部
            </FilterLink>
                <div className="divider"> / </div>
            <FilterLink filter="SHOW_ACTIVE">
                正在进行
            </FilterLink>
                <div className="divider"> / </div>
            <FilterLink filter="SHOW_COMPLETED">
                已完成
            </FilterLink>
            </div>
        </div>
    </div>
)

export default Footer