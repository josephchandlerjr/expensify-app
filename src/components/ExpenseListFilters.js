import React from 'react'
import { connect } from 'react-redux'
import { sortByAmount, sortByDate } from '../actions/filters'
import { setTextFilter, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'

export class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calendarFocused: null
        }

        this.onDatesChange = this.onDatesChange.bind(this)
        this.onFocusChange = this.onFocusChange.bind(this)
        this.onSortChange = this.onSortChange.bind(this)
        this.onTextChange = this.onTextChange.bind(this)
    }
    onDatesChange({ startDate, endDate}) {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange(calendarFocused) {
        this.setState({ calendarFocused })
    }
    onTextChange(evt) {
        this.props.setTextFilter(evt.target.value)
    }
    onSortChange(evt) {
        const sortBy = evt.target.value
        if (sortBy === 'amount') this.props.sortByAmount()
        if (sortBy === 'date') this.props.sortByDate()
    }
    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange}
                />
                <select value={this.props.filters.sortBy}
                    onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId={";oiahsd;oifhjao;ishjfo;adishjfdois;f"} 
                    endDate={this.props.filters.endDate}
                    endDateId={"ewoiueriuyeroeyroei"}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    isOutsideRange={ (day) => false}
                    numberOfMonths={1}
                    />
            </div>
        )
    }
}
    

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
} 

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (date) => dispatch(setStartDate(date)),
    setEndDate: (date) => dispatch(setEndDate(date))
})
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)