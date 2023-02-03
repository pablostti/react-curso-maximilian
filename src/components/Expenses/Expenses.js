/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react'
import Card from '../Card/Card'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import './Expenses.css'

const Expenses = ({expenses}) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    return (
        <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {
                expenses.map((exp) => {
                    return (
                        <div key={exp.id}>
                            <ExpenseItem expense={exp} />
                        </div>
                    )
                })
            }
        </Card>

    )
}

export default Expenses