import React from 'react'
import ExpenseListItem from '../../components/ExpenseListItem'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'

test('should render expense list itme', () => {
    const expense = expenses[0]
    const wrapper = shallow(<ExpenseListItem 
                                key={expense.id}
                                {...expense}
                            />)
    expect(wrapper).toMatchSnapshot()
})