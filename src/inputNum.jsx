import { useState } from 'react';
import { useOutletContext } from "react-router-dom";

//if InputNum is called from product, use the default props
export const InputNum = ({product, amount = 1, showAdd = true }) => {
    const [quantity, setQuantity] = useState(amount)
    const [cart, setCart] = useOutletContext()

    function addToCart(e){
        e.preventDefault()
        product.quantity = quantity;
        setCart([
            ...cart,
            product,
        ])
        setQuantity(1)
    }

    function updateCart(e){
        e.preventDefault()
        let index = cart.indexOf(product)
        cart[index].quantity = quantity
        setCart([
            ...cart,
        ])
    }
    return (
        <>
        <form>
            <label>
                Quantity:<input type="number" min="1" max="10" value={quantity}
                onChange={e => setQuantity(e.target.value)}
                ></input>
            </label>
            {showAdd &&
                <button onClick={(e) => addToCart(e)}>Add to Cart</button>

            }
            
            {!showAdd &&
                <button onClick={(e) => updateCart(e)}>Update Cart</button>
            }

        </form>
        </>

    )
}