import { createStore } from 'redux'


// Action generators  - functions that return action objects

const incrementCount = ( { incrementBy = 1 } = {} ) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ( { decrementBy = 1 } = {} ) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ( { count } ) =>({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})


//Reducers
// 1. Reducers are pure functions
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state
    }
}
// function fed to createStore is called right away and then called again every time store.dispatch is called
const store = createStore(countReducer)

console.log(store.getState())

//function fed to subscribe will be called whenever store changes
// can call return function to unsubscribe
const unsubscribe = store.subscribe( () => console.log(store.getState()))

//Actions - object that gets sent to the store
// increment, decfrement, reset, etc

//I'd like to increment the count
store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(incrementCount({incrementBy: 100}))

//unsubscribe()

//I'd like to reset the count to zero
store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 33}))

store.dispatch(setCount({ count: 200}))


