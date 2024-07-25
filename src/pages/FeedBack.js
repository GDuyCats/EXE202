import React, { useState } from 'react'
import { useGetProductById } from '../hooks/useGetProductById'
import { useItemStore } from '../utils/cart'
import { FaStar } from 'react-icons/fa'

function Feedback({ item }) {
    const { data } = useGetProductById(1)
    const cartStore = useItemStore()

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <>
            <div className="w-full" style={{
                height: 100,
                background: 'linear-gradient(to right, #24b7cf, #18335c)'
            }}>
            </div>
            <div className="min-h-screen w-full bg-gradient-to-br from-blue_tl to-blue_br py-1">
                <div className="bg-blue_bg_pd justify-center items-center mx-8 my-8">
                    <div className="w-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                            <path className="text-blue_cart" fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-20 h-20">
                            <path className="text-blue_cart" fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-32 h-32">
                            <path className="text-blue_cart" fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-20 h-20">
                            <path className="text-blue_cart" fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                            <path className="text-blue_cart" fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="px-10 py-5 text-center text-blue_cart">
                        <h1 className="text-5xl">ĐÁNH GIÁ</h1>
                    </div>
                    <div className="bg-white container mx-10 my-7 p-10 border-2 border-black flex">
                        <img
                            src={data?.images[0]?.imageLink}
                            alt="Product Image"
                            className="w-fit my-auto h-52 object-fill justify-center border-2 border-blue_cart"
                        />
                        <div className="w-full ml-4 justify-end">
                            <div className="bg-blue_bg_d0f8ff px-6 py-1 flex justify-center w-full">
                                <h2 className="text-2xl mb-2 pt-2 text-blue_073d4d font-sans font-semibold">{data?.name}</h2>
                            </div>
                            <div className="w-full md:w-1/2 xl:w-2/3 p-4 justify-end">
                                <div className="w-full items-center p-2 rounded-2xl border-2 border-blue_cart ml-6 mt-3">
                                    {data?.productMaterials?.map((materialItem) =>
                                        <p key={materialItem?.material?.id} className="text-lg mb-4">{materialItem?.material?.name}: {materialItem?.detail}</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-row mt-3">
                                <p className="text-lg mb-4">Số lượng: </p>
                                <div className="pl-7 flex">
                                    <span className="bg-blue_c0foff font-normal px-8 justify-center items-center flex" style={{ width: 30, height: 30 }}>{item?.count}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="bg-blue_177f9f text-white ml-10 justify-center items-center flex w-fit h-fit p-5">
                            CHẤT LƯỢNG SẢN PHẨM
                        </div>
                        <div className="flex ml-5">
                            {[...Array(5)].map((star, index) => {
                                const currentRating = index + 1;
                                return (
                                    <label>
                                        <input
                                            className="hidden"
                                            type="radio"
                                            name="rating"
                                            value={currentRating}
                                            onClick={() => setRating(currentRating)}
                                        />
                                        <FaStar
                                            className="cursor-pointer"
                                            size={50}
                                            color={currentRating <= (hover || rating) ? "#1DAFDD" : "#7FB7C9"}
                                            onMouseEnter={() => setHover(currentRating)}
                                            onMouseLeave={() => setHover(null)}
                                        />
                                    </label>
                                )

                            })}
                        </div>
                    </div>
                    <div className="ml-10 mt-5 text-blue_177f9f">
                        <h1 className="text-3xl">Nhận xét</h1>
                    </div>
                    <div className="my-3 mx-10">
                        <textarea className="border border-gray-300 p-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-blue_177f9f" />
                    </div>
                    <div className="p-3 flex items-center justify-center">
                        <div className="w-fit flex justify-center items-center" style={{
                            height: 85,
                            background: 'linear-gradient(to right, #24b7cf, #18335c)'
                        }}>
                            <button className="text-4xl text-white px-40 -inset-y-px">
                                GỬI ĐÁNH GIÁ
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Feedback