import { useOutletContext, Link } from "react-router-dom";
import { useState } from 'react';
import { InputNum } from '../inputNum.jsx'
import { IconBtn, Button } from '../components/Buttons'

import { CiCircleRemove } from "react-icons/ci";



function Product( {product, removeProduct} ) {
    const [quantity, setQuantity] = useState(product.quantity)
    const [cart, setCart] = useOutletContext()

    function handleChange(e){
        const newQuantity = parseInt(e.target.value);
        setQuantity(newQuantity);
    
        const updatedCart = cart.map((p) =>
          p.id === product.id ? { ...p, quantity: newQuantity } : p
        );
    
        setCart(updatedCart);

    }
    return (
        <>
        <tr key={product.id}>
            <td>
            <IconBtn type="button" onClick={() => removeProduct(product)}>
                <CiCircleRemove />
            </IconBtn>            </td>
            <td><img src={product.image} width={100}></img></td>
            <td>{product.title}</td>
            <td>${product.price}</td>
            <td>
                <InputNum handleChange={handleChange} quantity={quantity} product={product} />
            </td>
            <td>${product.price * product.quantity}</td>
        </tr>

        </>
    )
}

const Cart = () => {
    const [cart, setCart] = useOutletContext()

    function getTotal(){
        let total = cart.reduce((a, v) => a = a + v.price * v.quantity, 0 )
        return total.toFixed(2)
    }

    function removeProduct(productToRemove) {
        const updatedCart = cart.filter(product => product.id !== productToRemove.id);
        setCart(updatedCart);
    }
    const shippingCost = 8.99
    const totalWithShipping = (parseFloat(getTotal()) + shippingCost).toFixed(2);

    return (
        <div id="cartContent">
            {cart.length < 1 && 
            <>
                <p>Cart is empty...
                    <Link style={{color: "darkblue"}} to={`/shop`}>
                         go Shopping.
                    </Link>
                </p>
            </>
            }

            {cart.length > 0 && 
            <>
                <table id="cartTable">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    { cart.map(product => <Product key={product.id} product={product} removeProduct={removeProduct} />) }
                </tbody>
            </table>
            <table id="totalTable">
                <thead>
                    <tr>
                        <th>Cart Totals</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Subtotal</td>
                        <td>${getTotal()}</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>${shippingCost}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>${totalWithShipping}</td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                        <Button>CHECK OUT</Button>
                        </td>
                    </tr>
                </tbody>
            </table> 
            </>         
            }

        </div>
    )
}

export default Cart;