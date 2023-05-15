import classes from './HeaderCardButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCardButton = (props) =>{
    return (
        // want 3 things inside button isSecureContext, text and Node. of order(badge
        <button className={classes.button}> 
            <span className={classes.icon}> <CartIcon/> </span>
            <span> Your Cart </span>
            <span className={classes.badge}> 5 </span>
        </button>
    )
}

export default HeaderCardButton ;