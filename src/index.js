import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import { Router, browserHistory} from 'react-router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.css'
import routes from './routes'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {loadCourses} from './actions/courseActions'
import {loadAuthors} from './actions/authorActions'

const store = configureStore()
store.dispatch(loadCourses())
store.dispatch(loadAuthors())

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
  document.getElementById('root')
);
