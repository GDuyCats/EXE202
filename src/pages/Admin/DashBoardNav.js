import { React, useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { FaPenAlt } from "react-icons/fa";
function DashBoardNav() {
    const location = useLocation();
    const [url, setUrl] = useState(location.pathname);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);
    const adminNavCss = "text-3xl ml-20 font-semibold hover:border-b-blue_dbf9ff hover:border-b-2"
    return (
        <div className='text-white fixed left-0 top-0 bg-blue_073d4d w-1/6 h-full z-50 '>
            <div className='flex pt-10'>
                <FaPenAlt size={40} className='text-blue_6bccde ml-3 ' />
                <p className='text-5xl font-semibold text-blue_6bccde ml-5 mb-5'>THỐNG KÊ</p>
            </div>
            <div className='py-10'>
                <Link to="/admin" className={`${adminNavCss} ${url === "/admin" ? "border-b-blue_a2dde8 border-b-2" : ""}`}>DOANH THU</Link>
            </div>
            <div className='pb-10'>
                <Link to="/mod" className={`${adminNavCss} ${url === "/mod" ? "border-b-blue_a2dde8 border-b-2" : ""}`}>QUẢN TRỊ VIÊN</Link>
            </div>
            <div className='flex'>
                <FaPenAlt size={40} className='text-blue_6bccde ml-3' />
                <p className='text-5xl font-semibold text-blue_6bccde ml-5 mb-5'>QUẢN LÝ</p>
            </div>
            <div>
                <div className='pt-10'>
                    <Link to="/admin/ProductManagement" className={`${adminNavCss}` + (url === "/admin/ProductManagement" ? "bg-blue_c0foff rounded-full" : "")}>SẢN PHẨM</Link>
                </div>
                <div className='pt-10'>
                    <Link to="/admin/getAllOrders" className={`${adminNavCss}` + (url === "/admin/getAllOrders" ? "bg-blue_c0foff rounded-full" : "")}>ĐƠN HÀNG</Link>
                </div>
                <div className='py-10 '>
                    <Link to="/admin/getAllAccount" className={`${adminNavCss}` + (url === "/admin/getAllAccount" ? "bg-blue_c0foff rounded-full" : "")}>TÀI KHOẢN</Link>
                </div>
            </div>
            <div className='flex'>
                <FaPenAlt size={30} className='text-blue_6bccde ml-3' />
                <p className='text-4xl font-semibold text-blue_6bccde ml-5 mb-5'>PHƯƠNG TIỆN</p>
            </div>
            <div className='pt-10'>
                <Link to="/admin/Shipcompany" className={`${adminNavCss}` + (url === "/admin/Shipcompany" ? "bg-blue_c0foff rounded-full" : "")}>SHIP COMPANY</Link>
            </div>
        </div>
    )
}

export default DashBoardNav
