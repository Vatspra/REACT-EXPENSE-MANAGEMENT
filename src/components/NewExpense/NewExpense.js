import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {

   const onSave = (expenseItem) => {
    props.addExpenseItem(expenseItem);
   }

    return <div className="new-expense">
        <ExpenseForm onSave = {onSave}/>
    </div>
}

export default NewExpense;