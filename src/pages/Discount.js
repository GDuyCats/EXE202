import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiSearchAlt } from 'react-icons/bi';


function Discount() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://localhost:5001/api/Products/ViewProductByDiscount?pageIndex=1&pageSize=4')
      .then(response => {
        const { data } = response.data; // Extract the data property from response.data
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Expected an array but got:', data);
          setProducts([]);
        }
        setLoading(false);
        console.log(data);
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

  const convertToPercentage = (value) => {
    return `${value * 100}%`;
  };

  const formatNumber = (value) => {
    return value.toLocaleString('de-DE');
  };

  return (
    <div className='bg-blue_a2dde8 flex'>

      <div className='w-[430px] h-[1900px] rounded-3xl ml-10 mt-10 bg-blue_d5f8ff'>
        <div className='rounded-t-3xl bg-blue_177f9f text-center items-center font-bold text-white text-2xl px-5 py-3 flex justify-center'>
          <p className='ml-2'>BỘ LỌC TÌM KIẾM . . .</p>
          <BiSearchAlt size={50} className='-scale-x-100' />
        </div>
        <div className='bg-blue_baf4ff w-[380px] mt-3 mx-auto py-5'>
          <div className='ml-2 font-medium text-2xl'>
            <p>THEO DANH MỤC</p>
          </div>
          <div className='ml-5'>
            <input type='checkbox'className='mr-2 -mt-[2px]'/>
            <label>SỮA DINH DƯỠNG</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox'className='mr-2 -mt-[2px]'/>
            <label>THỰC PHẨM CHỨC NĂNG</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox'className='mr-2 -mt-[2px]'/>
            <label>THỰC PHẨM CHẾ BIÊN</label>
          </div>
        </div>
        <div className='bg-blue_baf4ff w-[380px] my-10 mx-auto py-5'>
          <div className='ml-2 font-medium text-2xl'>
            <p>THEO NƠI BÁN</p>
          </div>
          <div className='ml-5'>
            <input type='checkbox'className='mr-2 -mt-[2px]'/>
            <label>HÀ NỘI</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox'className='mr-2 -mt-[2px]'/>
            <label>THÀNH PHỐ HỒ CHÍ MINH</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox'className='mr-2 -mt-[2px]'/>
            <label>HẢI PHÒNG</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox'className='mr-2 -mt-[2px]'/>
            <label>ĐỒNG NAI</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox'className='mr-2 -mt-[2px]'/>
            <label>BÌNH DƯƠNG</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox'className='mr-2 -mt-[2px]'/>
            <label>ĐÀ NẴNG</label>
          </div>
        </div>
      </div>

      <ul className='grid grid-cols-3 gap-10 mr-5 ml-auto'>
        {products.map((product, index) => (
          <li key={index} className='w-[400px] h-[550px] bg-blue_eefcff justify-center mb-10 mt-10 rounded-3xl relative'>
            <div className='right-0 left-auto bg-red-600 text-center w-[80px] h-[100px] text-3xl text-white font-extrabold absolute'>
              <p className='pt-5'>{convertToPercentage(product?.discountPercent)} OFF</p>
              <div className='triangl'></div>
            </div>
            <img src={product?.imageLink} alt={product?.name} className='w-[200px] h-[250px] rounded-3xl mx-auto my-10' />
            <p className='bg-blue_baf4ff rounded-3xl font-bold text-center text-xl text-blue_073d4d w-[300px] h-[100px] mx-auto justify-center'>{product?.name}</p>
            <p className='font-bold text-center text-3xl line-through text-blue_177f9f mt-5'>{formatNumber(product?.unitPrice)} VND</p>
            <p className='font-bold text-center text-4xl mt-2 text-red-600'>{formatNumber(product?.priceSold)} VND</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Discount;
