import React from 'react'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'

let wrapper

beforeEach( () => {
    
})

test('should properly render expenses summary with no expenses', () => {
    wrapper = shallow(<ExpensesSummary  expensesCount={0}
                                        expensesTotal={0} />)
    expect(wrapper).toMatchSnapshot()
})

test('should properly render expenses summary', () => {
    wrapper = shallow(<ExpensesSummary  expensesCount={3}
                                        expensesTotal={500} />)
    expect(wrapper).toMatchSnapshot()
})
