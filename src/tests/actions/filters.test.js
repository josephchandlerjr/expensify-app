import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters'
import moment from 'moment'

test('should setup set filter action item', () => {
    const filterText = 'rent'
    const result = setTextFilter(filterText)
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: filterText
    })
})
test('should setup set filter action item with default value', () => {
    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})
test('should setup sort by amount action item', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})
test('should setup sort by date action item', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    })
})
test('should setup set start date action item', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})
test('should setup set end date action item', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

