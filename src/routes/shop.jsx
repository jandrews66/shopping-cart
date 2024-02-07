import { useState } from 'react';
import { Fetch } from '../fetch.jsx'
import { useNavigate } from "react-router-dom";
import Product from './product.jsx'

export default function Shop(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selected, setSelected] = useState(null)
    const navigate = useNavigate();

 

    function handleClick(product){
        navigate(`/shop/product/${product.id}`);    
        setSelected(product)
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
            <div>{`There is a problem fetching the data - ${error}`}</div>
            )}
            <ul>
                {data &&
                    data.map( product => 
                    <li key={product.id} onClick={ () => handleClick(product)}>
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                        <img src={product.image} width={100}></img>
                    </li>
                )}
            </ul>
            {selected && <Product selected={selected} />}


        </>
    )
}