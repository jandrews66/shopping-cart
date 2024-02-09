import { useOutletContext } from "react-router-dom";
import { InputNum } from '../inputNum.jsx'
import { useState } from 'react';


const Cart = () => {
    const [cart, setCart] = useOutletContext()

    return(
        <>
            <p>Cart</p>
            {console.log(cart)}
            <ul>
                {cart &&
                    cart.map(product => 
                    <li key={product.id}>
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                        <img src={product.image} width={100}></img>
                        <InputNum product={product} amount={product.quantity} showAdd={false}/>
                        <p>Price: {product.quantity * product.price}</p>
                    </li>
                )}
            </ul>
            <p>Cart Total: {cart.reduce((a, v) => a = a + v.price * v.quantity, 0 )}</p>
        </>
    )
}

export default Cart;