import { useOutletContext } from "react-router-dom";
import { InputNum } from '../inputNum.jsx'
import { IconBtn, Button } from '../components/Buttons'
import { TiDelete } from "react-icons/ti";

function Product( {product, removeProduct} ) {
    return (
        <tr key={product.id}>
            <td>
            <IconBtn type="button" onClick={() => removeProduct(product)}>
                <TiDelete />
            </IconBtn>            </td>
            <td><img src={product.image} width={100}></img></td>
            <td>{product.title}</td>
            <td>${product.price}</td>
            <td>
                <InputNum product={product} amount={product.quantity} showAdd={false}/>
            </td>
            <td>${product.price * product.quantity}</td>

        </tr>
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

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                        <th></th>
                    </tr>
                    </thead>

                    <tbody>
                        { cart.map(product => <Product key={product.id} product={product} removeProduct={removeProduct} />) }
                    </tbody>
            </table>
            <p>Cart Total: ${getTotal()}</p>
        </>
    )
}

export default Cart;