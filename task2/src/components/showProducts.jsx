import React, { useState } from 'react';
import { products } from './products';
import ProductList from './productList';
import Sidebar from './sidebar';

const uniqueCategories = [...new Set(products.map(product => product.category))];
export const ShowProducts = () => {
    const [filteredCategory, setFilteredCategory] = useState('');
  const [sortBy, setSortBy] = useState('price');

  const filterProducts = () => {
    return products
      .filter(product => !filteredCategory || product.category === filteredCategory)
      .sort((a, b) => (sortBy === 'price' ? a.price - b.price : a.name.localeCompare(b.name)));
  };
  // console.log(filterProducts());
  return (
    <div className='row'>
      <div className="col-3">
      <Sidebar
        categories={uniqueCategories}
        onFilterChange={e => setFilteredCategory(e.target.value)}
        onSortChange={e => setSortBy(e.target.value)}
      />
      </div>
      <div className="col-9">
      <ProductList products={filterProducts()} />
      </div>
    </div>
  )
}
