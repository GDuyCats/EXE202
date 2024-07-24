import React from 'react'
import { Link } from 'react-router-dom';
import { FaPenAlt } from "react-icons/fa";
function DashBoardNav() {
    return (
        <div className='text-white fixed left-0 top-0 bg-blue_073d4d w-1/6 h-full z-50 '>
            <div className='flex pt-5'>
                <FaPenAlt size={30} className='text-blue_6bccde ml-3' />
                <p className='text-4xl font-semibold text-blue_6bccde ml-5 mb-5'>THỐNG KÊ</p>
            </div>
            <div>
                <p className='text-2xl mt-1 ml-16 font-semibold'>DOANH THU</p>
            </div>
            <div>
                <p className='text-2xl mt-1 ml-16 font-semibold'>DIỄN ĐÀN</p>
                <p className='text-2xl mt-1 ml-16 font-semibold'>NGƯỜI DÙNG</p>
                <p className='text-2xl mt-1 ml-16 font-semibold mb-5'>SẢN XUẤT</p>
            </div>
            <div className='flex'>
                <FaPenAlt size={30} className='text-blue_6bccde ml-3' />
                <p className='text-4xl font-semibold text-blue_6bccde ml-5 mb-5'>QUẢN LÝ</p>
            </div>
            <div>
                <p className='text-2xl mt-1 ml-16 font-semibold'>DANH MỤC</p>
                <Link to = "/admin/ProductManagement"className='text-2xl mt-1 ml-16 font-semibold'>SẢN PHẨM</Link>
                <p className='text-2xl mt-1 ml-16 font-semibold'>ĐƠN HÀNG</p>
                <p className='text-2xl mt-1 ml-16 font-semibold'>BÀI VIẾT</p>
                <p className='text-2xl mt-1 ml-16 font-semibold'>TÀI KHOẢN</p>
                <p className='text-2xl mt-1 ml-16 font-semibold mb-5'>LIÊN HỆ</p>
            </div>
            <div className='flex'>
                <FaPenAlt size={30} className='text-blue_6bccde ml-3' />
                <p className='text-4xl font-semibold text-blue_6bccde ml-5 mb-5'>PHƯƠNG TIỆN</p>
            </div>
            <div>
                <Link to="/admin/Shipcompany" className='text-2xl mt-1 ml-16 font-semibold'>SHIP COMPANY</Link>
                <p className='text-2xl mt-1 ml-16 font-semibold'>THÔNG BÁO</p>
                <p className='text-2xl mt-1 ml-16 font-semibold'>HÌNH ẢNH</p>
                <p className='text-2xl mt-1 ml-16 font-semibold mb-5'>NỘI DUNG</p>
            </div>
            <div className='flex'>
                <FaPenAlt size={30} className='text-blue_6bccde ml-3' />
                <p className='text-4xl font-semibold text-blue_6bccde ml-5 mb-5'>KHÁC</p>
            </div>
            <div>
                <p className='text-2xl mt-1 ml-16 font-semibold'>CÀI ĐẶT</p>
                <p className='text-2xl mt-1 ml-16 font-semibold'>CÔNG CỤ</p>
                <p className='text-2xl mt-1 ml-16 font-semibold mb-5'>MÁY CHỦ</p>
            </div>
        </div>
    )
}

export default DashBoardNav
