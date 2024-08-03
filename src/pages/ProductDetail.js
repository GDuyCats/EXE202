import React, { useState, useEffect, useMemo, useContext } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { useGetProductById } from '../hooks/useGetProductById'
import { useItemStore } from '../utils/cart'
import { useGetChildCategoryById } from '../hooks/useGetChildCategoryById'
import ImageGallery from "react-image-gallery";
import { AuthContext } from '../context/AuthContext'
import Modal from 'react-modal';

function ProductDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate()
  const { token } = useContext(AuthContext);
  const { id } = useParams()
  const { data } = useGetProductById(id)
  const { data: childCategories } = useGetChildCategoryById(data?.productMaterials?.[0]?.material?.childCategoryId)
  const cartStore = useItemStore()
  const [count, setCount] = useState(1)
  const images = useMemo(() => {
    if (!data) {
      return [];
    }
    return data?.images?.map(image => {
      return {
        original: image?.imageLink,
        thumbnail: image?.imageLink
      }
    })
  }, [data])

  const handleAddToCart = ({ userId, token }) => {
    if (userId) {
      cartStore.addItem({ id: data?.id, count, priceSold: data?.priceSold });
      setIsOpenCart(true);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (isOpenCart) {
      setTimeout(() => {
        setIsOpenCart(false);
      }, 1500);
    }
  }, [isOpenCart]);

  const handleBuyNow = ({ userId, token }) => {
    if (userId) {
      cartStore.addItem({ id: data?.id, count, priceSold: data?.priceSold });
      navigate('/cart');
    } else {
      setIsOpen(true);
    }
  };
  const handleLogin = () => {
    navigate('/login');
  };
  const handleRegister = () => {
    navigate('/signup');
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            width: '350px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '10px',
            backgroundColor: '#fff',
            border: 'none',
            borderRadius: '25px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
          },
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex-1"></div>
          <button
            className="text-gray-500 hover:text-gray-900 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="w-full flex items-center justify-center rounded-full" style={{
          height: 50,
          background: 'linear-gradient(to right, #24b7cf, #18335c)'
        }}>
          <h1 className="text-4xl text-white">CHÚ Ý</h1>
        </div>
        <div className="flex items-center justify-center w-full text-center">
          <h2>Bạn cần đăng nhập để có thể mua hàng tại OHeCa</h2>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue_cart hover:bg-sky-700 text-white text-center w-3/4 rounded-full py-2 mt-4" onClick={handleLogin}>
            Đăng Nhập
          </button>
        </div>
        <div className="flex items-center justify-center w-full text-center">
          <h2>Chưa có tài khoản? Đăng ký miễn phí ngay:</h2>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue_buy hover:bg-cyan-700 text-white text-center w-3/4 rounded-full py-2 mt-4" onClick={handleRegister}>
            Đăng Ký
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={isOpenCart}
        setIsOpen={setIsOpenCart}
        style={{
          content: {
            width: '800px',
            position: 'absolute',
            top: isOpenCart ? '50%' : '-100%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '10px',
            border: 'none',
            borderRadius: '25px',
            zIndex: 1000,
            backgroundColor: 'transparent',
            transition: 'top 0.5s ease-in-out',
          },
        }}
      >
        <div className="bg-blue_cart hover:bg-sky-700 text-white text-center h-14 w-3/4 rounded-full py-2 mt-4">
          <h1 className="text-3xl font-normal">THÊM VÀO GIỎ HÀNG THÀNH CÔNG</h1>
        </div>
      </Modal>
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
                <ImageGallery items={images} />
              </div>
              <div className="w-full md:w-1/2 xl:w-2/3 p-4 justify-end">
                <div className="bg-blue_bg_d0f8ff rounded-full px-6 py-1 w-fit">
                  <h2 className="text-2xl mb-4 pt-3 text-blue_073d4d font-sans font-semibold">{data?.name}</h2>
                </div>
                <p className="text-lg mb-4">Thương Hiệu: {data?.brandName}</p>
                <p className="text-lg mb-4">Xuất xứ: {data?.country}</p>
                {data?.productMaterials?.map((materialItem) =>

                  <p className="text-lg mb-4">{materialItem?.material?.name}: {materialItem?.detail}</p>
                )}
                <div className="flex flex-row">
                  <p className="text-lg mb-4">Số lượng: </p>
                  <div className=" pl-7 flex">
                    <button onClick={() => { setCount(Math.max(count - 1, 1)) }} className="bg-blue_btn_qlt text-white text-2xl font-bold justify-center items-center flex" style={{ width: 30, height: 30 }}>-</button>
                    <spam className="bg-blue_c0foff font-bold px-8 justify-center items-center flex" style={{ width: 30, height: 30 }}>{count}</spam>
                    <button onClick={() => { setCount(count + 1) }} className="bg-blue_btn_qlt text-white text-2xl font-bold justify-center items-center flex" style={{ width: 30, height: 30 }}>+</button>
                  </div>
                </div>
                <div className="flex"><p className="text-lg mb-4">Giá:</p> <h1 className="text-2xl font-semibold text-sky-800 ml-10 justify-center pl-7">{data?.priceSold?.toLocaleString().replace(',', '.')} VND</h1></div>
                <div className="flex">
                  <button onClick={() => handleAddToCart({ userId: cartStore.userID, token })} className="bg-blue_cart hover:bg-sky-700 text-white py-2 px-4 rounded-full mr-2" style={{ width: 280, height: 62 }}>
                    THÊM VÀO GIỎ HÀNG
                  </button>
                  <button onClick={() =>
                    handleBuyNow({ userId: cartStore.userID, token })
                  } className="bg-blue_buy hover:bg-cyan-700 text-white py-2 px-4 rounded-full mx-2" style={{ width: 280, height: 62 }}>
                    MUA NGAY
                  </button>
                </div>
              </div>
            </div>
            {/* ____________________________________________________________MÔ TẢ SẢN PHẨM___________________________________________________________________________________ */}
            <div className="flex flex-wrap mt-6">
              <div className="w-full p-4">
                <div className="bg-blue_bg_d0f8ff rounded-full px-6 py-1 w-max font-sans md:w-1/2 flex justify-center">
                  <h2 className="text-2xl mb-4 pt-3 text-blue_073d4d font-sans font-semibold">MÔ TẢ SẢN PHẨM</h2>
                </div>
                <p className="text-lg p-4">{data?.description}</p>
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
              <div className="flex flex-wrap justify-between">
                {data?.feeback?.length > 0 ? (
                  data?.feeback?.slice(0, 2).map((feedback, index) => (
                    <div key={index} className="w-5/12 border-black border-2 mx-8 my-4 flex" style={{ height: 200 }}>
                      <div className="h-2/3 w-1/4 m-3 flex justify-center">
                        <img
                          src={feedback?.avatar}
                          alt="User Avatar"
                          className="object-contain"
                        />
                      </div>
                      <div className="w-4/6 p-4">
                        <h2 className="text-xl mb-4 pt-3 text-blue_username font-sans font-semibold">{feedback?.userName}</h2>
                        <div className="flex">
                          {Array(feedback.rate).fill(0).map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue_cart">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>
                          ))}
                        </div>
                        <p>{feedback?.content}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="w-full flex justify-center items-center m-4" style={{ height: 200 }}>
                    <p className="text-2xl text-blue_073d4d font-semibold">Sản phẩm này chưa có đánh giá nào</p>
                  </div>
                )}
              </div>

              {data?.feeback?.length > 0 && (
                <button
                  className="bg-blue_6bccde text-white flex items-center justify-center px-2 py-2 text-2xl font-normal mt-5"
                  onClick={() => setShowPopup(true)}
                >
                  XEM THÊM
                </button>
              )}

              {showPopup && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white p-5 rounded-lg shadow-lg w-2/4 overflow-y-auto" style={{ maxHeight: '80vh' }}>
                    <div className="justify-between">
                      {data?.feeback?.length > 0 ? (
                        data?.feeback?.map((feedback, index) => (
                          <div key={index} className="w-auto border-black border-2 m-4 flex" style={{ height: 200 }}>
                            <div className="h-2/3 w-1/4 m-3 flex justify-center">
                              <img
                                src={feedback?.avatar}
                                alt="User Avatar"
                                className="object-contain"
                              />
                            </div>
                            <div className="w-4/6 p-4">
                              <h2 className="text-xl mb-4 pt-3 text-blue_username font-sans font-semibold">{feedback?.userName}</h2>
                              <div className="flex">
                                {Array(feedback.rate).fill(0).map((_, i) => (
                                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue_cart">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                  </svg>
                                ))}
                              </div>
                              <p>{feedback?.content}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="w-full flex justify-center items-center m-4" style={{ height: 200 }}>
                          <p className="text-2xl text-blue_073d4d font-semibold">Sản phẩm này chưa có đánh giá nào</p>
                        </div>
                      )}
                    </div>
                    <div className="flex w-full items-center justify-center mt-4">
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => setShowPopup(false)}
                      >
                        Đóng
                      </button>
                    </div>
                  </div>
                </div>
              )}
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

          {childCategories?.map((category) =>
            <div className="bg-blue_bg_pd mx-2 my-2 w-1/4">
              <div className="m-2 justify-center flex">
                <img
                  src={category?.imageLink}
                  alt="Product Image"
                  className="w-96 h-60 object-contain justify-center"
                />
              </div>
              <div className="bg-blue_bg_d0f8ff rounded-3xl mx-6 my-2 flex justify-between items-center w-fit">
                <Link to={`/productdetail/${category.id}`}>
                  <h6 className="text-base mx-6 text-blue_073d4d font-sans font-semibold">{category?.name}</h6>
                </Link>
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
                  ĐÃ BÁN {category?.quantitySold}
                </p>
              </div>
              <h6 className="text-blue_073d4d font-sans font-semibold mx-6 text-sm">{category?.country}</h6>
              <h1 className="text-2xl font-semibold text-blue_177f9f mx-6 font-sans">{category?.priceSold}.000 VND</h1>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductDetail
