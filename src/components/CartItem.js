import React, { useState } from 'react';
import productImage from '../assets/ensure-gold.jpg'
import { useItemStore } from '../utils/cart';
import { useGetProductById } from '../hooks/useGetProductById';
function CartItem({item}) {
    const {data} = useGetProductById(item.id)
    const cartStore = useItemStore()
    return (

        <div>
            <div className="w-full flex">
                <div className=" flex justify-start mx-8 my-auto">
                    <input type="checkbox" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
                </div>
                <div className="bg-white container mx-10 my-7 p-10 border-2 border-black flex">
                    <img
                        src={productImage}
                        alt="Product Image"
                        className="w-fit h-52 object-fill justify-center border-2 border-blue_cart"
                    />
                    <div className="w-full ml-4 justify-end">
                        <div className="bg-blue_bg_d0f8ff px-6 py-1 flex justify-center w-full">
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
                                <button onClick={() => {cartStore.addItem({id:1, count: -1})}} className="bg-blue_btn_qlt text-white text-2xl font-bold justify-center items-center flex" style={{ width: 30, height: 30 }}>-</button>
                                <spam className="bg-blue_c0foff font-normal px-8 justify-center items-center flex" style={{ width: 30, height: 30 }}>{item.count}</spam>
                                <button onClick={() => {cartStore.addItem({id:1, count: 1})}} className="bg-blue_btn_qlt text-white text-2xl font-bold justify-center items-center flex" style={{ width: 30, height: 30 }}>+</button>
                            </div>
                        </div>
                        <div className="justify-end flex items-center">
                            <p className="text-lg">Thành tiền:</p>
                            <h1 className="text-4xl font-semibold text-sky-800 ml-10 justify-center pl-7">{(data?.unitPrice??0)*item.count} VND</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="justify-start flex items-center mx-8 w-1/2">
                    <p className="text-lg">Tổng Thanh Toán:</p>
                    <h1 className="text-4xl font-semibold text-sky-800 ml-10 justify-center pl-7 my-8">{(data?.unitPrice??0)*item.count} VND</h1>
                </div>
                <div className="justify-end flex items-center mx-8 w-1/2">
                    <button className="bg-blue_177f9f hover:bg-sky-700 text-white px-4 mb-8" style={{ width: 280, height: 62 }}>
                    <p className="text-3xl">THANH TOÁN</p>
                    </button>
                </div>
            </div>
        </div>
        //_________________________________________________________________________________________________________________________________________________________________
    );
}

export default CartItem;