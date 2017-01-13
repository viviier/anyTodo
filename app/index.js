import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import AppReducer from './reducers/index'


const store = createStore(AppReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const rootEl = document.getElementById('root')

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
)