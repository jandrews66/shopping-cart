import { useOutletContext } from "react-router-dom";
import { InputNum } from '../inputNum.jsx'
import { useState } from 'react';


const Cart = () => {
    const [cart, setCart] = useOutletContext()
    const [quantity, setQuantity] = useState()

    function addToCart(e){
        e.preventDefault()
    }
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
                        <InputNum setQuantity={setQuantity} quantity={product.quantity} addToCart={addToCart}/>
                        <p>Price: {product.quantity * product.price}</p>
                    </li>
                )}
            </ul>

        </>
    )
}

export default Cart;