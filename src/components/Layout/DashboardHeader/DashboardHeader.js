import { React, useContext } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthContext';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import DefaultPictureProfile from '../../../assets/profile-default-icon-2048x2045-u3j7s5nj.png'
function DashboardHeader() {
    const { token, removeToken } = useContext(AuthContext);
    console.log(token?.user)
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
                    <img src={token?.user?.avatar} className='w-[50px] h-[50px] rounded-full ' />
                    :
                    <img src={DefaultPictureProfile} className='w-[50px] h-[50px]' />
                }
            </div>
        </div>
    )
}

export default DashboardHeader
