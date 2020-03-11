 import filtersReducer from '../../reducers/filters'
 import moment from 'moment'


 test('should set up default values', () => {
     const state = filtersReducer(undefined, { type: '@@INIT'})
     expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        })
 })

 test('should set sortBy to amount', () => {
     const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
     expect(state.sortBy).toBe('amount')
 })
 
 test('should set sortBy to date', () => {
     const startState = { 
            text: '',
            sortBy: 'amount',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        }
    const state = filtersReducer(startState, {type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')

 })

 test('should set start date filter', () => {
     const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment(0).subtract(4,'days')})
     expect(state).toEqual({ 
        text: '',
        sortBy: 'date',
        startDate: moment(0).subtract(4,'days'),
        endDate: moment().endOf('month')
    })
 })

 test('should set end date filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment(0).add(4,'days')})
    expect(state).toEqual({ 
       text: '',
       sortBy: 'date',
       startDate: moment().startOf('month'),
       endDate: moment(0).add(4,'days')
   })
 })

 test('should set text filter', () => {
     const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'testing'})
     expect(state.text).toBe('testing')
 })

