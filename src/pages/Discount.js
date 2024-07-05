import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Discount() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://localhost:5001/api/Products/ViewProductByDiscount?pageIndex=1&pageSize=4')
      .then(response => {
        // Check if response.data is an array
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error('Response data is not an array:', response.data);
          setProducts([]);
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Discounted Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <p><strong>Type:</strong> {product.name}</p>
            <p><strong>Title:</strong> {product.unitPrice}</p>
            <p><strong>Detail:</strong> {product.priceSold}</p>
            <p><strong>Additional Prop 1:</strong> {product.quantity}</p>
            <p><strong>Additional Prop 2:</strong> {product.quantitySold}</p>
            <p><strong>Additional Prop 3:</strong> {product.brandName}</p>
            <p><strong>Additional Prop 4:</strong> {product.country}</p>
            <p><strong>Additional Prop 5:</strong> {product.status}</p>
            <p><strong>Additional Prop 6:</strong> {product.imageLink}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Discount;