import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ThanksForRating() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    }
    return (
        <>
            <div className="w-full" style={{
                height: 100,
                background: 'linear-gradient(to right, #24b7cf, #18335c)'
            }}>
            </div>
            <div className="min-h-screen w-full bg-gradient-to-br from-blue_tl to-blue_br py-1">
                <div className="bg-blue_bg_pd justify-center items-center mx-8 my-8">
                    <div className="flex items-center justify-center p-10">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 122.88 122.88" class="w-52 h-52 text-blue_cart">
                            <path className="text-blue_cart fill-current mt-5" d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0ZM35,54.09h9.64a2,2,0,0,1,2,2V82.5a2,2,0,0,1-2,2H35a2,2,0,0,1-2-2V56.08a2,2,0,0,1,2-2ZM60.3,34.28C61.35,29,70,33.86,70.61,42.41a36.58,36.58,0,0,1-.74,9.07H82.29c5.16.2,9.67,3.9,6.49,10,.72,2.65.83,5.75-1.14,7,.25,4.17-.91,6.76-3.07,8.8A10.53,10.53,0,0,1,83,82.61C81.31,85,80,84.4,77.33,84.4h-21c-3.32,0-5.14-.91-7.31-3.64V57.41c6.25-1.69,9.58-10.24,11.25-15.86V34.28Zm37-8.7a50.72,50.72,0,1,0,14.85,35.86A50.59,50.59,0,0,0,97.3,25.58Z" />
                        </svg>
                    </div>
                    <div className="flex items-center justify-center">
                        <h1 className="text-5xl text-blue_cart font-semibold">CẢM ƠN BẠN ĐÃ ĐÁNH GIÁ</h1>
                    </div>
                    <div className="flex items-center justify-center mt-5">
                        <h1 className="text-3xl text-blue_027a9f font-semibold">NHỮNG ĐÓNG GÓP CỦA BẠN SẼ GIÚP OHeCa PHÁT TRIỂN HƠN</h1>
                    </div>
                    <div className="justify-center items-center flex">
                        <button onClick={handleBack} className="bg-blue_177f9f hover:bg-sky-700 text-white px-4 m-3" style={{ width: 280, height: 62 }}>
                            QUAY VỀ TRANG CHỦ
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ThanksForRating
