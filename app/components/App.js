// 划分components和containers组件
// AddTodo有提交更改todos状态的动作，VisibleTodo根据todos以及filter点的状态改变，因此这两个组件属于containers
// Footer属于纯UI组件
import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodo from '../containers/VisibleTodo'
import Footer from './Footer'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodo />
        <Footer />
    </div>
)

export default App