/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react'
import Card from '../Card/Card'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import ExpensesList from '../ExpensesList/ExpensesList'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'

const Expenses = ({ expenses }) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList filteredExpenses={filteredExpenses} />
            </Card>
        </div>

    )
}

export default Expenses