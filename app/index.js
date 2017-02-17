import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import throttle from 'lodash/throttle'
import { loadState, saveState } from './utils/localstorage'
import App from './components/App'
import AppReducer from './reducers/index'

const persistedState = loadState()

const store = createStore(AppReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const rootEl = document.getElementById('root')

store.subscribe(throttle(() => {
	saveState(store.getState())
}, 1000))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
)