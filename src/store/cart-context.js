import React, { createContext } from 'react';

const CartContext = createContext({
    // inside createContext data for better auto-completion only
    items:[],
    totalAmount: 0, //inital total amt
    // 2function that will update context
    addItem: (item)=>{},
    removeItem: (id) => {},
}) 

export default CartContext;