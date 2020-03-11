import React from 'react'
import { connect } from 'react-redux'
import { sortByAmount, sortByDate } from '../actions/filters'
import { setTextFilter, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'

class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calendarFocused: null
        }

        this.onDatesChange = this.onDatesChange.bind(this)
        this.onFocusChange = this.onFocusChange.bind(this)
    }
    onDatesChange({ startDate, endDate}) {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange(calendarFocused) {
        this.setState({ calendarFocused })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={ (evt) => {
                    this.props.dispatch(setTextFilter(evt.target.value))
                }}
                />
                <select value={this.props.filters.sortBy}
                    onChange={ (evt) => {
                        const sortBy = evt.target.value
                        if (sortBy === 'amount') this.props.dispatch(sortByAmount())
                        if (sortBy === 'date') this.props.dispatch(sortByDate())
                    }}>
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
export default connect(mapStateToProps)(ExpenseListFilters)