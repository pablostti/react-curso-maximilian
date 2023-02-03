import React, { useRef, useState } from 'react'
import './ExpenseForm.css';

const ExpenseForm = () => {

    const titleRef = useRef();
    const amountRef = useRef();
    const dateRef = useRef();

    // const [title, setTitle] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // })

    const submitHandler = (event) => {
        event.preventDefault();

        console.log({title: titleRef.current.value, amount: amountRef.current.value, date: dateRef.current.value})

        // const expenseData = {
        //     title: title,
        //     amount: amount,
        //     date: new Date(date)
        // }

       // console.log('data => ', expenseData)
    }


    const titleChangeHandler = (event) => {

        //? Normal update
       // setTitle(event.target.value);

        //? Best way to update
        // setUserInput((prevState) => {
        //     return {...prevState, title: event.target.value}
        // })

        //? Example syntax
        // setAmount(currentCount => {
        //     return currentCount - amount;
        // })
    }

    const amountChangeHandler = (event) => {
        // setUserInput((prevState) => {
        //     return {...prevState, amount: event.target.value}
        // })
        //setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        // setUserInput((prevState) => {
        //     return {...prevState, date: event.target.value}
        // })
       // setDate(event.target.value);
    }

 
    return (
        <form onSubmit={submitHandler}>
            {/* <code> {userInput} </code> */}
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' ref={titleRef} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' ref={amountRef} min="0.01" step="0.01" />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' ref={dateRef} min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>

    )
}

export default ExpenseForm;