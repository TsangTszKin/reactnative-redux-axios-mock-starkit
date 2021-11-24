import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers'

const loggerMiddleware = createLogger()

const store = createStore(
    reducers,
    compose(
        applyMiddleware(
            thunkMiddleware, // allow us dispatch function
            loggerMiddleware   // use to log  action
        ),
    )
)

export default store
