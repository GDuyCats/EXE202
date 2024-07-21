import React, { useState, useEffect } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Link } from 'react-router-dom'
import productImage from '../assets/ensure-gold.jpg'
import logoImage from '../assets/Without slogan.png'
import { useGetProductById } from '../hooks/useGetProductById'
import { useItemStore } from '../utils/cart'
function ProductDetail() {
  const {data} = useGetProductById(1)

  const cartStore = useItemStore()
  // cartStore.addItem({id: 1, count: 10})
  const [count, setCount] = useState(1)


  
  return (
    <>
      <div className="w-full " style={{
        height: 100,
        background: 'linear-gradient(to right, #24b7cf, #18335c)'
      }}>
        <div className="pt-6 ml-2">
          <button className="text-white bg-blue_073d4d px-6 py-1 text-lg font-medium rounded-full hover:underline flex items-center w-fit"><svg className="text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
            <Link to="/">QUAY VỀ</Link></button>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------- */}
      <div className="min-h-screen bg-gradient-to-br from-blue_tl to-blue_br py-1">
        <div className="bg-blue_bg_pd justify-center flex items-center min-h-screen mx-8 my-8">
          <div className="bg-white container mx-10 my-7">
            <div className="flex">
              <div className="w-full md:w-2/3 bg-blue_bg_pd">
                <div className="flex justify-center">
                  <img
                    src={productImage}
                    alt="Product Image"
                    className="w-fit h-96 object-cover justify-center border-2 border-blue_cart"
                  />
                </div>
                <div className="flex my-6 justify-center">
                  <img
                    src={productImage}
                    alt="Product Image"
                    className="w-fit h-20 object-cover justify-center mx-2 border-2 border-blue_cart"

                  />
                  <img
                    src={productImage}
                    alt="Product Image"
                    className="w-fit h-20 object-cover justify-center mx-2"

                  />
                  <img
                    src={productImage}
                    alt="Product Image"
                    className="w-fit h-20 object-cover justify-center mx-2"

                  />
                  <img
                    src={productImage}
                    alt="Product Image"
                    className="w-fit h-20 object-cover justify-center mx-2"

                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-2/3 p-4 justify-end">
                <div className="bg-blue_bg_d0f8ff rounded-full px-6 py-1 w-fit">
                  <h2 className="text-2xl mb-4 pt-3 text-blue_073d4d font-sans font-semibold">{data?.name}</h2>
                </div>
                {data?.productMaterials?.map((materialItem)=>
                
                <p className="text-lg mb-4">{materialItem?.material?.name}: {materialItem?.detail}</p>
                )}
                {/* <p className="text-lg mb-4">Thương Hiệu: {data?.brandName}</p>
                <p className="text-lg mb-4">Xuất xứ: {data?.country}</p>
                <p className="text-lg mb-4">Thành phần xem thành phần của sản phẩm này tại đây</p>
                <p className="text-lg">Phân loại hàng:</p> */}
                {/* <div className="flex mb-4 w-full flex-wrap">
                  <div className="flex items-center bg-blue_classi p-2 rounded-2xl border-2 border-blue_cart mr-6 mt-3">
                    <img
                      src={productImage}
                      alt="Product Image"
                      className="h-8 object-cover justify-center mx-2 rounded-sm"
                    />
                    <h6 className="text-sm text-blue_073d4d font-sans font-semibold mx-4">Vanilla</h6>
                  </div>
                  <div className="flex items-center bg-blue_classi p-2 rounded-2xl border-2 border-blue_cart mr-6 mt-3">
                    <img
                      src={productImage}
                      alt="Product Image"
                      className="h-8 object-cover justify-center mx-2 rounded-sm"
                    />
                    <h6 className="text-sm text-blue_073d4d font-sans font-semibold mx-4">Ít ngọt</h6>
                  </div>
                  <div className="flex items-center bg-blue_classi p-2 rounded-2xl border-2 border-blue_cart mr-6 mt-3">
                    <img
                      src={productImage}
                      alt="Product Image"
                      className="h-8 object-cover justify-center mx-2 rounded-sm"
                    />
                    <h6 className="text-sm text-blue_073d4d font-sans font-semibold mx-4">Hạnh nhân</h6>
                  </div>
                  <div className="flex items-center bg-blue_classi p-2 rounded-2xl border-2 border-blue_cart mr-6 mt-3">
                    <img
                      src={productImage}
                      alt="Product Image"
                      className="h-8 object-cover justify-center mx-2 rounded-sm"
                    />
                    <h6 className="text-sm text-blue_073d4d font-sans font-semibold mx-4">Cà phê</h6>
                  </div>
                  <div className="flex items-center bg-blue_classi p-2 rounded-2xl border-2 border-blue_cart mr-6 mt-3">
                    <img
                      src={productImage}
                      alt="Product Image"
                      className="h-8 object-cover justify-center mx-2 rounded-sm"
                    />
                    <h6 className="text-sm text-blue_073d4d font-sans font-semibold mx-4">Lúa mạch</h6>
                  </div>
                </div> */}
                <div className="flex flex-row">
                  <p className="text-lg mb-4">Số lượng: </p>
                  <div className=" pl-7 flex">
                    <button onClick={() => {setCount(count-1)}} className="bg-blue_btn_qlt text-white text-2xl font-bold justify-center items-center flex" style={{ width: 30, height: 30 }}>-</button>
                    <spam className="bg-blue_c0foff font-bold px-8 justify-center items-center flex" style={{ width: 30, height: 30 }}>{count}</spam>
                    <button onClick={() => {setCount(count+1)}} className="bg-blue_btn_qlt text-white text-2xl font-bold justify-center items-center flex" style={{ width: 30, height: 30 }}>+</button>
                  </div>
                </div>
                <div className="flex"><p className="text-lg mb-4">Giá:</p> <h1 className="text-2xl font-semibold text-sky-800 ml-10 justify-center pl-7">750.000 VND</h1></div>
                <div className="flex">
                  <button onClick={() => {cartStore.addItem({id: data.id, count})}} className="bg-blue_cart hover:bg-sky-700 text-white py-2 px-4 rounded-full mr-2" style={{ width: 280, height: 62 }}>
                    THÊM VÀO GIỎ HÀNG
                  </button>
                  <button className="bg-blue_buy hover:bg-cyan-700 text-white py-2 px-4 rounded-full mx-2" style={{ width: 280, height: 62 }}>
                    MUA NGAY
                  </button>
                </div>
              </div>
            </div>
            {/* _______________________________________________________________________________________________________________________________________________ */}
            <div className="flex flex-wrap mt-6">
              <div className="w-full p-4">
                <div className="bg-blue_bg_d0f8ff rounded-full px-6 py-1 w-max font-sans md:w-1/2 flex justify-center">
                  <h2 className="text-2xl mb-4 pt-3 text-blue_073d4d font-sans font-semibold">MÔ TẢ SẢN PHẨM</h2>
                </div>
                <p className="text-lg p-4">
                  Ensure Gold là nguồn dinh dưỡng đầy đủ và cân đối, được chứng minh giúp đáp ứng nhu cầu dinh dưỡng
                  cho người lớn tuổi, hỗ trợ tăng cường sức khỏe, thể chất và chất lượng cuộc sống</p>

                <p className="text-lg p-4">ENSURE GOLD CÓ CHỨA:</p>
                <p className="text-lg pl-4">- HMB (B-hydroxy-B-methylbutyrat) và protein chất lượng cao, hỗ trợ xây dựng và phát triển khối cơ</p>
                <p className="text-lg pl-4">- 28 vitamin và khoáng chất thiết yếu giúp cơ thể khỏe mạnh. Giàu Canxi, Phospho và Vitamin D giúp xương chắc khỏe.</p>
                <p className="text-lg pl-4">- Chất xạ FOS nuôi dưỡng vi sinh vật có lợi và giúp hệ tiêu hóa khỏe mạnh</p>
                <p className="text-lg pl-4">- Các chất chống oxi – hóa (beta caroten, vitamin C, E, kẽm và selen) giúp bảo vệ cơ thể</p>
                <p className="text-lg pl-4">- Hỗn hợp chất béo thực vật giàu acid béo Omega 3-6-9 tốt cho tim mạch.
                  Hàm lượng acid béo no và cholesterol thấp có lợi cho chế độ ăn lành mạnh</p>

                <p className="text-lg p-4">Cách sử dụng: Để pha 230 mL cho 185 ml nước chín nguội vào ly, vừa từ từ cho vào 6 muỗng gạt ngang
                  (muống có sẵn trong hộp môi muống tương đương 10,1g) hay 60,6g bột Ensure vừa khuấy đều cho đến khi bột tan hết.</p>

                <p className="text-lg p-4">Cách bảo quản: Bảo quản hộp chưa mở ở nhiệt độ phòng. Sau khi mở nắp cần sử dụng hết trong vòng 3 tuần.
                  Đậy nắp kín sau mỗi lần sử dụng, để nơi khô mát (không cho vào tủ lạnh).</p>

                <p className="text-lg p-4">Hạn sử dụng 720 ngày từ ngày sản xuất.</p>

                <p className="text-lg p-4">Sản xuất tại Singapore</p>
              </div>
            </div>
            <div className="w-full">
              <div className="mt-10 w-full bg-blue_177f9f" style={{
                height: 60
              }}>
                <div className="pt-4 ml-2">
                  <h1 className="text-white text-lg font-semibold">REVIEW SẢN PHẨM</h1>
                </div>
              </div>
              <div className="flex">
                <div className="w-5/12 border-black border-2 m-4 flex" style={{ height: 200 }}>
                  <div className="h-2/3 w-1/4 m-3 justify-center flex">
                    <img
                      src={productImage}
                      alt="Product Image"
                      className=" object-contain justify-center"
                    />
                  </div>
                  <div className="w-4/6 p-4 justify-end">
                    <h2 className="text-xl mb-4 pt-3 text-blue_username font-sans font-semibold">NGUYỄN MAI CHUNG</h2>
                    <div className="flex">
                      <svg className="w-6 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                      </svg>
                      <svg className="w-6 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                      </svg>
                      <svg className="w-6 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                      </svg>
                      <svg className="w-6 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                      </svg>
                      <svg className="w-6 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <p>Hơi đau ví nhưng không hối tiếc nha, uống rất ok</p>
                  </div>
                </div>
                <div className="w-5/12 border-black border-2 m-4 flex" style={{ height: 200 }}>
                  <div className="h-2/3 w-1/4 m-3 justify-center flex">
                    <img
                      src={productImage}
                      alt="Product Image"
                      className=" object-contain justify-center"
                    />
                  </div>
                  <div className="w-4/6 p-4 justify-end">
                    <h2 className="text-xl mb-4 pt-3 text-blue_username font-sans font-semibold">NGUYỄN MAI RIÊNG</h2>
                    <div className="flex">
                      <svg className="w-6 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                      </svg>
                      <svg className="w-6 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                      </svg>
                      <svg className="w-6 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                      </svg>
                      <svg className="w-6 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                      </svg>
                      <svg className="w-6 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <p>Giao hàng nhanh, sữa chất lượng tốt</p>
                  </div>
                </div>
                <div className="w-2/12 m-4 -ml-1 flex items-center justify-center">
                  <button className="bg-blue_6bccde text-white flex items-center justify-center px-10 py-2 text-2xl font-sans font-semibold">XEM THÊM</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ___________________SẢN PHẨM TƯƠNG TỰ____________________________________________________________________________________________________________________________ */}
        <div className="mx-8 mt-8 flex items-center" style={{
          height: 80,
          background: 'linear-gradient(to right, #24b7cf, #18335c)'
        }}>
          <h1 className="text-white font-semibold text-4xl ml-4 font-sans">SẢN PHẨM TƯƠNG TỰ</h1>
        </div>
        <div className="flex items-center justify-center mx-8">
          <div className="bg-blue_bg_pd mx-2 my-2 w-1/4">
            <div className="m-2 justify-center flex">
              <img
                src={productImage}
                alt="Product Image"
                className="w-96 h-60 object-contain justify-center"
              />
            </div>
            <div className="bg-blue_bg_d0f8ff rounded-3xl mx-6 my-2 flex justify-between items-center w-fit">
              <h6 className="text-base mx-6 text-blue_073d4d font-sans font-semibold">SỮA XANXI GERDOLAX GOLD CANXI NANO HƯƠNG VANILLA 900G</h6>
            </div>
            <div className="flex mx-6 items-center">
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <p className="text-blue_073d4d font-sans font-semibold text-xs ml-3">
                ĐÃ BÁN 12K
              </p>
            </div>
            <h6 className="text-blue_073d4d font-sans font-semibold mx-6 text-sm">THÀNH PHỐ HỒ CHÍ MINH </h6>
            <h1 className="text-2xl font-semibold text-blue_177f9f mx-6 font-sans">350.000 VND</h1>
          </div>
          <div className="bg-blue_bg_pd mx-2 my-2 w-1/4">
            <div className="m-2 justify-center flex">
              <img
                src={productImage}
                alt="Product Image"
                className="w-96 h-60 object-contain justify-center"
              />
            </div>
            <div className="bg-blue_bg_d0f8ff rounded-3xl mx-6 my-2 flex justify-between items-center w-fit">
              <h6 className="text-base mx-6 text-blue_073d4d font-sans font-semibold">SỮA XANXI GERDOLAX GOLD CANXI NANO HƯƠNG VANILLA 900G</h6>
            </div>
            <div className="flex mx-6 items-center">
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <p className="text-blue_073d4d font-sans font-semibold text-xs ml-3">
                ĐÃ BÁN 12K
              </p>
            </div>
            <h6 className="text-blue_073d4d font-sans font-semibold mx-6 text-sm">THÀNH PHỐ HỒ CHÍ MINH </h6>
            <h1 className="text-2xl font-semibold text-blue_177f9f mx-6 font-sans">350.000 VND</h1>
          </div>
          <div className="bg-blue_bg_pd mx-2 my-2 w-1/4">
            <div className="m-2 justify-center flex">
              <img
                src={productImage}
                alt="Product Image"
                className="w-96 h-60 object-contain justify-center"
              />
            </div>
            <div className="bg-blue_bg_d0f8ff rounded-3xl mx-6 my-2 flex justify-between items-center w-fit">
              <h6 className="text-base mx-6 text-blue_073d4d font-sans font-semibold">SỮA XANXI GERDOLAX GOLD CANXI NANO HƯƠNG VANILLA 900G</h6>
            </div>
            <div className="flex mx-6 items-center">
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <p className="text-blue_073d4d font-sans font-semibold text-xs ml-3">
                ĐÃ BÁN 12K
              </p>
            </div>
            <h6 className="text-blue_073d4d font-sans font-semibold mx-6 text-sm">THÀNH PHỐ HỒ CHÍ MINH </h6>
            <h1 className="text-2xl font-semibold text-blue_177f9f mx-6 font-sans">350.000 VND</h1>
          </div>
          <div className="bg-blue_bg_pd mx-2 my-2 w-1/4">
            <div className="m-2 justify-center flex">
              <img
                src={productImage}
                alt="Product Image"
                className="w-96 h-60 object-contain justify-center"
              />
            </div>
            <div className="bg-blue_bg_d0f8ff rounded-3xl mx-6 my-2 flex justify-between items-center w-fit">
              <h6 className="text-base mx-6 text-blue_073d4d font-sans font-semibold">SỮA XANXI GERDOLAX GOLD CANXI NANO HƯƠNG VANILLA 900G</h6>
            </div>
            <div className="flex mx-6 items-center">
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <svg className="w-1 text-blue_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <p className="text-blue_073d4d font-sans font-semibold text-xs ml-3">
                ĐÃ BÁN 12K
              </p>
            </div>
            <h6 className="text-blue_073d4d font-sans font-semibold mx-6 text-sm">THÀNH PHỐ HỒ CHÍ MINH </h6>
            <h1 className="text-2xl font-semibold text-blue_177f9f mx-6 font-sans">350.000 VND</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail