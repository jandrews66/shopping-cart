import { useState } from 'react';

const Product = ({ selected }) => {
    if (!selected) {
      return <div>No product selected</div>;
    }
  
    return (
      <div>
        <h2>{selected.title}</h2>
        <p>${selected.price}</p>
        <p>{selected.description}</p>
        <img src={selected.image} width={150} alt={selected.title} />
      </div>
    );
  };
  
  export default Product;