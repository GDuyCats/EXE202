import React from 'react'

function DashboardHeader() {
    return (
        <div className='bg-blue_177f9f flex p-5'>
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
