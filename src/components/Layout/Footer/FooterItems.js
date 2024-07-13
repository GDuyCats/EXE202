import React from 'react'
import LogoImgWithSlogan from './LogoImgWithSlogan'
function FooterItems() {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <LogoImgWithSlogan/>
            <ul className='text-blue_6bccde text-2xl mt-10'>
                <li>
                    <p className='text-white text-xl mb-5'>MUA HÀNG</p>
                </li>
                <li>
                    <p>THỰC PHẨM CHỨC NĂNG</p>
                </li>
                <li>
                    <p>TRANG BỊ THIẾT YẾU</p>
                </li>
                <li>
                    <p>TRANG PHỤC</p>
                </li>
                <li>
                    <p>PHƯƠNG TIỆN</p>
                </li>
                <li>
                    <p>GIẢI TRÍ</p>
                </li>
                <li>
                    <p>Y TẾ</p>
                </li>
            </ul>
            <ul className='text-blue_6bccde text-2xl mt-10'>
                <li>
                    <p className='text-white text-xl mb-5'>DIỄN ĐÀN</p>
                </li>
                <li>
                    <p>REVIEW SẢN PHẨM</p>
                </li>
                <li>
                    <p>CHIA SẼ KINH NGHIỆM</p>
                </li>
                <li>
                    <p>CÂU TRUYỆN CỦA TÔI</p>
                </li>
                <li>
                    <p>Ý KIẾN</p>
                </li>
            </ul>
            <div></div>
            <div></div>
            <ul className='text-blue_6bccde text-2xl'>
                <li className='text-white text-xl mb-5'>THÔNG TIN</li>
                <li className=''>VỀ CHÚNG TÔI</li>
                <li className=''>PHƯƠNG THỨC LIÊN HỆ</li>
                <li className=''>GÓP Ý</li>
            </ul>
        </div>
    )
}

export default FooterItems