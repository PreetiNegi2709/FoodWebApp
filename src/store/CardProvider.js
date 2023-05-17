// the goal of this component is to :-
// manage the current context to data and provide that context to all components that want to access to it.

import CardContext from './cart-context';

const CardProvider = (props) => {
    // can add all the log to manage context data here only
    const addItemToCartHandler = (item) => {}
    
    const removeItemToCartHandler = (id) => {}

    const cartContext = {
        // these objtct key:values are the context value which will be updated over time
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler, //point to the functions
        removeItem: removeItemToCartHandler,
    }

    return ( 
        <CardContext.Provider value= {cartContext}>
            {props.children}
        </CardContext.Provider>
     )
}

export default CardProvider;