import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../assets/Without slogan.png'
import slideimg1 from '../assets/cong-viec-bung-no-cua-annie-2.jpg'
import slideimg2 from '../assets/TFT-Chibi-Annie.jpg'
import slideimg3 from '../assets/310543032_782044779573265_2070644959280334700_n.jpg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

function HomePage() {

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
        }
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

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide()
        }, 3000);

        return () => clearInterval(timer);
    }, [currentIndex])

    return (
        <div>
            <nav className="p-4 flex justify-between">
                <div>
                    <img src={logoImage} alt="Logo" style={{ position: 'absolute', top: 10, left: 30, width: '100px', height: '100px' }} />
                </div>
                <div className="space-x-4 ml-80">
                    <button className="text-black px-3 py-2 rounded-full text-lg font-medium hover:bg-blue_c0foff "><Link to="/aboutus">VỀ CHÚNG TÔI</Link></button>
                    <button className="text-black px-3 py-2 rounded-full text-lg font-medium hover:bg-blue_c0foff"><Link to="/shop">MUA HÀNG</Link></button>
                    <button className="text-black px-3 py-2 rounded-full text-lg font-medium hover:bg-blue_c0foff" ><Link to="/forum">DIỄN ĐÀN</Link></button>
                    <button className="text-black px-3 py-2 rounded-full text-lg font-medium hover:bg-blue_c0foff"><Link to="/contact">LIÊN HỆ</Link></button>
                </div>
                <div className='flex space-x-10 mr-10'>
                    <div>
                        <button className="text-black px-8 py-2 text-lg font-medium border-2 border-blue_177f9f rounded-full hover:bg-blue_c0foff"><Link to="/signup">ĐĂNG KÝ</Link></button>
                    </div>
                    <div>
                        <button className="text-black px-8 py-2 text-lg font-medium bg-blue_c0foff rounded-full hover:brightness-110"><Link to="/login">ĐĂNG NHẬP</Link></button>
                    </div>
                </div>
            </nav>
            <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group '>
                <div className='overflow-visible w-full h-full flex relative'>
                    <div style={{ backgroundImage: `url(${slides[currentIndex === 0 ? slides.length - 1 : currentIndex - 1].image})` }} className='w-full h-full rounded-3xl bg-cover duration-500 opacity-50 absolute -translate-x-48 scale-90'></div>
                    <div style={{ backgroundImage: `url(${slides[currentIndex].image})` }} className='w-full h-full rounded-3xl bg-cover duration-500 absolute z-10 scale-95'>
                        <div className="absolute top-10 right-10 text-white font-thin text-5xl whitespace-pre-line">
                            {slides[currentIndex].text}
                            <div className="mt-4">
                                <Link to="/learn-more" className="inline-block px-6 py-2 text-lg font-medium bg-blue_c0foff text-white rounded-full hover:brightness-110">TÌM HIỂU NGAY</Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${slides[currentIndex === slides.length - 1 ? 0 : currentIndex + 1].image})` }} className='w-full h-full rounded-3xl bg-cover duration-500 opacity-50 absolute translate-x-48 scale-90'></div>
                </div>

                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20">
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20">
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

            <div>
                <p>GIẢM GIÁ 30% CHO MỌI MẶT HÀNG TRANG PHỤC NỮ</p>
            </div>
        </div>
    )
}
export default HomePage
