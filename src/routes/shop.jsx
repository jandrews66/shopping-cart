import { useState } from 'react';
import { Fetch } from '../fetch.jsx'
import { useNavigate } from "react-router-dom";
import Loading from '../components/Loading.js'

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
            <Fetch
            setData={setData}
            setLoading={setLoading}
            setError={setError}
            />
            {loading && <Loading/>}
            {error && (
            <div>{`There is a problem fetching products - ${error}`}</div>
            )}
            <ul className="cardContainer">
                {data &&
                    data.map( product => 
                    <li key={product.id} 
                    className="card"
                    onClick={ () => handleClick(product.id)}>
                        <div className="imgContainer">
                            <img src={product.image} width={120}></img>
                        </div>
                        <p>{product.title}</p>
                        <p className="productPrice">${product.price.toFixed(2)}</p>
                    </li>
                )}
            </ul>


        </>
    )
}