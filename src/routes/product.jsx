import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Fetch } from '../fetch.jsx'
import { InputNum } from '../inputNum.jsx'
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";


const Product = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //get id from URL
    let id = useParams();
    const navigate = useNavigate();


    return (
        <>
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
                <InputNum product={data}/>
            </div>
            }
        </>
    )
  };
  
  export default Product;