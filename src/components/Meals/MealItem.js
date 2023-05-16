import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const final_amt = `$ ${props.amt.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.des}</div>
        <div className={classes.price}>{final_amt}</div>
      </div>
      <MealItemForm id={props.id}/>
    </li>
  );
};

export default MealItem;
