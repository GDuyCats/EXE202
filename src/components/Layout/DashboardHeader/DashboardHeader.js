import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
function DashboardHeader() {
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
        </div>
    )
}

export default DashboardHeader
