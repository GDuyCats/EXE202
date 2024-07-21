import React from 'react'
import { Link } from 'react-router-dom';
import { FaPenAlt } from "react-icons/fa";
function DashBoardNav() {
    return (
        <div className='text-white fixed left-0 top-16 bg-blue_073d4d w-[20%] h-full'>
            <div className='flex pt-5'>
                <FaPenAlt size={30} className='text-blue_6bccde ml-3' />
                <p className='text-2xl font-semibold text-blue_6bccde ml-5'>THỐNG KÊ</p>
            </div>
            <div>
                <p className='text-xl mt-1 ml-20'>DOANH THU</p>
            </div>
            <div>
                <p className='text-xl mt-1 ml-20'>DIỄN ĐÀN</p>
                <p className='text-xl mt-1 ml-20'>NGƯỜI DÙNG</p>
                <p className='text-xl mt-1 ml-20'>SẢN XUẤT</p>
            </div>
            <div className='flex'>
                <FaPenAlt size={30} className='text-blue_6bccde ml-3' />
                <p className='text-2xl font-semibold text-blue_6bccde ml-5'>QUẢN LÝ</p>
            </div>
            <div>
                <p className='text-xl mt-1 ml-20'>DANH MỤC</p>
                <p className='text-xl mt-1 ml-20'>SẢN PHẨM</p>
                <p className='text-xl mt-1 ml-20'>ĐƠN HÀNG</p>
                <p className='text-xl mt-1 ml-20'>BÀI VIẾT</p>
                <p className='text-xl mt-1 ml-20'>TÀI KHOẢN</p>
                <p className='text-xl mt-1 ml-20'>LIÊN HỆ</p>
            </div>
            <div className='flex'>
                <FaPenAlt size={30} className='text-blue_6bccde ml-3' />
                <p className='text-2xl font-semibold text-blue_6bccde ml-5'>PHƯƠNG TIỆN</p>
            </div>
            <div>
                <Link to="/dashboard/Shipcompany" className='text-xl mt-1 ml-20'>SHIP COMPANY</Link>
                <p className='text-xl mt-1 ml-20'>THÔNG BÁO</p>
                <p className='text-xl mt-1 ml-20'>HÌNH ẢNH</p>
                <p className='text-xl mt-1 ml-20'>NỘI DUNG</p>
            </div>
            <div className='flex'>
                <FaPenAlt size={30} className='text-blue_6bccde ml-3' />
                <p className='text-xl font-semibold text-blue_6bccde ml-5 '>KHÁC</p>
            </div>
            <div>
                <p className='text-xl mt-1 ml-20'>CÀI ĐẶT</p>
                <p className='text-xl mt-1 ml-20'>CÔNG CỤ</p>
                <p className='text-xl mt-1 ml-20'>MÁY CHỦ</p>
            </div>
        </div>
    )
}

export default DashBoardNav
