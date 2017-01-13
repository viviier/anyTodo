import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// 合并reducer
const AppReducer = combineReducers({
    todos,
    visibilityFilter
})

export default AppReducer