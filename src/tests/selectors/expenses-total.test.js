import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 for now expesnses', () => {
    const total = selectExpensesTotal([])
    expect(total).toBe(0)
})
test('should correctly return a single expense ', () => {
    const total = selectExpensesTotal([expenses[0]])
    expect(total).toBe(195)
 
})
test('should correctly return total of multiple expenses', () => {
    const total = selectExpensesTotal(expenses) 
    expect(total).toBe(34695)

})