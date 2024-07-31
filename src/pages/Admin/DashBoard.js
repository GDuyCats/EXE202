import React, { useEffect, useState } from 'react'
import LogoImg from '../../assets/Without slogan.png'
import { IoMenu } from "react-icons/io5";
import LineChartMonth from './LineChartMonth';
import LineChartWeek from './LineChartWeek';
import Top5Product from './Top5Product';
import { getRevenue } from './getRevenue';
import { getAllProductSold } from './getAllproductSold';
import { getAllOrder } from './getAllOrder';
function DashBoard() {
  const [clicked, setClicked] = useState(false)
  const toggleClicked = () => {
    setClicked(prevClicked => !prevClicked)
  }
  const [productSold, setProductSold] = useState(null)
  const [revenueData, setRevenueData] = useState(null);
  const [orders, setOrders] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRevenueData = async () => {
      try {
        const data = await getRevenue();
        setRevenueData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRevenueData();
  }, []);

  useEffect(() => {
    const fetchAllProductSold = async () => {
      try {
        const data = await getAllProductSold();
        setProductSold(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProductSold();
  }, []);

  useEffect(() => {
    const fetchAllOrder = async () => {
      try {
        const data = await getAllOrder();
        setOrders(data);
        console.log(data)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllOrder();
  }, []);


  if (loading) {
    return (
      <div className='bg-blue_a2dde8 w-5/6 h-screen mr-0 ml-auto pt-[30%] flex pl-[25%]'>
        <p className='text-9xl font-bold '>Vui lòng chờ&nbsp;&nbsp;</p>
        <span className='animate-bounce text-9xl font-bold'>.</span>
        <span className='text-9xl font-bold animate-bounce [animation-delay:-0.15s]'>.</span>
        <span className='[animation-delay:-0.3s] animate-bounce text-9xl font-bold'>.</span>
      </div>
      )
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <>
      <div className='flex relative bg-blue_a2dde8 mr-0 ml-auto w-5/6'>
     
        <div className='p-5 mt-20 mr-10 w-full'>
          <p className='font-semibold text-2xl my-5'>SỐ LIỆU CHÍNH</p>
          <div className='flex'>
            <div className='bg-blue_177f9f text-white p-2 w-[30%] '>
              <p className='text-3xl font-bold'>{revenueData.data} VND</p>
              <p className='text-blue_073d4d font-semibold'>TỔNG DOANH THU</p>
            </div>
            <div className='bg-blue_177f9f text-white p-2 w-[30%] ml-5'>
              <p className='text-3xl font-bold'>{orders}</p>
              <p className='text-blue_073d4d font-semibold'>TỔNG ĐƠN HÀNG</p>
            </div>
            <div className='bg-blue_177f9f text-white p-2 w-[30%] ml-5'>
              <p className='text-3xl font-bold'>{productSold}</p>
              <p className='text-blue_073d4d font-semibold'>TỔNG SẢN PHẨM ĐÃ BÁN</p>
            </div>
          </div>
          <p className='font-semibold text-2xl my-5'>DOANH THU THÁNG</p>
          <LineChartMonth />
          <p className='font-semibold text-2xl my-5'>DOANH THU TUẦN</p>

          <LineChartWeek />

          <p className='font-semibold text-2xl my-5'>TOP 5 SẢN PHẨM BÁN CHẠY</p>
          <Top5Product />
        </div>

      </div>
    </>
  )
}


export default DashBoard
