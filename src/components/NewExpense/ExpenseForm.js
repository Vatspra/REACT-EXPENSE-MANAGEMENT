import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date());
    const hadnleTitleInput = (event) => {
        setTitle(event.target.value);
    }

    const hadnleAmountInput = (event) => {
        setAmount(event.target.value);
    }

    const hadnleDateInput = (event) => {
        setDate(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const dateObj = new Date(date);
        props.onSave({title, amount,date: dateObj , id: Math.random().toString()});
        setTitle('');
        setDate('');
        setAmount(0)
    }
    return <form onSubmit={onSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={hadnleTitleInput} value={title}></input>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={hadnleAmountInput} value={amount}></input>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={hadnleDateInput} value = {date}></input>
                </div>

                <div className="new-expense__actions">
                   <button type="submit" onClick={onSubmit}> Add Expense</button>
                </div>
            </div>
    </form>
}


export default ExpenseForm;