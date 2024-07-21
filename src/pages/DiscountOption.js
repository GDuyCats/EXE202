import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VoucherItem from '../components/VoucherItem';

function DiscountOption() {
    const navigate = useNavigate();

    const handleConfirmDiscount = () => {
        // const selectedItems = cartStore.items.filter(item => cartStore.selectedItems.includes(item.id));
        navigate('/transaction');
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
                    <div className="w-full">
                        <h1 className="text-5xl text-blue_177f9f py-3 px-3">DANH SÁCH KHUYẾN MÃI</h1>
                        <div className="w-full bg-blue_177f9f" style={{
                            height: 60
                        }}>
                            <div className="pt-4 ml-2 flex items-center">
                                <h1 className="text-white text-3xl font-medium">MÃ MIỄN PHÍ VẬN CHUYỂN</h1>
                            </div>
                        </div>
                    </div>

                    <VoucherItem />

                    <div className="p-3 flex items-center justify-center">
                        <div className="w-fit flex justify-center items-center" style={{
                            height: 85,
                            background: 'linear-gradient(to right, #24b7cf, #18335c)'
                        }}>
                            <button onClick={handleConfirmDiscount} className="text-4xl text-white px-40 -inset-y-px">
                                XÁC NHẬN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscountOption