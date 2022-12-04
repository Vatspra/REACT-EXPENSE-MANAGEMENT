import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';


const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    }

    return (
        <ul className='expenses-list'>
            {
                props.items.map((data) => {
                    return <ExpenseItem date={data.date} title={data.title} amount={data.amount} key={data.id} />
                })
            }
        </ul>
    )
}


export default ExpenseList;