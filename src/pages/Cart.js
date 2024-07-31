import React, { useContext, useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import CartItem from '../components/CartItem'
import { useItemStore } from '../utils/cart'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Modal from 'react-modal';

function Cart() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const cartStore = useItemStore();
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleCheckout = () => {
        const selectedItems = cartStore.items.filter(item => cartStore.selectedItems.includes(item.id));
        if (selectedItems.length === 0) {
            setIsOpenModal(true);
        } else {
            const totalPrice = selectedItems.reduce((acc, item) => acc + item.priceSold * item.count, 0);
            cartStore.checkoutItems();
            navigate('/transaction', { state: { selectedItems: [...selectedItems], totalPrice } });
        }
    };

    const handleCloseModal = () => {
        setIsOpenModal(false);
    };


    useEffect(() => {
        if (user) {
            cartStore.setUserId(user.id);
        }
    }, [user]);

    const isEmptyCart = cartStore.items.length === 0;
    return (
        <>
            <div className="w-full" style={{
                height: 100,
                background: 'linear-gradient(to right, #24b7cf, #18335c)'
            }}>
            </div>
            <div className="min-h-screen w-full bg-gradient-to-br from-blue_tl to-blue_br py-1">
                <div className="bg-blue_bg_pd justify-center flex items-center mx-8 my-8">
                    <div className="w-full">
                        <div className="w-full bg-blue_177f9f" style={{
                            height: 60
                        }}>
                            <div className="pt-4 ml-2 flex items-center">
                                <h1 className="text-white text-3xl font-medium">GIỎ HÀNG</h1>
                            </div>
                        </div>
                        {isEmptyCart ? (
                            <div className="flex items-center justify-center py-40">
                                <h1 className="text-3xl text-blue_buy">BẠN CHƯA CÓ GÌ TRONG GIỎ HÀNG</h1>
                            </div>
                        ) : (
                            <div>
                                <div className="min-h-screen items-center justify-center">
                                    {cartStore.items.map(item => <CartItem key={item.id} item={item} />)}
                                </div>
                                <div className="flex">
                                    <div className="justify-start flex items-center mx-8 w-1/2">
                                        <p className="text-lg">Tổng Thanh Toán:</p>
                                        <h1 className="text-4xl font-semibold text-sky-800 ml-10 justify-center pl-7 my-8">{cartStore.total}.000 VND</h1>
                                    </div>
                                    <div className="justify-end flex items-center mx-8 w-1/2">
                                        <button onClick={handleCheckout} className="bg-blue_177f9f hover:bg-sky-700 text-white px-4 mb-8" style={{ width: 280, height: 62 }}>
                                            <p className="text-3xl">THANH TOÁN</p>
                                        </button>
                                        <Modal
                                            isOpen={isOpenModal}
                                            onRequestClose={handleCloseModal}
                                            style={{
                                                overlay: {
                                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                },
                                                content: {
                                                    top: '50%',
                                                    left: '50%',
                                                    right: 'auto',
                                                    bottom: 'auto',
                                                    marginRight: '-50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    backgroundColor: '#fff',
                                                    padding: '20px',
                                                    border: 'none',
                                                    borderRadius: '10px',
                                                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                                                },
                                            }}
                                        >
                                            <div className="w-auto flex items-center justify-center rounded-full mb-5" style={{
                                                height: 30,
                                                background: 'linear-gradient(to right, #24b7cf, #18335c)'
                                            }}>
                                                <h1 className="text-2xl text-white">CHÚ Ý</h1>
                                            </div>
                                            <h2 className="font-semibold" style={{ marginBottom: '10px' }}>Vui Lòng Chọn Sản Phẩm Để Thanh Toán!</h2>
                                            <div className="w-auto flex items-center justify-center">
                                                <button onClick={handleCloseModal} className="bg-blue_177f9f" style={{ padding: '10px 20px', color: '#fff', border: 'none', borderRadius: '5px' }}>
                                                    Đóng
                                                </button>
                                            </div>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
