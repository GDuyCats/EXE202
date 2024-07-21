import React, { useState } from 'react'
import LogoImg from '../../assets/Without slogan.png'
import { IoMenu } from "react-icons/io5";
import DashBoardNav from './DashBoardNav';
import { CiSearch } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import LineChartMonth from './LineChartMonth';
import LineChartWeek from './LineChartWeek';
function DashBoard() {
    const [clicked, setClicked] = useState(false)
    const toggleClicked = () => {
        setClicked(prevClicked => !prevClicked)
    }
    return (
        <>
            <div className='flex relative bg-blue_a2dde8'>
                <div className='flex relative bg-blue_073d4d w-[20%] '>
                    <div className='flex p-2 fixed w-full    '>
                        <img src={LogoImg} alt='logo' className='w-[60px] h-[60px] ml-2 mt-2' />
                        <IoMenu className=' text-blue_177f9f mt-5 ml-40 cursor-pointer' onClick={toggleClicked} size={40} />
                    </div>
                </div>
                {clicked && (
                        <DashBoardNav />
                    )}
                <div className='w-[80%]'>
                    
                    <div className='p-5'>
                        <p className='font-semibold text-2xl'>SỐ LIỆU CHÍNH</p>
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
                        <p className='font-semibold text-2xl mt-2 mb-2'>DOANH THU THÁNG</p>
                        <div className='bg-white'>
                            <LineChartMonth />
                        </div>
                        <p className='font-semibold text-2xl mt-2 mb-2'>DOANH THU TUẦN</p>
                        <div className='bg-white'>
                            <LineChartWeek />
                        </div>
                        <p className='font-semibold text-2xl mt-2 mb-2'>TOP 5 SẢN PHẨM BÁN CHẠY</p>
                        <div className='flex'>
                            <p className='text-blue_177f9f font-bold text-xl'>Tính Theo: </p>
                            <select className='ml-2'>
                                <option value="">Tháng</option>
                                <option value="">Năm</option>
                                <option value="">Ngày</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


export default DashBoard
