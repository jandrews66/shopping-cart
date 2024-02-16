import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Fetch } from '../fetch.jsx'
import { InputNum } from '../inputNum.jsx'
import { useNavigate } from "react-router-dom";
import Loading from '../components/Loading.js'
import { useOutletContext } from "react-router-dom";
import { IconBtn, Button } from '../components/Buttons'


const Product = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //get id from URL
    let id = useParams();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1)
    const [cart, setCart] = useOutletContext()


    function addToCart(e){
        e.preventDefault()
        setQuantity(1)
        const i = cart.findIndex(e => e.id == data.id)
        //if product is already in cart, increase quantity of exisiting product object
        if (i > -1){
            cart[i].quantity += quantity;
            setCart([...cart,])
        } else {
            data.quantity = quantity;
            setCart([
                ...cart,
                data,
            ])
        }
    }

    function handleChange(e){
        //e.target.value is a string so use parseInt to convert to an integer
        setQuantity(parseInt(e.target.value))
    }

    return (
        <>
         <Fetch
            setData={setData}
            setLoading={setLoading}
            setError={setError}
            id={id.productId}
            />
            {loading && <Loading/>}
            {error && (
            <div>{`There is a problem fetching the product - ${error}`}</div>
            )}
            {data &&
            <div className="product">
                <div className="imgContainer">
                    <img src={data.image} width={200}></img>
                </div>
                <div className="productInfo">
                    <h2>{data.title}</h2>
                    <p>${data.price.toFixed(2)}</p>
                    <p>{data.description}</p>
                    <div className="cartInput">
                        <InputNum handleChange={handleChange} quantity={quantity}  />
                        <Button onClick={(e) => addToCart(e)}>ADD TO CART</Button>

                    </div>
                </div>

            </div>
            }
        </>
    )
  };
  
  export default Product;