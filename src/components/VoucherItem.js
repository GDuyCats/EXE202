import React, { useState } from 'react'
import voucherImage from '../assets/voucher.jpg'
import { useGetAllVouchers } from '../hooks/useGetAllVouchers';

function VoucherItem() {

    const [isActive, setIsActive] = useState(0);

    const handleVoucherClick = (id) => {
        setIsActive(id);
    };
    const { data } = useGetAllVouchers();

    const sortedData = data?.sort((a, b) => b.discount - a.discount);
    return (
        <div className="p-3">
            <h3 className="text-2   xl text-blue_177f9f py-3 px-3">Hãy chọn một mã khuyến mãi</h3>
            {sortedData?.map(itemVoucher => (
            <div className="flex items-center justify-center w-full">
                <div className={`bg-white container mx-10 my-7 p-5 border-2 border-black flex ${itemVoucher.id == isActive ? 'border-blue_cart border-4' : ''}`}
                    onClick={() => handleVoucherClick(itemVoucher.id)}
                >
                    <img
                        src={voucherImage}
                        alt="voucher Image"
                        className="w-32 h-32 object-cover justify-center border-2 border-blue_cart"
                    />
                    <div className="w-full ml-4 justify-end">
                        <div className="flex justify-start">
                            <h1 className="text-2xl mb-2 pt-2 text-blue_177f9f font-sans font-semibold">GIẢM GIÁ {itemVoucher?.discount * 100}% PHÍ VẬN CHUYỂN VỚI ĐƠN HÀNG TỪ 500.000VND TRỞ LÊN</h1>
                        </div>
                        <div className="flex text-lg"><h2>HẠN SỬ DỤNG</h2><h2>: {new Date(itemVoucher?.endTime).toLocaleDateString()}</h2></div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default VoucherItem