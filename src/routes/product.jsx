import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Fetch } from '../fetch.jsx'
import { InputNum } from '../inputNum.jsx'
import { useNavigate } from "react-router-dom";
import Loading from '../components/Loading.js'


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
                        <InputNum product={data}/>
                    </div>
                </div>

            </div>
            }
        </>
    )
  };
  
  export default Product;