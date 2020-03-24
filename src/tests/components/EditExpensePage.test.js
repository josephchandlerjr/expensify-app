import React from 'react'
import { EditExpensePage } from '../../components/EditExpensePage'
import { shallow } from 'enzyme'
import { expenses } from '../fixtures/expenses'

let wrapper, expense1, expense2, onSubmitSpy, historySpy, removeSpy

beforeEach( () => {
    expense1 = expenses[0]
    expense2 = expenses[1]
    onSubmitSpy = jest.fn()
    removeSpy = jest.fn()
    historySpy = {
        push: jest.fn()
    }

    wrapper = shallow(<EditExpensePage  expense={expense1} 
                                        onSubmit={onSubmitSpy}
                                        history={historySpy} 
                                        remove={removeSpy} />)
})

test('should properly render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should properly handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense2)
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expense1.id, expense2)
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
})

test('should properly handle remove expense', () => {
    wrapper.find('button').simulate('click')
    expect(removeSpy).toHaveBeenLastCalledWith(expense1.id)
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
})