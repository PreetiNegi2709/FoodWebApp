import classes from './MealItemForm.module.css';
import Input from '../UI/Input';

const MealItemForm = props => {
    return (
        <form className={classes.form}>
            {/* <input></input> */}
            <Input label="Amount" input={{
                type:"number",
                id: props.id,
                min:"1",
                max:"5",
                defaultValue:"1",
                step:"1"
            }}/>
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;