import React, { useState } from 'react'
import LogoImg from '../../assets/Without slogan.png'
import { IoMenu } from "react-icons/io5";
import LineChartMonth from './LineChartMonth';
import LineChartWeek from './LineChartWeek';
import Top5Product from './Top5Product';
function DashBoard() {
    const [clicked, setClicked] = useState(false)
    const toggleClicked = () => {
        setClicked(prevClicked => !prevClicked)
    }
    return (
        <>
            <div className='flex relative bg-blue_a2dde8 mr-0 ml-auto w-5/6'>
                <div className='p-5 mt-20 mr-10 w-full'>
                    <p className='font-semibold text-2xl my-5'>SỐ LIỆU CHÍNH</p>
                    <div className='flex'>
                        <div className='bg-blue_177f9f text-white p-2 w-[30%] '>
                            <p className='text-3xl font-bold'>8.91B</p>
                            <p className='text-blue_073d4d font-semibold'>TỔNG DOANH THU</p>
                        </div>
                        <div className='bg-blue_177f9f text-white p-2 w-[30%] ml-5'>
                            <p className='text-3xl font-bold'>123.4K</p>
                            <p className='text-blue_073d4d font-semibold'>TỔNG ĐƠN HÀNG</p>
                        </div>
                        <div className='bg-blue_177f9f text-white p-2 w-[30%] ml-5'>
                            <p className='text-3xl font-bold'>246.7K</p>
                            <p className='text-blue_073d4d font-semibold'>TỔNG SẢN PHẨM ĐÃ BÁN</p>
                        </div>
                    </div>
                    <p className='font-semibold text-2xl my-5'>DOANH THU THÁNG</p>
                    <LineChartMonth />
                    <p className='font-semibold text-2xl my-5'>DOANH THU TUẦN</p>

                    <LineChartWeek />

                    <p className='font-semibold text-2xl my-5'>TOP 5 SẢN PHẨM BÁN CHẠY</p>
                    <Top5Product/>
                </div>

            </div>
        </>
    )
}


export default DashBoard
