import { addExpense, removeExpense, editExpense } from '../../actions/expenses'


test('should setup remove expense action object', () => {
    const result = removeExpense({ id: '123abc'}) 
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this is a note'
    }
    const result = addExpense(expenseData)
    expect(result).toEqual( {
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
    
})

test('should setup add expense action object with default values', () => {
    const defaultExpenseValues = {
        description: '', 
        note: '',
        amount:  0,
        createdAt: 0
    }
    const result = addExpense()
    expect(result).toEqual( {
        type: 'ADD_EXPENSE',
        expense: {
            ...defaultExpenseValues,
            id: expect.any(String)
        }
    })
    
})

test('should setup edit expense action object', () => {
    const result = editExpense('123abc', { note: 'a new note' })
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'a new note'}
    })
})