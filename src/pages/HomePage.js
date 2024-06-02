import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import banner from '../assets/Banner.jpg'
import Ad1 from '../assets/Ad1.jpg'
import chat from '../assets/Screenshot 2024-05-20 235416.png'
import Fivestars from '../assets/Group 8.png'
import reviewerimg1 from "../assets/Reviewed (1).jpg"
import reviewerimg2 from "../assets/Reviewed (2).jpg"
import reviewerimg3 from "../assets/Reviewed (3).jpg"
import bannerimg1 from '../assets/banner (1).jpg'
import bannerimg2 from '../assets/banner (2).jpg'
import bannerimg3 from '../assets/banner (3).jpg'
import productimg1 from '../assets/Product (1).jpg'
import productimg2 from '../assets/Product (2).jpg'
import productimg3 from '../assets/Product (3).jpg'
import productimg4 from '../assets/Product (4).jpg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';
import { RxDotFilled } from 'react-icons/rx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
function HomePage() {

    const productSingleSlide = [
        {
            image: Ad1,
            text:
                <div>
                    <span class="text-brightened_blue_00202a text-5xl font-normal">ÁO XANH HỌA TIẾT HOA</span>
                    <div className='text-blue_177f9f font-thin space-y-10 mt-10'>
                        <p>Nhà sản xuất: Thời trang NEIH</p>
                        <p>Chất liệu: Vải tơ gân</p>
                        <p>Đánh giá: </p>
                        <div className='w-[300px] h-[100px] bg-blue_94eeff text-center rounded-full flex flex-col font-medium'>
                            <div className='text-2xl line-through'>
                                <p>200.000 VND</p>
                            </div>
                            <div className='text-4xl text-red-500 font-medium'>
                                <p>140.000 VND</p>
                            </div>
                        </div>
                    </div>
                </div>
        },
        {
            image: Ad1,
            text:
                <div>
                    <span class="text-brightened_blue_00202a text-5xl font-normal">ÁO XANH HỌA TIẾT HOA</span>
                    <div className='text-blue_177f9f font-thin space-y-10 mt-10'>
                        <p>Nhà sản xuất: Thời trang NEIH</p>
                        <p>Chất liệu: Vải tơ gân</p>
                        <p>Đánh giá: </p>
                        <div className='w-[300px] h-[100px] bg-blue_94eeff text-center rounded-full flex flex-col font-medium'>
                            <div className='text-2xl line-through'>
                                <p>250.000 VND</p>
                            </div>
                            <div className='text-4xl text-red-500 font-medium'>
                                <p>160.000 VND</p>
                            </div>
                        </div>
                    </div>
                </div>
        },
    ]

    const slidesProduct = [
        {
            image: productimg1,
            text: 'THỰC PHẨM \n BỔ SUNG'
        },
        {
            image: productimg2,
            text: 'TRANG BỊ \n THIẾT YẾU'
        },
        {
            image: productimg3,
            text: 'TRANG PHỤC'
        },
        {
            image: productimg4,
            text: 'PHƯƠNG TIỆN'
        },
    ]

    const slides = [
        {
            image: bannerimg1,
            text:
                <div className='mt-80'>
                    <p className='text-white'>VÌ CUỘC SỐNG <br /> HẠNH PHÚC CHO <br /> NHỮNG NGƯỜI <br /> THÂN YÊU</p>
                    <div className="mt-4">
                        <Link to="/learn-more" className="inline-block px-6 py-2 text-lg font-medium bg-blue_c0foff text-white rounded-full hover:brightness-110">TÌM HIỂU NGAY</Link>
                    </div>
                </div>
        },
        {
            image: bannerimg2,
        },
        {
            image: bannerimg3,
        },
    ]

    const [Index, setIndex] = useState(0)
    const [startIndex, setStartIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const gotoSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide()
        }, 3000);

        return () => clearInterval(timer);
    }, [currentIndex])

    return (
        <>
            <div className='h-[780px] mt-40 px-4 relative group mx-auto'>
                <div className='overflow-visible w-[1500px] h-full flex relative mx-auto'>
                    <img src={slides[currentIndex === 0 ? slides.length - 1 : currentIndex - 1].image} alt="" className='w-[1000px] h-full rounded-3xl object-cover duration-500 opacity-80 left-0 absolute -translate-x-[70px] scale-[85%]' />
                    <div className='w-[1300px] h-full rounded-3xl object-cover duration-1000 z-10 scale-95 mx-auto'>
                        <img src={slides[currentIndex].image} alt="" className='w-full h-full rounded-3xl object-cover mx-auto' />
                        <div className="absolute top-5 right-5 text-white font-thin text-5xl whitespace-pre-line">
                            {slides[currentIndex].text}
                        </div>
                    </div>
                    <img src={slides[currentIndex === slides.length - 1 ? 0 : currentIndex + 1].image} alt="" className='w-[1000px] h-full rounded-3xl object-cover duration-500 opacity-80 -right-[60px] scale-[85%] absolute' />
                </div>

                <div className="hidden group-hover:block absolute hover:bg-gray-600 top-[45%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20">
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                <div className="hidden group-hover:block hover:bg-gray-600 absolute top-[45%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20">
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => gotoSlide(slideIndex)} className={`text-4xl cursor-pointer ${currentIndex === slideIndex ? 'text-blue_6bccde' : 'text-blue_177f9f'}`}>
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-gradient-to-br from-white to-blue_6bccde'>
                <div style={{ backgroundImage: `url(${banner})` }} className='flex bg-cover h-full py-96 justify-center my-20 '></div>
                <div className='text-blue_177f9f pt-16 font-medium text-4xl text-center'>
                    <p>DANH MỤC SẢN PHẨM</p>
                </div>

                <div className='w-[1400px] relative mx-auto group'>
                    <Swiper
                        grabCursor={true}
                        centeredSlides={false}
                        loop={true}
                        slidesPerView={4}
                        slideShadows={false}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}

                        navigation={{
                            nextEl: '.button-next',
                            prevEl: '.button-prev',
                            clickable: true,
                        }}

                        modules={[Navigation, Autoplay]}
                        className='mt-10'
                    >
                        <SwiperSlide>
                            <div className='bg-white w-[272px] h-[337px] flex flex-col justify-center items-center rounded-3xl relative left-10'>
                                <div className="absolute top-10 font-thin text-4xl whitespace-pre-line z-50 text-blue_177f9f text-center ">
                                    {slidesProduct[startIndex === 0 ? slidesProduct.length - 1 : startIndex - 1].text}
                                </div>
                                <img src={slidesProduct[startIndex === 0 ? slidesProduct.length - 1 : startIndex - 1].image} alt='' className='w-40 h-40 rounded-3xl bg-cover duration-1000 absolute z-10 bottom-7' />

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white w-[272px] h-[337px] flex flex-col justify-between items-center rounded-3xl relative left-10'>
                                <div className="absolute top-10  font-thin text-4xl whitespace-pre-line z-50 text-blue_177f9f text-center">
                                    {slidesProduct[startIndex].text}
                                </div>
                                <img src={slidesProduct[startIndex].image} alt='SlideProduct' className='w-40 h-40 rounded-3xl bg-cover duration-1000 absolute z-10 bottom-7' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white w-[272px] h-[337px] flex flex-col justify-between items-center rounded-3xl relative left-10'>
                                <div className="absolute top-10 font-thin text-4xl whitespace-pre-line z-50 text-blue_177f9f text-center">
                                    {slidesProduct[startIndex + 1 >= slidesProduct.length ? 0 : startIndex + 1].text}
                                </div>
                                <img src={slidesProduct[startIndex + 1 >= slidesProduct.length ? 0 : startIndex + 1].image} className='w-40 h-40 rounded-3xl bg-cover duration-1000 absolute z-10 bottom-7' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white w-[272px] h-[337px] flex flex-col justify-between items-center rounded-3xl relative left-10'>
                                <div className="absolute top-10  font-thin text-4xl whitespace-pre-line z-50 text-blue_177f9f text-center">
                                    {slidesProduct[startIndex + 2 >= slidesProduct.length ? startIndex + 2 - slidesProduct.length : startIndex + 2].text}
                                </div>
                                <img src={slidesProduct[(startIndex + 2 >= slidesProduct.length ? startIndex + 2 - slidesProduct.length : startIndex + 2)].image} alt='SlideProduct' className='w-40 h-40 rounded-3xl bg-cover duration-1000 absolute z-10 bottom-7' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white w-[272px] h-[337px] flex flex-col justify-between items-center rounded-3xl relative left-10'>
                                <div className="absolute top-10  font-thin text-4xl whitespace-pre-line z-50 text-blue_177f9f text-center">
                                    {slidesProduct[startIndex + 3 >= slidesProduct.length ? startIndex + 3 - slidesProduct.length : startIndex + 3].text}
                                </div>
                                <img src={slidesProduct[(startIndex + 3 >= slidesProduct.length ? startIndex + 3 - slidesProduct.length : startIndex + 3)].image} alt='SlideProduct' className='w-40 h-40 rounded-3xl bg-cover duration-1000 absolute z-10 bottom-7' />
                            </div>
                        </SwiperSlide>
                        <div className='border-b-2 border-blue_177f9f mx-[10%] mt-10'></div>
                    </Swiper>
                    <div className="button-prev hidden group-hover:block hover:bg-gray-600 absolute -left-[0.8%] top-36 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-50">
                        <BsChevronCompactLeft size={30} />
                    </div>
                    <div className="button-next hidden group-hover:block hover:bg-gray-600 absolute -right-[1%] top-36 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-50">
                        <BsChevronCompactRight size={30} />
                    </div>             
                </div>
                <div className='font-medium text-4xl text-blue_177f9f text-center mt-10'>
                    <p>SẢN PHẨM KHUYẾN MÃI</p>
                </div>

                <div className='flex justify-center mt-10 w-[1500px] mx-auto'>
                    <Swiper
                        grabCursor={true}
                        loop={true}
                        show
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.button-next',
                            prevEl: '.button-prev',
                            clickable: true,
                        }}
                        modules={[Navigation, Autoplay]}
                        className='swiper_container group rounded-3xl z-10'>
                        <SwiperSlide>
                            <div className='bg-gradient-to-r from-blue_c0foff to-blue_6bccde  w-[1243px] h-[625px] rounded-3xl relative ml-[8%]'>
                                <img src={productSingleSlide[Index === 0 ? productSingleSlide.length - 1 : Index - 1].image} alt='' className='w-[500px] h-[570px] rounded-3xl bg-cover top-7 left-10 m-auto duration-500 absolute' />
                                <div className="absolute right-32 top-20 font-medium text-4xl whitespace-pre-line z-50 text-blue_177f9f text-left">
                                    {productSingleSlide[Index === 0 ? productSingleSlide.length - 1 : Index - 1].text}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-gradient-to-r from-blue_c0foff to-blue_6bccde w-[1243px] h-[625px] rounded-3xl relative ml-[8%]'>
                                <img src={productSingleSlide[Index].image} alt='' className='w-[500px] h-[570px] rounded-3xl bg-cover top-7 left-10 m-auto duration-500 absolute' />
                                <div className="absolute right-32 top-20 font-medium text-4xl whitespace-pre-line z-50 text-blue_177f9f text-left">
                                    {productSingleSlide[Index].text}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-gradient-to-r from-blue_c0foff to-blue_6bccde  w-[1243px] h-[625px] rounded-3xl relative ml-[8%]'>
                                <img src={productSingleSlide[Index === productSingleSlide.length - 1 ? 0 : Index + 1].image} alt='' className='w-[500px] h-[570px] rounded-3xl bg-cover top-7 left-10 m-auto duration-500 absolute' />
                                <div className="absolute right-32 top-20 font-medium text-4xl whitespace-pre-line z-50 text-blue_177f9f text-left">
                                    {productSingleSlide[Index === productSingleSlide.length - 1 ? 0 : Index + 1].text}
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className='slider-controller'>
                            <div className="button-prev hidden group-hover:block hover:bg-gray-600 absolute top-[45%] -translate-x-[30%] translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-50">
                                <BsChevronCompactLeft size={30} />
                            </div>
                            <div className="button-next hidden group-hover:block hover:bg-gray-600 absolute top-[45%] translate-x-[30%] translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-50">
                                <BsChevronCompactRight size={30} />
                            </div>
                        </div>
                    </Swiper>
                </div>
                <div className='mt-10 bg-gradient-to-r from-blue_00202a to-blue_6bccde w-full'>
                    <div className='pt-10 pb-10 mb-24'><p className='font-medium text-7xl text-center text-white'>KHÁCH HÀNG CỦA CHÚNG TÔI NÓI GÌ</p></div>
                    <div className='pb-10 grid grid-cols-3'>
                        <div className='w-full'>
                            <div className='bg-white w-[400px] h-[500px] rounded-xl flex flex-col mx-auto'>
                                <div className='flex justify-center '>
                                    <div className='w-[75px] h-[75px] bg-blue_94eeff opacity-50 rounded-full -mt-10 overflow-visible translate-x-8 z-10'></div>
                                    <img src={reviewerimg1} alt='reviewer img' className='rounded-full w-[186px] h-[186px] -mt-20 z-20' />
                                    <div className='w-[75px] h-[75px] bg-blue_94eeff opacity-50 rounded-full -mt-10 -translate-x-8 z-10'></div>
                                </div>
                                <p className='font-bold text-4xl text-center text-blue_177f9f'>ngoclinh1973</p>
                                <p className='w-[340px] h-[300px] text-3xl text-center ml-[7%] mt-[5%]'>"Từ ngày có OHeCa,<br /> tôi mua hàng cho <br />mẹ không còn lo<br /> ngại về hàng giả <br />nữa, cả gia đình đều<br /> rất vui mừng"</p>
                                <img src={Fivestars} alt='Rating' className='w-[292px] h-[53px] ml-[13%] mb-[10%]' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white w-[400px] h-[500px] rounded-xl flex flex-col mx-auto'>
                                <div className='flex justify-center'>
                                    <div className='w-[75px] h-[75px] bg-blue_94eeff opacity-50 rounded-full -mt-10 overflow-visible translate-x-8 z-10'></div>
                                    <img src={reviewerimg2} alt='reviewer img' className='rounded-full w-[186px] h-[186px] -mt-20 z-20' />
                                    <div className='w-[75px] h-[75px] bg-blue_94eeff opacity-50 rounded-full -mt-10 -translate-x-8 z-10'></div>
                                </div>
                                <p className='font-bold text-4xl text-center text-blue_177f9f'>QTUAN</p>
                                <p className='w-[340px] h-[300px] text-3xl text-center ml-[7%]  mt-[5%]'>"Mọi người trên<br /> trang web đều rất<br /> thân thiện, từ admin<br /> đến những user<br /> khác"</p>
                                <img src={Fivestars} alt='Rating' className='w-[292px] h-[53px] ml-[13%] mb-[10%]' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white w-[400px] h-[500px] rounded-xl flex flex-col mx-auto'>
                                <div className='flex justify-center'>
                                    <div className='w-[75px] h-[75px] bg-blue_94eeff opacity-50 rounded-full -mt-10 overflow-visible translate-x-8 z-10'></div>
                                    <img src={reviewerimg3} alt='reviewer img' className='rounded-full w-[186px] h-[186px] -mt-20 z-20' />
                                    <div className='w-[75px] h-[75px] bg-blue_94eeff opacity-50 rounded-full -mt-10 -translate-x-8 z-10'></div>
                                </div>
                                <p className='font-bold text-4xl text-center text-blue_177f9f'>Allie_My</p>
                                <p className='w-[340px] h-[300px] text-3xl text-center ml-[7%]  mt-[5%]'>"Giao hàng nhanh,<br /> giá phải chăng và<br /> chất lượng đảm bảo. <br />Chắc chắn sẽ tiếp<br /> tục ủng hộ"</p>
                                <img src={Fivestars} alt='Rating' className='w-[292px] h-[53px] ml-[13%] mb-[10%] ' />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mt-10 text-center '>
                    <p className='text-5xl font-bold'>CÙNG CHIA SẼ CÂU CHUYỆN CỦA BẠN TẠI DIỄN ĐÀN <br /> DÀNH RIÊNG CHO CỘNG ĐỒNG OHECA</p>
                    <button className='w-[366px] h-[89px] bg-blue_177f9f text-3xl font-medium rounded-full text-white mt-10'>THAM GIA NGAY</button>
                </div>
                <div>
                    <img src={chat} alt='chat from' className='mt-10 mx-auto' />
                </div>

                <div className='w-full h-full bg-color_ob4f65'>
                    <div>
                        <p className='text-center pt-10 font-medium text-white text-5xl'>ĐỪNG BỎ LỠ NHỮNG ƯU ĐÃI HẤP DÂN - THAM GIA <br /> CỘNG ĐỘNG OHECA NGAY TỪ HÔM NAY</p>
                    </div>
                    <div className='flex mx-auto justify-center pt-10 -translate-x-[88px]'>
                        <AiOutlineMail size={130} className='translate-x-44' />
                        <div className='w-[1000px] h-[130px] rounded-full bg-white mb-10'></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage
