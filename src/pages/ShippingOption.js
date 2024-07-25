import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ShipItem from '../components/ShipItem';

function ShippingOption() {
    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false);

    const handleCardClick = () => {
        setIsActive(!isActive);
    };
    const handleConfirmShipping = () => {
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
                        <h1 className="text-5xl text-blue_177f9f py-3 px-3">CHỌN ĐƠN VỊ VẬN CHUYỂN</h1>
                    </div>
                    <div className="px-10 py-5">
                        
                    <ShipItem />
                        
                    </div>
                    <div className="p-3 flex items-center justify-center">
                        <div className="w-fit flex justify-center items-center" style={{
                            height: 85,
                            background: 'linear-gradient(to right, #24b7cf, #18335c)'
                        }}>
                            <button onClick={handleConfirmShipping} className="text-4xl text-white px-40 -inset-y-px">
                                XÁC NHẬN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShippingOption
