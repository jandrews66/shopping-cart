import { useState } from 'react';
import { Fetch } from '../fetch.jsx'
import { useNavigate } from "react-router-dom";

export default function Shop(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    function handleClick(id){
        navigate(`/shop/product/${id}`);    
    }

    return (
        <>
            <p>Shop</p>
            <Fetch
            setData={setData}
            setLoading={setLoading}
            setError={setError}
            />
            {loading && <div>Loading products...</div>}
            {error && (
            <div>{`There is a problem fetching products - ${error}`}</div>
            )}
            <ul>
                {data &&
                    data.map( product => 
                    <li key={product.id} onClick={ () => handleClick(product.id)}>
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                        <img src={product.image} width={100}></img>
                    </li>
                )}
            </ul>


        </>
    )
}