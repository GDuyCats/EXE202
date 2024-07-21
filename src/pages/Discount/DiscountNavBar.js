import React from 'react'
import { BiSearchAlt } from 'react-icons/bi';
function DiscountNavBar() {
  return (
    <div className='w-[350px] h-[1900px] rounded-3xl ml-10 mt-10 bg-blue_d5f8ff'>
        <div className='rounded-t-3xl bg-blue_177f9f text-center items-center font-bold text-white text-2xl px-5 py-3 flex justify-center'>
          <p className='ml-2'>BỘ LỌC TÌM KIẾM . . .</p>
          <BiSearchAlt size={50} className='-scale-x-100' />
        </div>
        <div className='bg-blue_baf4ff w-[300px] mt-3 mx-auto py-5'>
          <div className='ml-2 font-medium text-2xl'>
            <p>THEO DANH MỤC</p>
          </div>
          <div className='ml-5'>
            <input type='checkbox' className='mr-2 -mt-[2px]' />
            <label>SỮA DINH DƯỠNG</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox' className='mr-2 -mt-[2px]' />
            <label>THỰC PHẨM CHỨC NĂNG</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox' className='mr-2 -mt-[2px]' />
            <label>THỰC PHẨM CHẾ BIÊN</label>
          </div>
        </div>
        <div className='bg-blue_baf4ff w-[300px] my-10 mx-auto py-5'>
          <div className='ml-2 font-medium text-2xl'>
            <p>THEO NƠI BÁN</p>
          </div>
          <div className='ml-5'>
            <input type='checkbox' className='mr-2 -mt-[2px]' />
            <label>HÀ NỘI</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox' className='mr-2 -mt-[2px]' />
            <label>THÀNH PHỐ HỒ CHÍ MINH</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox' className='mr-2 -mt-[2px]' />
            <label>HẢI PHÒNG</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox' className='mr-2 -mt-[2px]' />
            <label>ĐỒNG NAI</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox' className='mr-2 -mt-[2px]' />
            <label>BÌNH DƯƠNG</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox' className='mr-2 -mt-[2px]' />
            <label>ĐÀ NẴNG</label>
          </div>
          <div className=''>
            <button className='bg-blue_6bccde rounded-full px-10 py-2 mt-2 ml-[22%] '>XEM THÊM</button>
          </div>
        </div>
        <div className='bg-blue_baf4ff w-[300px] my-10 mx-auto py-5'>
          <div className='ml-2 font-medium text-2xl'>
            <p>ĐƠN VỊ VẬN CHUYỂN</p>
          </div>
          <div className='ml-5'>
            <input type='checkbox' className='mr-2 -mt-[2px]' />
            <label>HỎA TỐC</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox' className='mr-2 -mt-[2px]' />
            <label>TIẾT KIỆM</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox' className='mr-2 -mt-[2px]' />
            <label>MIỄN PHÍ</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox' className='mr-2 -mt-[2px]' />
            <label>NHANH</label>
          </div>
        </div>
        <div className='bg-blue_baf4ff w-[300px] my-10 mx-auto py-5'>
          <div className='ml-2 font-medium text-2xl'>
            <p>THEO THƯƠNG HIỆU</p>
          </div>
          <div className='ml-5'>
            <input type='checkbox' className='mr-2 -mt-[2px]' />
            <label>NUTRICARE</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox' className='mr-2 -mt-[2px]' />
            <label>ABBOTT</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox' className='mr-2 -mt-[2px]' />
            <label>VINAMILK</label>
          </div>
          <div className='ml-5'>
            <input type='checkbox' className='mr-2 -mt-[2px]' />
            <label>FONTERRA BRANDS</label>
          </div>
          <div className=''>
            <button className='bg-blue_6bccde rounded-full px-10 py-2 mt-2 ml-[22%] '>XEM THÊM</button>
          </div>
        </div>
        <div className='bg-blue_baf4ff w-[300px] my-10 mx-auto py-5'>
          <div className='ml-2 font-medium text-2xl'>
            <p>KHOẢNG GIÁ</p>
          </div>
        </div>
        <div className='bg-blue_baf4ff w-[300px] my-10 mx-auto py-5'>
          <div className='ml-2 font-medium text-2xl'>
            <p>THEO ĐÁNH GIÁ</p>
          </div>
        </div>
      </div>
  )
}

export default DiscountNavBar