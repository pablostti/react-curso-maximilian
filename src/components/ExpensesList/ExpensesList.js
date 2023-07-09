import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css'


const ExpensesList = (props) => {

    if (props.filteredExpenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    return (
        <ul className='expenses-list'>
            {
                props.filteredExpenses.map((exp) =>
                    <ExpenseItem
                        key={exp.id}
                        expense={exp}
                    />)
            }
        </ul>
    )
}

export default ExpensesList