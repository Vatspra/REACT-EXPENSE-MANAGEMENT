import './Expense.css';
import Card from '../UI/Card';
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
function Expense(props) {
    const [year, setYear] = useState('2023');

    const yearSelectHandler = (selectedYear) => {
        setYear(selectedYear);
        props.filterExpense(selectedYear);
    };
    return (
        <div>
            <Card className='expenses'>
            <ExpensesFilter onYearSelect={yearSelectHandler} />
               <ExpenseList items = {props.expenses}/>
            </Card>
        </div>

    )
}


export default Expense;