import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Discount() {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/Products/ViewProductByDiscount?pageIndex=1&pageSize=4')
      .then(response => {
        if (Array.isArray(response.data)) {
          setProducts(response.data);
          console.log(response.data)
        } else if (response.data && typeof response.data === 'object') {
          const productsArray = Object.values(response.data);
          setProducts(productsArray);
        } else {
          console.error('Response data is not an array or object:', response.data);
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
            {/* Use optional chaining (?.) to safely access nested properties */}
            <p>{product?.name}</p>
            <p>{product?.unitPrice}</p>
            <p>{product?.priceSold}</p>
            {/* Include other properties as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Discount;
