import classes from './HeaderCardButton.module.css';
import CartIcon from '../Cart/CartIcon';
// to update the badge
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCardButton = (props) =>{
    const cartBtnHandler = () =>{
        props.setShowModal(true);
    }
    const cartCtx = useContext(CartContext);

    // length won't work bacause if we add 1 item 3 time length will show 3 items -- but we want to show 1 item and amount 3.
    // const numberOfCartItems = cartCtx.items.length;

    // will use reduce method: transform an array into single value in this case single number

    return (
        // want 3 things inside button isSecureContext, text and Node. of order(badge
        <button className={classes.button} onClick={cartBtnHandler}> 
            <span className={classes.icon}> <CartIcon/> </span>
            <span> Your Cart </span>
            <span className={classes.badge}> 5 </span>
        </button>
    )
}

export default HeaderCardButton ;