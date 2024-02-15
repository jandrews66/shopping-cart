import { useOutletContext } from "react-router-dom";
import { InputNum } from '../inputNum.jsx'
import { IconBtn, Button } from '../components/Buttons'
import { TiDelete } from "react-icons/ti";


const Cart = () => {
    const [cart, setCart] = useOutletContext()

    function getTotal(){
        let total = cart.reduce((a, v) => a = a + v.price * v.quantity, 0 )
        return total.toFixed(2)
    }

    function removeProduct(e, product){
        e.preventDefault()
        let index = cart.indexOf(product)
        cart.splice(index, 1)
        setCart([
            ...cart,
        ])
    }

    return(
        <>
            <p>Cart</p>
            <ul>
                {cart &&
                    cart.map(product => 
                    <li key={product.id}>
                        <div className="cartItem">
                            <div className="imgContainer">
                                <img src={product.image} width={100}></img>
                                <IconBtn type="button" onClick={(e) => removeProduct(e, product)}><TiDelete /></IconBtn>
                            </div>
                            <p>{product.title}</p>
                            <p>${product.price.toFixed(2)}</p>
                        </div>
                        <InputNum product={product} amount={product.quantity} showAdd={false}/>

                    </li>
                )}
            </ul>
            <p>Cart Total: ${getTotal()}</p>
        </>
    )
}

export default Cart;