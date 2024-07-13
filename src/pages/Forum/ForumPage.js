import React from 'react'
import forumbanner from '../../assets/forum.jpg'
import vector65 from '../../assets/Vector 65.png'
import vector66 from '../../assets/Vector 66.png'
import vector67 from '../../assets/Vector 67.png'
import vector68 from '../../assets/Vector 68.png'
function ForumPage() {
  return (
    <>
      <div className='relative'>
        <img src={forumbanner} alt='banner_forum' className='w-full h-full' />
        <div className='absolute top-52 right-32'>
          <div className='w-[600px] h-[400px]'>
            <div className='bg-white opacity-80 w-full h-full'></div>
            <img src={vector65} alt='' className='absolute right-0 top-0 opacity-100' />
            <img src={vector66} alt='' className='absolute left-0 -bottom-[1px] ' />
            <img src={vector67} alt='' className='absolute left-10 top-10'/>
            <img src={vector68} alt='' className='absolute right-10 bottom-10'/>
          </div>
          <p className='font-allura absolute top-24 right-20 text-7xl text-blue_177f9f'>
            Cùng chia sẽ câu <br /> chuyện của bạn với <br /> mọi người
          </p>
        </div>

      </div>
    </>
  )
}

export default ForumPage