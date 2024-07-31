import { React, useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { FaPenAlt } from "react-icons/fa";
function DashBoardNav() {
    const location = useLocation();
    const [url, setUrl] = useState(location.pathname);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);
    const adminNavCss = "text-2xl p-[1px] ml-16 font-semibold hover:border-b-blue_dbf9ff hover:border-b-2"
    return (
        <div className='text-white fixed left-0 top-0 bg-blue_073d4d w-1/6 h-full z-50 '>
            <div className='flex pt-2'>
                <FaPenAlt size={30} className='text-blue_6bccde ml-3' />
                <p className='text-4xl font-semibold text-blue_6bccde ml-5 mb-5'>THỐNG KÊ</p>
            </div>
            <div className=''>
                <Link to="/admin" className={`${adminNavCss} ${url === "/admin" ? "border-b-blue_a2dde8 border-b-2" : ""}`}>DOANH THU</Link>
            </div>
            <div>
                <Link to="/mod" className={`${adminNavCss} ${url === "/mod" ? "border-b-blue_a2dde8 border-b-2" : ""}`}>QUẢN TRỊ VIÊN</Link>
                <p className='text-2xl mt-1 ml-16 font-semibold'>NGƯỜI DÙNG</p>
                <p className='text-2xl mt-1 ml-16 font-semibold mb-5'>SẢN XUẤT</p>
            </div>
            <div className='flex'>
                <FaPenAlt size={30} className='text-blue_6bccde ml-3' />
                <p className='text-4xl font-semibold text-blue_6bccde ml-5 mb-5'>QUẢN LÝ</p>
            </div>
            <div>
                <p className='text-2xl mt-1 ml-16 font-semibold'>DANH MỤC</p>
                <div className=''>
                    <Link to="/admin/ProductManagement" className={`text-2xl mt-1 ml-16 font-semibold group-hover:border-b-blue_177f9f` + (url === "/admin/ProductManagement" ? "bg-blue_c0foff rounded-full" : "")}>SẢN PHẨM</Link>
                </div>

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
