import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = (props) => (
    <div>
        <h4>
            {
                `
                Viewing ${props.expensesCount} 
                expense${props.expensesCount === 1 ? '': 's'}
                totaling ${numeral(props.expensesTotal / 100).format('$0,0.00')}
                `
            }
        </h4>
        <h3>{props.expenseTotal}</h3>
    </div>
)

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters)
    return {
        expensesCount: expenses.length,
        expensesTotal: expensesTotal(expenses)
        }
}

export default connect(mapStateToProps)(ExpensesSummary)