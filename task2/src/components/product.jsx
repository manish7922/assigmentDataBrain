
import React from 'react';
import './product.css'; 

const Product = ({ product }) => {
  return (
    <div className="col-4">
    <div className="product-box">
      <h3>{product.name}</h3>
      <p className="product-info">Category: {product.category}</p>
      <p className="product-info">Price: ${product.price}</p>
    </div>
    </div>
  );
};

export default Product;
