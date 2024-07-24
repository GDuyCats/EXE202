import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function PaymentSuccess() {
    const navigate = useNavigate();

    const handleBack = () => {
        // const selectedItems = cartStore.items.filter(item => cartStore.selectedItems.includes(item.id));
        navigate('/');
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
                    <svg width="130px" height="130px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#1DAFDD">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <circle cx="12" cy="12" r="10" stroke="#1DAFDD" stroke-width="2.0"></circle>
                            <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#1DAFDD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>
                </div>
                <div className="justify-center items-center flex">
                    <h1 className="text-5xl text-blue_cart py-3 px-3">ĐẶT HÀNG THÀNH CÔNG</h1>
                </div>
                <div className="justify-center items-center flex">
                    <button onClick={handleBack} className="bg-blue_177f9f hover:bg-sky-700 text-white px-4 m-3" style={{ width: 280, height: 62 }}>
                        QUAY VỀ TRANG CHỦ
                    </button>
                </div>
                <div className="justify-center items-center flex">
                    <button className="bg-blue_177f9f hover:bg-sky-700 text-white px-4 m-3" style={{ width: 280, height: 62 }}>
                        XEM TÌNH TRẠNG ĐƠN HÀNG
                    </button>
                </div>
            </div>
        </div>
            </div>
        </>
    )
}

export default PaymentSuccess