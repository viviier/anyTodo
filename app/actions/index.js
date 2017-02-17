import { v4 } from 'node-uuid'

// 添加todo行为
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: v4(),
        text
    }
}

// 设置filter行为
export const setVivibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

// toggletodo行为
export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

// 删除todo行为
export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id
    }
}