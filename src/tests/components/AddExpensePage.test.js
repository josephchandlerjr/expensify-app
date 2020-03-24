import React from 'react'
import { AddExpensePage } from '../../components/AddExpensePage'
import { shallow } from 'enzyme'
import { expenses } from '../fixtures/expenses'

let onSubmitSpy, historySpy, wrapper

beforeEach( () => {
    onSubmitSpy = jest.fn()
    historySpy = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={historySpy}/>)
})

test('should properly render AddExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle on submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[0])
})