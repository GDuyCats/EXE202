import { React, useContext, useState } from 'react'
import { IoLogOut } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';
import { FaShoppingCart } from 'react-icons/fa';
import { MdFeedback } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthContext';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import DefaultPictureProfile from '../../../assets/profile-default-icon-2048x2045-u3j7s5nj.png'
function DashboardHeader() {
    const [clicked, setClicked] = useState(false)
    const { token, removeToken } = useContext(AuthContext);
    const handleLogout = () => {
        removeToken();
    };
    return (
        <div className='bg-blue_177f9f flex py-5 z-10 fixed w-5/6 right-0'>
            <div className='relative'>
                <CiSearch className='absolute left-6 top-2' size={30} />
                <input className='w-[200px] h-[50px] rounded-full ml-5' />
            </div>
            <div className='flex mt-2'>
                <MdOutlineMessage size={30} className='ml-5 -scale-x-100 text-white' />
                <p className='text-white'>0</p>
            </div>
            <FaPlus size={25} className='ml-2 mt-2 text-white' />
            <div className='flex'>
                <FaRegBell size={30} className='ml-2 mt-2 -scale-x-100 text-white' />
                <p className='text-white mt-2'>0</p>
            </div>
            <div className='absolute right-20 mt-2'>
                <p className='text-2xl font-medium text-white'>Xin chào {token?.user?.firstName} {token?.user?.lastName}</p>
            </div>
            <div className='mr-5 ml-auto cursor-pointer relative hover:brightness-110 '>
                <IoMdArrowDropdownCircle size={20} className='mr-0 ml-auto absolute right-0 bottom-0 bg-blue_177f9f w-[20px] h-[20px] rounded-full' />
                {token?.user?.avatar ?
                    <img src={token?.user?.avatar} onClick={() => setClicked(true)} className='w-[50px] h-[50px] rounded-full ' />
                    :
                    <img src={DefaultPictureProfile} onClick={() => setClicked(true)} className='w-[50px] h-[50px]' />
                }
            </div>
            {clicked ?

                <div className='absolute right-5 top-20 bg-gray-800 p-2 rounded-2xl shadow w-[300px]'>
                    <div className='flex m-5'>
                        <div className='bg-gray-700 rounded-full p-1'><IoMdSettings size={30} className='text-white' /></div>
                        <p className='cursor-pointer ml-5 text-xl text-white font-medium mt-1'><Link to='/profile'>Cập nhật thông tin</Link></p>
                    </div>
                    <div className='flex m-5'>
                        <div className='bg-gray-700 rounded-full p-1'><IoLogOut size={30} className='text-white' /></div>
                        <p onClick={handleLogout} className='cursor-pointer ml-5 text-xl text-white font-medium mt-1'>Đăng xuất</p>
                    </div>
                    <div className='flex m-5'>
                        <div className='bg-gray-700 rounded-full p-1'><MdFeedback size={30} className='text-white' /></div>
                        <p className='cursor-pointer ml-5 text-xl text-white font-medium mt-1'>Phản hồi</p>
                    </div>
                    <div className='flex m-5'>
                        <div className='bg-gray-700 rounded-full p-1'><FaShoppingCart size={30} className='text-white' /></div>
                        <p className='cursor-pointer ml-5 text-xl text-white font-medium mt-1'><Link to='/orders'>Đơn Hàng</Link></p>
                    </div>
                </div>
                : ""}
        </div>
    )
}

export default DashboardHeader
