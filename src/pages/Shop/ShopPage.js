import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from 'axios';
import { Link } from 'react-router-dom';
import DiscountNavBar from '../Discount/DiscountNavBar';

function Shop() {
  const [pageIndex, setPageIndex] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const pageSize = 6;
        const totalProductResponse = await axios.get(`https://ohecaa.azurewebsites.net/api/Products/GetCountProduct`);
        const totalProduct = totalProductResponse.data;
        setTotalPages(Math.ceil(totalProduct / pageSize));

        const response = await axios.get(`https://ohecaa.azurewebsites.net/api/Products/ViewAllProduct`);
        const { data } = response.data;
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getCurrentPageProducts = () => {
    const pageSize = 6;
    const startIndex = (pageIndex - 1) * pageSize;
    return products.slice(startIndex, startIndex + pageSize);
  };

  if (loading) {
    return (
      <div className='h-screen w-screen bg-blue_a2dde8 flex items-center justify-center'>
        <p className='text-9xl font-bold'>Loading</p>
        <span className='animate-bounce text-9xl font-bold'>.</span>
        <span className='text-9xl font-bold animate-bounce [animation-delay:-0.15s]'>.</span>
        <span className='[animation-delay:-0.3s] animate-bounce text-9xl font-bold'>.</span>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <span
          key={i}
          onClick={() => setPageIndex(i)}
          className={`self-center mx-4 text-2xl cursor-pointer px-1 font-semibold ${pageIndex === i ? 'underline text-black' : 'text-gray-600 hover:text-blue_073d4d'}`}
        >
          {i}
        </span>
      );
    }
    return pages;
  };

  return (
    <div className='bg-blue_a2dde8 flex'>
      <DiscountNavBar />
      <div className='mr-5 ml-auto'>
        <ul className='grid grid-cols-3 gap-10'>
          {getCurrentPageProducts().map((product, index) => (
            <li key={index} className='w-[400px] h-[550px] bg-blue_eefcff justify-center mb-10 mt-10 rounded-3xl relative'>
              <div className='right-0 left-auto bg-red-600 text-center w-[80px] h-[100px] text-3xl text-white font-extrabold absolute'>
                <p className='pt-5'>{(product?.discountPercent * 100).toFixed(0)}% OFF</p>
              </div>
              <img src={product?.imageLink} alt={product?.name} className='w-[200px] h-[250px] rounded-3xl mx-auto my-10' />
              <Link to={`/productdetail/${product.id}`}>
                <p className='bg-blue_baf4ff rounded-3xl font-bold text-center text-xl text-blue_073d4d w-[300px] h-[70px] mx-auto justify-center'>{product?.name}</p>
              </Link>
              <p className='font-bold text-center text-3xl line-through text-blue_177f9f mt-5'>{product?.unitPrice.toLocaleString('de-DE')} VND</p>
              <p className='font-bold text-center text-4xl mt-2 text-red-600'>{product?.priceSold.toLocaleString('de-DE')} VND</p>
            </li>
          ))}
        </ul>
        {/* Pagination */}
        <div className="flex justify-center my-4">
          <button
            onClick={() => setPageIndex(prev => Math.max(prev - 1, 1))}
            disabled={pageIndex === 1}
            className="text-black p-2 rounded-full disabled:opacity-50 bg-slate-200"
          >
            <FaArrowLeft />
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => setPageIndex(prev => Math.min(prev + 1, totalPages))}
            disabled={pageIndex === totalPages}
            className="text-black p-2 rounded-full disabled:opacity-50 bg-slate-200"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
