import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'



const store = configureStore()
store.subscribe( () => console.log(store.getState()))

store.dispatch(addExpense({description: 'Water Bill', amount: 15000, createdAt: 1585670400000}))
store.dispatch(addExpense({description: 'Gas Bill', amount: 20000, createdAt: -5000}))
store.dispatch(addExpense({description: 'Gardening Bill', amount: 3000, createdAt: 400}))



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app')) 
