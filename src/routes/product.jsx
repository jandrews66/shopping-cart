import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Fetch } from '../fetch.jsx'


const Product = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let id = useParams();

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
                <p>Add to Cart</p>
            </div>
            }

        </>
    )
/*     return (
      <div>
        <h2>{product.title}</h2>
        <p>${selected.price}</p>
        <p>{selected.description}</p>
        <img src={selected.image} width={150} alt={selected.title} />
      </div>
    ); */
  };
  
  export default Product;