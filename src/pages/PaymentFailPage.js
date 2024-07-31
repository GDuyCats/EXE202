import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function PaymentFailed() {
    const navigate = useNavigate();

    const handleBack = () => {
        // const selectedItems = cartStore.items.filter(item => cartStore.selectedItems.includes(item.id));
        navigate('/');
    }

    const handleTryAgain = () => {
        // const selectedItems = cartStore.items.filter(item => cartStore.selectedItems.includes(item.id));
        navigate('/shop');
    }
    
    return (
        <>
            <div className="w-full" style={{
                height: 100,
                background: 'linear-gradient(to right, #24b7cf, #18335c)'
            }}>
            </div>
            <div className="h-fit w-full bg-gradient-to-br from-blue_tl to-blue_br py-10 flex justify-center items-center">
            <div className="bg-blue_bg_pd w-fit px-20">
            <div className="py-10">
                <div className="justify-center items-center flex">
                    <svg width="130px" height="130px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M9 9L15 15M15 9L9 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#1DAFDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>
                </div>
                <div className="justify-center items-center flex">
                    <h1 className="text-5xl text-blue_cart py-3 px-3">ĐẶT HÀNG THẤT BẠI</h1>
                </div>
                <div className="justify-center items-center flex">
                    <h1 className="text-xl text-blue_177f9f py-3 px-3">Lý do: Thanh toán không thành công</h1>
                </div>
                <div className="justify-center items-center flex">
                    <button onClick={handleTryAgain} className="bg-blue_177f9f hover:bg-sky-700 text-white px-4 m-3" style={{ width: 280, height: 62 }}>
                        THỬ LẠI
                    </button>
                </div>
                {/* <div className="justify-center items-center flex">
                    <button className="bg-blue_177f9f hover:bg-sky-700 text-white px-4 m-3" style={{ width: 280, height: 62 }}>
                        LIÊN HỆ CSKH
                    </button>
                </div> */}
                <div className="justify-center items-center flex">
                    <button onClick={handleBack} className="bg-blue_177f9f hover:bg-sky-700 text-white px-4 m-3" style={{ width: 280, height: 62 }}>
                        QUAY VỀ TRANG CHỦ
                    </button>
                </div>
            </div>
        </div>
            </div>
        </>
    )
}

export default PaymentFailed