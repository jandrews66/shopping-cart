import { useOutletContext } from "react-router-dom";
import { InputNum } from '../inputNum.jsx'


const Cart = () => {
    const [cart, setCart] = useOutletContext()

    function getTotal(){
        let total = cart.reduce((a, v) => a = a + v.price * v.quantity, 0 )
        return total.toFixed(2)
    }
    return(
        <>
            <p>Cart</p>
            <ul>
                {cart &&
                    cart.map(product => 
                    <li key={product.id}>
                        <p>{product.title}</p>
                        <p>${product.price.toFixed(2)}</p>
                        <img src={product.image} width={100}></img>
                        <InputNum product={product} amount={product.quantity} showAdd={false}/>
                    </li>
                )}
            </ul>
            <p>Cart Total: ${getTotal()}</p>
        </>
    )
}

export default Cart;