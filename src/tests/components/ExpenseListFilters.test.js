import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate

beforeEach( () => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />)
})

test('should properly render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should properly render ExpenseListFilters with alt data', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change (assert something about spies', () => {
    wrapper.find('input').simulate('change', { target : { value : 'test'} } )
    expect(setTextFilter).toHaveBeenLastCalledWith('test')
})

test('should sort by date', () => {
    wrapper.find('select').simulate('change', { target : { value : 'date'} })
    expect(sortByDate).toHaveBeenLastCalledWith()
})

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', { target : { value : 'amount'} })
    expect(sortByAmount).toHaveBeenLastCalledWith()
})

test('should change dates', () => {
    const now = moment()
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
        startDate: now,
        endDate: now
    })
    expect(setEndDate).toHaveBeenLastCalledWith(now)
    expect(setStartDate).toHaveBeenLastCalledWith(now)
})

test('should change focus', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')('startDate')
    expect(wrapper.state('calendarFocused')).toBe('startDate')
})