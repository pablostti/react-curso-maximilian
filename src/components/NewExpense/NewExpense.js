import React from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

  const saveExpenseDataHandler = (expenseData) => {
      const expData = {
        ...expenseData,
        id: Math.random().toString()
      }

      props.onAddExpense(expData)
  }

  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense;
 