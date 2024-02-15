import { useState } from 'react';
import { useOutletContext } from "react-router-dom";
import styled, { css } from 'styled-components';
import { IconBtn, Button } from './components/Buttons'


//if InputNum is called from product, use the default props
//true is Add to Cart, false is Update Cart and Remove Product
export const InputNum = ({product, amount = 1, showAdd = true }) => {
    const [quantity, setQuantity] = useState(amount)
    const [cart, setCart] = useOutletContext()
    const [highlight, setHighlight] = useState(false)

    function addToCart(e){
        e.preventDefault()
        setQuantity(1)
        const i = cart.findIndex(e => e.id == product.id)
        //if product is already in cart, increase quantity of exisiting product object
        if (i > -1){
            cart[i].quantity += quantity;
            setCart([...cart,])
        } else {
            product.quantity = quantity;
            setCart([
                ...cart,
                product,
            ])
        }

    }

    function updateCart(e){
        e.preventDefault()
        let index = cart.indexOf(product)
        cart[index].quantity = quantity
        setCart([
            ...cart,
        ])
        setHighlight(false)

    }

    function handleChange(e){
        setQuantity(e.target.value)
        //highlight update button when quantity is changed to prompt user to click
        setHighlight(true)

    }



    return (
        <>
        <form>
            <label>
                Quantity:<input type="number" min="1" max="10" value={quantity}
                onChange={e => handleChange(e)}
                ></input>
            </label>
            {showAdd &&
                <Button onClick={(e) => addToCart(e)}>ADD TO CART</Button>

            }
            {!showAdd &&
            //Show the update button when component is called from Cart
            <>
                {/* <button className={highlight ? "highlight" : null} onClick={(e) => updateCart(e)}>Update Cart</button> */}
                <Button 
                highlight={highlight}
                onClick={(e) => updateCart(e)}>
                UPDATE CART
                </Button>
            </>
            }

        </form>
        </>

    )
}