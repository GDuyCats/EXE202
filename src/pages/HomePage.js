import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../assets/Without slogan.png'
import slideimg1 from '../assets/cong-viec-bung-no-cua-annie-2.jpg'
import slideimg2 from '../assets/TFT-Chibi-Annie.jpg'
import slideimg3 from '../assets/310543032_782044779573265_2070644959280334700_n.jpg'
import slideimg4 from '../assets/maxresdefault.jpg'
import img4 from '../assets/Chibi_Annie_Base_Tier_1.jpg'
import img5 from '../assets/Chibi_Annie_Panda_Tier_1.jpg'
import img6 from '../assets/kaisa-ti-ni.png'
import img7 from '../assets/tft-chibi-lux-sg-lux-artwork-v0-xw0g3rvb3xz91.jpg'
import img8 from '../assets/Chibi_Lux_Base_Tier_1.jpg'
import img9 from '../assets/Chibi_Gwen_Base_Tier_1.jpg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules'


function HomePage() {

    const slidesProduct = [
        {
            image: img4,
            text: 'THỰC PHẨM \n BỔ SUNG'
        },
        {
            image: img5,
            text: 'TRANG BỊ \n THIẾT YẾU'
        },
        {
            image: img6,
            text: 'TRANG PHỤC'
        },
        {
            image: img7,
            text: 'PHƯƠNG TIỆN'
        },
        {
            image: img8,
            text: 'TÃ LÓT'
        },
        {
            image: img9,
            text: 'JOE MAMA'
        },
    ]

    const slides = [
        {
            image: slideimg1,
            text: 'VÌ CUỘC SỐNG\n HẠNH PHÚC CHO\n NHỮNG NGƯỜI\n THÂN YÊU\n'
        },
        {
            image: slideimg2,
            text: 'Slide 2 Description'
        },
        {
            image: slideimg3,
            text: 'Slide 3 Description'
        },
        {
            image: slideimg4,
            text: 'Slide 4 Description'
        },
    ]

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

    const [startIndex, setStartIndex] = useState(0);


    const prevProduct = () => {
        const isFirstProduct = startIndex === 0;
        const newIndex = isFirstProduct ? slidesProduct.length - 1 : startIndex - 1;
        setStartIndex(newIndex);
    };

    const nextProduct = () => {
        const isLastSlide = startIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : startIndex + 1;
        setStartIndex(newIndex)
    };
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide()
        }, 3000);

        return () => clearInterval(timer);
    }, [currentIndex])

    return (
        <div className='ml-[10%] mr-[10%]'>
            <nav className="p-4 flex items-center z-50 bg-white fixed top-0 left-0 right-0 justify-between border-b-2 border-blue_177f9f ml-[10%] mr-[10%]">
                <div className='z-50 cover'><img src={logoImage} alt="Logo" className="w-24 h-24" /></div>
                <div className=" space-x-4 absolute left-[35%]">
                    <div className="space-x-4 hidden lg:flex">
                        <div className='group'>
                            <Link to="/aboutus" className="text-blue_177f9f px-3 py-2 text-lg font-medium border-b-4 border-b-transparent group-hover:border-b-blue_177f9f">VỀ CHÚNG TÔI</Link>
                        </div>
                        <div className='group'>
                            <Link to="/shop" className="text-blue_177f9f px-3 py-2 text-lg font-medium border-b-4 border-b-transparent group-hover:border-b-blue_177f9f">MUA HÀNG</Link>
                        </div>
                        <div className='group'>
                            <Link to="/forum" className="text-blue_177f9f px-3 py-2 text-lg font-medium border-b-4 border-b-transparent group-hover:border-b-blue_177f9f">DIỄN ĐÀN</Link>
                        </div>
                        <div className='group'>
                            <Link to="/contact" className="text-blue_177f9f px-3 py-2 text-lg font-medium border-b-4 border-b-transparent group-hover:border-b-blue_177f9f">LIÊN HỆ</Link>
                        </div>
                    </div>
                </div>
                <div className='flex space-x-10 absolute right-0'>
                    <Link to="/signup" className="text-blue_177f9f px-8 py-2 text-lg font-medium border-2 border-blue_177f9f rounded-full hover:bg-blue_c0foff">ĐĂNG KÝ</Link>
                    <Link to="/login" className="text-blue_177f9f px-8 py-2 text-lg font-medium bg-blue_c0foff rounded-full hover:brightness-110">ĐĂNG NHẬP</Link>
                </div>
                <div className="lg:hidden block">
                    <button className="text-black px-3 py-2 rounded-full text-lg font-medium hover:bg-blue_c0foff">MENU</button>
                </div>
            </nav>
            <div className='h-[780px] mt-40 px-4 relative group ml-[10%] mr-[10%]'>
                <div className='overflow-visible w-full h-full flex relative'>
                    <div style={{ backgroundImage: `url(${slides[currentIndex === 0 ? slides.length - 1 : currentIndex - 1].image})`,backgroundPositionY: 'center' }} className='w-full h-full rounded-3xl bg-cover duration-500 opacity-90 absolute -translate-x-48 scale-90'></div>
                    <div style={{ backgroundImage: `url(${slides[currentIndex].image})`,backgroundPositionY: 'center' }} className='w-full h-full rounded-3xl bg-cover duration-1000 absolute z-10 scale-95'>
                        <div className="absolute top-10 right-10 text-white font-thin text-5xl whitespace-pre-line">
                            {slides[currentIndex].text}
                            <div className="mt-4">
                                <Link to="/learn-more" className="inline-block px-6 py-2 text-lg font-medium bg-blue_c0foff text-white rounded-full hover:brightness-110">TÌM HIỂU NGAY</Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${slides[currentIndex === slides.length - 1 ? 0 : currentIndex + 1].image})`,backgroundPositionY: 'center' }} className='w-full h-full rounded-3xl bg-cover duration-500 opacity-90 absolute translate-x-48 scale-90'></div>
                </div>

                <div className="hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20">
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                <div className="hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20">
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
                <div style={{ backgroundImage: `url(${slideimg3})`, backgroundPositionY: 'center' }} className='flex justify-center items-center bg-cover h-full py-10 my-20 rounded-full'>
                    <p className='text-3xl font-medium text-white'>GIẢM GIÁ</p>
                    <p className='text-8xl font-medium text-blue_94eeff font-mono'>30%</p>
                    <p className='text-3xl font-medium text-white'>MỌI MẶT HÀNG TRANG PHỤ NỮ</p>
                </div>

                <div className='text-blue_177f9f pt-16 font-medium text-4xl text-center'>
                    <p>DANH MỤC SẢN PHẨM</p>
                </div>

                <div >
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={5}
                        slideShadows={false}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        coverflowEffect={
                            {
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                            }}
                        modules={[EffectCoverflow, Navigation, Autoplay]}
                        className="swiper_container my-10 group w-[1000px]"
                    >
                        <SwiperSlide>
                            <div className='bg-white w-[272px] h-[337px] flex flex-col justify-center items-center rounded-3xl relative '>
                                <div className="absolute top-10  font-thin text-4xl whitespace-pre-line z-50 text-blue_177f9f text-center">
                                    {slidesProduct[startIndex === 0 ? slidesProduct.length - 1 : startIndex - 1].text}
                                </div>
                                <div style={{ backgroundImage: `url(${slidesProduct[startIndex === 0 ? slidesProduct.length - 1 : startIndex - 1].image})` }} className='w-40 h-40 rounded-3xl bg-cover duration-1000 absolute z-10 bottom-7'></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white w-[272px] h-[337px] flex flex-col justify-between items-center rounded-3xl relative'>
                                <div className="absolute top-10  font-thin text-4xl whitespace-pre-line z-50 text-blue_177f9f text-center">
                                    {slidesProduct[startIndex].text}
                                </div>
                                <div style={{ backgroundImage: `url(${slidesProduct[startIndex].image})` }} className='w-40 h-40 rounded-3xl bg-cover duration-1000 absolute z-10 bottom-7'></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white w-[272px] h-[337px] flex flex-col justify-between items-center rounded-3xl relative'>
                                <div className="absolute top-10 font-thin text-4xl whitespace-pre-line z-50 text-blue_177f9f text-center">
                                    {slidesProduct[startIndex + 1 >= slidesProduct.length ? 0 : startIndex + 1].text}
                                </div>
                                <div style={{ backgroundImage: `url(${slidesProduct[startIndex + 1 >= slidesProduct.length ? 0 : startIndex + 1].image})` }} className='w-40 h-40 rounded-3xl bg-cover duration-1000 absolute z-10 bottom-7'></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white w-[272px] h-[337px] flex flex-col justify-between items-center rounded-3xl relative'>
                                <div className="absolute top-10  font-thin text-4xl whitespace-pre-line z-50 text-blue_177f9f text-center">
                                    {slidesProduct[startIndex + 2 >= slidesProduct.length ? startIndex + 2 - slidesProduct.length : startIndex + 2].text}
                                </div>
                                <div style={{ backgroundImage: `url(${slidesProduct[(startIndex + 2 >= slidesProduct.length ? startIndex + 2 - slidesProduct.length : startIndex + 2)].image})` }} className='w-40 h-40 rounded-3xl bg-cover duration-1000 absolute z-10 bottom-7'></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white w-[272px] h-[337px] flex flex-col justify-between items-center rounded-3xl relative'>
                                <div className="absolute top-10  font-thin text-4xl whitespace-pre-line z-50 text-blue_177f9f text-center">
                                    {slidesProduct[startIndex + 3 >= slidesProduct.length ? startIndex + 3 - slidesProduct.length : startIndex + 3].text}
                                </div>
                                <div style={{ backgroundImage: `url(${slidesProduct[(startIndex + 3 >= slidesProduct.length ? startIndex + 3 - slidesProduct.length : startIndex + 3)].image})` }} className='w-40 h-40 rounded-3xl bg-cover duration-1000 absolute z-10 bottom-7'></div>
                            </div>
                        </SwiperSlide>
                        <div className='slider-controler'>
                            <div className="swiper-button-prev absolute hidden group-hover:block top-[45%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20 duration-500">
                                <BsChevronCompactLeft size={30} />
                            </div>
                            <div className="swiper-button-next absolute hidden group-hover:block top-[45%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20 duration-500">
                                <BsChevronCompactRight size={30} />
                            </div>
                        </div>
                    </Swiper>
                    <div className='border-b-2 border-blue_177f9f ml-[10%] mr-[10%]'></div>
                </div>
                <div className='font-medium text-4xl text-blue_177f9f text-center mt-10'>
                    <p>SẢN PHẨM KHUYẾN MÃI</p>
                </div>
            </div>

        </div>
    )
}
export default HomePage
