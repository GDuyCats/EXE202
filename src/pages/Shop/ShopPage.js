import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Discount() {
  const [pageIndex, setPageIndex] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(5);

  const pageSize = 2;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://ohecaa.azurewebsites.net/api/Products/ViewAllProduct?pageIndex=${pageIndex}&pageSize=${pageSize}`);
        const { data, message } = response.data;
        if (Array.isArray(data)) {
          setProducts(data);
          // setTotalPages(Math.ceil(parseInt(message.match(/\d+/)) / pageSize));
        } else {
          console.error('Expected an array but got:', data);
          setProducts([]);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [pageIndex]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const convertToPercentage = (value) => {
    return `${value * 100}%`;
  };

  const formatNumber = (value) => {
    return value.toLocaleString('de-DE');
  };

  return (
    <div className='bg-blue_a2dde8 flex'>
      <div className='mr-5 ml-auto'>
        <ul className='grid grid-cols-3 gap-10'>
          {products.map((product, index) => (
            <li key={index} className='w-[400px] h-[550px] bg-blue_eefcff justify-center mb-10 mt-10 rounded-3xl relative'>
              <div className='right-0 left-auto bg-red-600 text-center w-[80px] h-[100px] text-3xl text-white font-extrabold absolute'>
                <p className='pt-5'>{convertToPercentage(product?.discountPercent)} OFF</p>
              </div>
              <img src={product?.imageLink} alt={product?.name} className='w-[200px] h-[250px] rounded-3xl mx-auto my-10' />
              <p className='bg-blue_baf4ff rounded-3xl font-bold text-center text-xl text-blue_073d4d w-[300px] h-[70px] mx-auto justify-center'>{product?.name}</p>
              <p className='font-bold text-center text-3xl line-through text-blue_177f9f mt-5'>{formatNumber(product?.unitPrice)} VND</p>
              <p className='font-bold text-center text-4xl mt-2 text-red-600'>{formatNumber(product?.priceSold)} VND</p>
            </li>
          ))}
        </ul>

        {/* Phân trang */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setPageIndex(prev => Math.max(prev - 1, 1))}
            disabled={pageIndex === 1}
            className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="self-center mx-2">{pageIndex <= (totalPages - 2) ? pageIndex : (totalPages - 2)}</span>
          <span className="self-center mx-2">{(pageIndex + 1) <= (totalPages - 1) ? (pageIndex + 1) : (totalPages - 1)}</span>
          <span className="self-center mx-2">{(pageIndex + 2) <= (totalPages) ? (pageIndex + 2) : (totalPages)}</span>
          <button
            onClick={() => {
              if (pageIndex < totalPages) {
                setPageIndex(prev => prev + 1);
              }
            }}
            disabled={pageIndex >= totalPages}
            className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}

export default Discount;
