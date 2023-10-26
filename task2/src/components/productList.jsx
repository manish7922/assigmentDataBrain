// ProductList.js
import React from 'react';
import Product from './product';

const ProductList = ({ products }) => {
  return (
    <div className='row'>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

