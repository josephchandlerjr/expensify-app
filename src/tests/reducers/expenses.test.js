import expensesReducer from '../../reducers/expenses'
import { expenses } from '../fixtures/expenses'

const expense = expenses[0]

test('should set up default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})
test('should add an expense', () => {
    const state = expensesReducer(undefined, {type: 'ADD_EXPENSE', expense})
    expect(state).toEqual([expense])
})
test('should remove an expense', () => {
    const state = expensesReducer([expense], {type: 'REMOVE_EXPENSE', id: expense.id})
    expect(state).toEqual([])

})
test('should edit an expense', () => {
    const state = expensesReducer([expense], {type: 'EDIT_EXPENSE', id: expense.id, updates: {note: 'a new note'}})
    expect(state).toEqual([{
        ...expense,
        note: 'a new note'
    }])
})