import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = props =>{
    // hard code the cart item for now;
    const dummy_carditems = [{id:"c1", name:"Sushi",amount:2, price:22.99,},];
    const carditem = ( <ul className={classes['cart-items']}>
    {
    dummy_carditems.map((item)=>{
        return <li>{item.name}</li>
    })
    }
    </ul>
    )

    const modalCloseBtnHandler = () =>{
        props.setShowModal(false);
    }

    return(
        // root should be modal
        <Modal modalCloseBtnHandler = {modalCloseBtnHandler}>
            {carditem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$ 45.98</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={modalCloseBtnHandler}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal> 
    )
}

export default Cart;