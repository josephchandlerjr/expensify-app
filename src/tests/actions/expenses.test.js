import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addExpense, removeExpense, editExpense, startAddExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const middleware = [thunk]
const createMockStore = configureMockStore(middleware)

test('should setup remove expense action object', () => {
    const result = removeExpense({ id: '123abc'}) 
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup add expense action object with provided values', () => {
    const result = addExpense(expenses[2])
    expect(result).toEqual( {
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
    
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    store.dispatch(startAddExpense(expenses[0])).then( () => {
        const actions = store.getActions()
        const expense = {
            description: 'Gum',
            note: '',
            amount: 195,
            createdAt: 0
        }
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...expense,
                id: expect.any(String)
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then( (snapshot) => {
        expect(snapshot.val()).toEqual({
            description: 'Gum',
            note: '',
            amount: 195,
            createdAt: 0
        })
        done()
    })
})


test('should add expense with defaults database and store', (done) => {
    const store = createMockStore({})
    const defaultExpenseValues = {
        description: '', 
        note: '',
        amount:  0,
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then( () => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...defaultExpenseValues,
                id: expect.any(String)
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then( (snapshot) => {
        expect(snapshot.val()).toEqual(defaultExpenseValues)
        done()
    })
})

// test('should setup add expense action object with default values', () => {
//     const defaultExpenseValues = {
//         description: '', 
//         note: '',
//         amount:  0,
//         createdAt: 0
//     }
//     const result = addExpense()
//     expect(result).toEqual( {
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...defaultExpenseValues,
//             id: expect.any(String)
//         }
//     })
    
// })

test('should setup edit expense action object', () => {
    const result = editExpense('123abc', { note: 'a new note' })
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'a new note'}
    })
})