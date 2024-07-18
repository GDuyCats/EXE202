import React, { useState } from 'react'
import productImage from '../assets/ensure-gold.jpg'
import voucherImage from '../assets/voucher.jpg'
import { useGetAddressToShipById } from '../hooks/useGetAddressToShipById'
import CartItem from '../components/CartItem'
import { useItemStore } from '../utils/cart'
import PayOutItemProduct from '../components/PayOutItemProduct'
import { useLocation } from 'react-router-dom'

function Transaction() {
    const { data } = useGetAddressToShipById(1)
    console.log(data)
    const [selectedMethod, setSelectedMethod] = useState(null);
    const cartStore = useItemStore()
    const handleMethodSelect = (method) => {
        setSelectedMethod(method);
    };
    const location = useLocation();
    const { state } = location;
    const { selectedItems = [] } = state || {};
  
    console.log('Received selected items:', selectedItems);
    return (
        <>
            <div className="w-full" style={{
                height: 100,
                background: 'linear-gradient(to right, #24b7cf, #18335c)'
            }}>
                <div className="pt-6 ml-2">
                </div>
            </div>
            {/* ---------------------------------------------------------------------------------------- */}
            <div className=" w-full bg-gradient-to-br from-blue_tl to-blue_br py-1">
                <div className="bg-blue_bg_pd justify-center flex items-center mx-8 mt-8">
                    <div className="w-full">
                        <div className="w-full bg-blue_177f9f" style={{
                            height: 60
                        }}>
                            <div className="pt-4 ml-2 flex items-center">
                                <h4 className="text-white text-xl font-light">ĐỊA CHỈ NHẬN HÀNG</h4>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="bg-white container mx-10 my-7 p-10">
                                <h1 className='text-4xl text-blue_177f9f'>{data?.customerName}</h1>
                                <div className="flex items-start">
                                    <p className="text-4xl mt-5 inline-flex">ĐỊA CHỈ NHẬN HÀNG: {data?.detailAddress + ", " + data?.ward + ", " + data?.district + ", " + data?.province}</p>
                                    {/* <div className="flex justify-center w-fit h-fit bg-white text-blue_6bccde text-2xl font-extralight items-center border-2 border-blue_6bccde mt-4 ml-3">
                                        MẶC ĐỊNH
                                    </div> */}
                                </div>
                                <div className="flex items-start">
                                    <p className="text-4xl mt-5 inline-flex">SỐ ĐIỆN THOẠI: {data?.phone}</p>
                                    {/* <div className="flex justify-center w-fit h-fit bg-white text-blue_6bccde text-2xl font-extralight items-center border-2 border-blue_6bccde mt-4 ml-3">
                                        MẶC ĐỊNH
                                    </div> */}
                                </div>
                                {/* <button className="bg-blue_6bccde text-white flex items-center justify-center px-2 py-2 text-2xl font-normal mt-5">THAY ĐỔI</button> */}
                            </div>

                        </div>
                    </div>
                </div>
                {/* _____________________________________________________________________________SẢN PHẨM____________________________________________________________ */}

                <div className="bg-blue_bg_pd justify-center flex items-center mx-8">
                    <div className="w-full">
                        <div className="w-full bg-blue_177f9f" style={{
                            height: 60
                        }}>
                            <div className="pt-4 ml-2 flex items-center">
                                <h4 className="text-white text-xl font-light">SẢN PHẨM</h4>
                            </div>
                        </div>
                        <div className="container w-full">
                            <div className="items-center justify-center w-full">
                                {/* <div className="bg-white container mx-10 my-7 p-10 border-2 border-black flex">
                                    <img
                                        src={productImage}
                                        alt="Product Image"
                                        className="w-fit h-52 object-fill justify-center border-2 border-blue_cart"
                                    />
                                    <div className="w-full ml-4 justify-end">
                                        <div className="bg-blue_bg_d0f8ff px-6 py-1 flex justify-center">
                                            <h2 className="text-2xl mb-2 pt-2 text-blue_073d4d font-sans font-semibold">SỮA BỘT ENSURE GOLD 850G</h2>
                                        </div>
                                        <div className="flex items-center">
                                            <p className="text-lg">Phân loại hàng:</p>
                                            <div className="w-fit flex items-center bg-blue_classi p-2 rounded-2xl border-2 border-blue_cart ml-6 mt-3">
                                                <img
                                                    src={productImage}
                                                    alt="Product Image"
                                                    className="h-8 object-cover justify-center mx-2 rounded-sm"
                                                />
                                                <h6 className="text-sm text-blue_073d4d font-sans font-semibold mx-4">Vanilla</h6>
                                            </div>
                                        </div>
                                        <div className="flex flex-row mt-3">
                                            <p className="text-lg mb-4">Số lượng: </p>
                                            <div className=" pl-7 flex">
                                                <button className="bg-blue_btn_qlt text-white text-2xl font-bold justify-center items-center flex" style={{ width: 30, height: 30 }}>-</button>
                                                <spam className="bg-blue_c0foff font-normal px-8 justify-center items-center flex" style={{ width: 30, height: 30 }}>1</spam>
                                                <button className="bg-blue_btn_qlt text-white text-2xl font-bold justify-center items-center flex" style={{ width: 30, height: 30 }}>+</button>
                                            </div>
                                        </div>
                                        <div className="justify-end flex items-center">
                                            <p className="text-lg">Thành tiền:</p>
                                            <h1 className="text-4xl font-semibold text-sky-800 ml-10 justify-center pl-7">750.000 VND</h1>
                                        </div>
                                    </div>
                                </div> */}
                                {selectedItems.map(item => (
                                    <CartItem key={item.id} item={item} isReadOnly={true} />
                                ))}
                            </div>
                            {/* <p className="text-lg mx-10">Lời nhắn cho người bán:</p>
                            <div className="my-3 mx-10">
                                <textarea className="border border-gray-300 p-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-blue_177f9f">
                                </textarea>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* _____________________________________________________________________________VẬN CHUYỂN_____________________________________________________________ */}
                <div className="bg-blue_bg_pd justify-center flex items-center mx-8">
                    <div className="w-full">
                        <div className="w-full bg-blue_177f9f" style={{
                            height: 60
                        }}>
                            <div className="pt-4 ml-2 flex items-center">
                                <h4 className="text-white text-xl font-light">VẬN CHUYỂN</h4>
                            </div>
                        </div>
                        <div className="container w-full my-8">
                            <div className="flex w-full items-center mt-4">
                                <p className="text-lg mx-10 w-1/5">Đơn vị vận chuyển:</p>
                                <div className="flex w-4/5 border-2 border-black bg-white p-2 mx-10">
                                    <h1 className="text-blue_cart font-normal text-xl w-1/5 ml-5">HỎA TỐC</h1>
                                    <div className="flex w-2/5 mx-10"><h3 className="text-blue_0e4759 text-xl">Nhận hàng vào</h3><h3 className="text-blue_0e4759 text-xl">: 25/07 - 27/07</h3></div>
                                    <h3 className="text-blue_0e4759 text-xl line-through w-1/5 mx-5">20.000 VND</h3>
                                    <h1 className="text-red_ff0000 font-normal text-xl w-1/5 -mr-10">MIỄN PHÍ</h1>
                                </div>
                            </div>
                            <div className="flex justify-end items-center">
                                <button className="bg-blue_6bccde text-white flex items-center justify-center px-2 py-2 text-2xl font-normal mt-5 mr-10">THAY ĐỔI</button>
                            </div>
                            {/* <p className="text-lg mx-10">Lời nhắn cho bên vận chuyển:</p>
                            <div className="my-3 mx-10">
                                <textarea className="border border-gray-300 p-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-blue_177f9f">
                                    Khi giao hàng hãy để trước cửa nhà
                                </textarea>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* _____________________________________________________________________________ƯU ĐÃI - KHUYẾN MÃI_____________________________________________________________ */}
                <div className="bg-blue_bg_pd justify-center flex items-center mx-8">
                    <div className="w-full">
                        <div className="w-full bg-blue_177f9f" style={{
                            height: 60
                        }}>
                            <div className="pt-4 ml-2 flex items-center">
                                <h4 className="text-white text-xl font-light">ƯU ĐÃI - KHUYẾN MÃI</h4>
                            </div>
                        </div>
                        <div className="container w-full">
                            <div className="flex items-center justify-center w-full">
                                <div className="bg-white container mx-10 my-7 p-5 border-2 border-black flex">
                                    <img
                                        src={voucherImage}
                                        alt="voucher Image"
                                        className="w-32 h-32 object-cover justify-center border-2 border-blue_cart"
                                    />
                                    <div className="w-full ml-4 justify-end">
                                        <div className="flex justify-start">
                                            <h1 className="text-2xl mb-2 pt-2 text-blue_177f9f font-sans font-semibold">MIỄN PHÍ VẬN CHUYỂN VỚI ĐƠN HÀNG TỪ 500.000VND TRỞ LÊN</h1>
                                        </div>
                                        <div className="flex text-lg"><h2>HẠN SỬ DỤNG</h2><h2>: 30/05/2024</h2></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end items-center">
                                <button className="bg-blue_6bccde text-white flex items-center justify-center px-2 py-2 text-2xl font-normal mb-5 mr-10">THAY ĐỔI</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* _____________________________________________________________________________PHƯƠNG THỨC THANH TOÁN_____________________________________________________________ */}
                <div className="bg-blue_bg_pd justify-center flex items-center mx-8 mb-5">
                    <div className="w-full">
                        <div className="w-full bg-blue_177f9f" style={{
                            height: 60
                        }}>
                            <div className="pt-4 ml-2 flex items-center">
                                <h4 className="text-white text-xl font-light">PHƯƠNG THỨC THANH TOÁN</h4>
                            </div>
                        </div>
                        <div className="container w-full">
                            <div className="flex mx-10 mt-5">
                                <button
                                    className={`px-6 py-3 mr-3 border border-gray-400 font-font-normal text-lg ${selectedMethod === 'cash'
                                        ? 'bg-blue_buy text-white border-none'
                                        : 'bg-white text-black'
                                        }`}
                                    onClick={() => handleMethodSelect('cash')}
                                >
                                    Thanh toán khi nhận hàng
                                </button>
                                <button
                                    className={`px-6 py-3 border border-gray-400 ml-3 font-normal text-lg ${selectedMethod === 'card' ? 'bg-blue_buy text-white border-none' : 'bg-white text-black'
                                        }`}
                                    onClick={() => handleMethodSelect('card')}
                                >
                                    Thẻ tín dụng/Ghi nợ
                                </button>
                            </div>
                            {/* <p className="mx-10 my-3 text-black">
                                Phí thu hộ: 0 VND. Ưu đãi về phí vặn chuyển (nếu có) áp dụng với cả phí thu hộ
                            </p> */}
                            <div className="mx-3 flex">
                                <div className="bg-white container mx-10 my-7 p-5">
                                    <div className="flex w-full justify-between my-8">
                                        <h3 className="font-normal text-2xl text-black">
                                            Tổng tiền hàng:
                                        </h3>
                                        <h3 className="font-normal text-2xl text-black">
                                            750.000 VND
                                        </h3>
                                    </div>
                                    <div className="flex w-full justify-between my-8">
                                        <h3 className="font-normal text-2xl text-black">
                                            Phí thu hộ:
                                        </h3>
                                        <h3 className="font-normal text-2xl text-black">
                                            0 VND
                                        </h3>
                                    </div>
                                    <div className="flex w-full justify-between my-8">
                                        <h3 className="font-normal text-2xl text-black">
                                            Tổng thanh toán:
                                        </h3>
                                        <h3 className="font-normal text-4xl text-blue_cart">
                                            750.000 VND
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center mb-5">
                                <div className="w-fit flex justify-center items-center" style={{
                                    height: 85,
                                    background: 'linear-gradient(to right, #24b7cf, #18335c)'
                                }}>
                                    <button className="text-4xl text-white px-40 -inset-y-px">
                                        ĐẶT HÀNG
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Transaction