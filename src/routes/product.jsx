import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Fetch } from '../fetch.jsx'
import { InputNum } from '../inputNum.jsx'


const Product = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //get id from URL
    let id = useParams();
    const [quantity, setQuantity] = useState(1)
    const [cart, setCart] = useState([])




    return (
        <>
        <p>Cart: {cart.length}</p>
         <Fetch
            setData={setData}
            setLoading={setLoading}
            setError={setError}
            id={id.productId}
            />
            {loading && <div>Loading products...</div>}
            {error && (
            <div>{`There is a problem fetching the product - ${error}`}</div>
            )}
            {data &&
            <div>
                <h2>{data.title}</h2>
                <p>${data.price}</p>
                <p>{data.description}</p>
                <img src={data.image} width={150}></img>
                <InputNum setQuantity={setQuantity} setCart={setCart} cart={cart} quantity={quantity} title={data.title}/>
            </div>
            }
        </>
    )
  };
  
  export default Product;