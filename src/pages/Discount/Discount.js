import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DiscountNavBar from './DiscountNavBar';


function Discount() {
  const [pageIndex, setPageIndex] = useState(1)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState();
  const pageSize = 5;
  useEffect(() => {
    axios.get(`https://ohecaa.azurewebsites.net/api/Products/ViewProductByDiscount?${pageIndex}&pageSize=${pageSize}`)
      .then(response => {
        const { data } = response.data; // Extract the data property from response.data
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Expected an array but got:', data);
          setProducts([]);
        }
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className='h-screen w-screen bg-blue_a2dde8 flex items-center justify-center'>
        <p className='text-9xl font-bold '>Vui lòng chờ</p>
        <span className='animate-bounce text-9xl font-bold'>.</span>
        <span className='text-9xl font-bold animate-bounce [animation-delay:-0.15s]'>.</span>
        <span className='[animation-delay:-0.3s] animate-bounce text-9xl font-bold'>.</span>
      </div>
      )
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

  const renderPageNumbers = () => {
    const pages = [];
    const maxPages = 5;
    let startPage = Math.max(pageIndex - Math.floor(maxPages / 2), 1);
    let endPage = startPage + maxPages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxPages + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <span
          key={i}
          onClick={() => setPageIndex(i)}
          className={`self-center mx-4 text-2xl cursor-pointer px-1 font-semibold ${pageIndex === i ? ' underline text-black' : 'text-gray-600 hover:text-blue_073d4d'}`}
        >
          {i}
        </span>
      );
    }
    return pages;
  };

  return (
    <div className='bg-blue_a2dde8 flex'>
     <DiscountNavBar/>
      <div className='mr-5 ml-auto'>
        <ul className='grid grid-cols-3 gap-10 '>
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
      </div>
    </div>
  );
}

export default Discount;
