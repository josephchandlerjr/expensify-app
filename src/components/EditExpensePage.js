import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { editExpense } from '../actions/expenses'
import { removeExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.remove = this.remove.bind(this)
    }
    onSubmit(expense) {
        this.props.onSubmit(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    remove() {
        this.props.remove(this.props.expense.id)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <ExpenseForm 
                onSubmit={ this.onSubmit }
                expense={this.props.expense} />
                <button onClick={ this.remove }>Remove</button>
            </div>
        )  
    }
}
 
const mapStateToProps = (state, props) => ({
    expense: state.expenses.find( (expense) => expense.id === props.match.params.id )
})

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (id, expense) => dispatch(editExpense(id, expense)),
    remove: (id) => dispatch(removeExpense({ id }))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)