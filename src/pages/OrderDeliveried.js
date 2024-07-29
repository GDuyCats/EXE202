import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function OrderDelivered() {
    const navigate = useNavigate();
    const { orderId } = useParams();
    const [orderDetails, setOrderDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { token } = useContext(AuthContext);
    console.log(token)
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);


    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const response = await fetch(`https://ohecaa.azurewebsites.net/api/OrderDetails/ViewAllOrderDetailByOrderID/${orderId}`);
                const data = await response.json();
                if (data.success) {
                    const orderDetails = data.data;
                    const productInfos = await Promise.all(orderDetails.map(async (orderDetail) => {
                        const productInfo = await fetchProductInfo(orderDetail.productId);
                        const { quantity: productQuantity, ...restProductInfo } = productInfo;
                        return { ...orderDetail, ...restProductInfo };
                    }));
                    setOrderDetails(productInfos);
                } else {
                    setError(data.message);
                }
            } catch (error) {
                setError("Error fetching order details");
            } finally {
                setLoading(false);
            }
        };
        fetchOrderDetails();
    }, [orderId]);

    const fetchProductInfo = async (id) => {
        try {
            const response = await fetch(`https://ohecaa.azurewebsites.net/api/Products/ViewProductByID/${id}`);
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    const handleFeedback = (productId) => {
        navigate(`/feedback/${productId}`);
    };

    return (
        <>
            <div className="w-full" style={{
                height: 100,
                background: 'linear-gradient(to right, #24b7cf, #18335c)'
            }}>
            </div>
            <div className="h-fit w-full bg-gradient-to-br from-blue_tl to-blue_br py-10 ">
                <div className="bg-blue_bg_pd w-auto flex justify-center items-center mx-8">
                    <div className="py-10">
                        <div className="justify-center items-center flex">
                            <svg width="130px" height="130px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#1DAFDD">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <circle cx="12" cy="12" r="10" stroke="#1DAFDD" stroke-width="2.0"></circle>
                                    <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#1DAFDD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="justify-center items-center flex">
                            <h1 className="text-5xl text-blue_cart py-3 px-3">ĐƠN HÀNG ĐÃ ĐƯỢC GIAO THÀNH CÔNG</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-blue_bg_pd justify-center flex items-center mx-8">
                    <div className="w-full">
                        <div className="w-full bg-blue_177f9f" style={{
                            height: 60
                        }}>
                            <div className="pt-4 ml-2 flex items-center">
                                <h4 className="text-white text-xl font-light">THÔNG TIN SẢN PHẨM</h4>
                            </div>
                        </div>
                        {orderDetails.map((item) => (
                            <div key={item.productId}>
                                <div className="bg-white container mx-10 my-7 p-10 border-2 border-black flex w-auto">
                                    <img
                                        src={item?.images[0]?.imageLink}
                                        alt="Product Image"
                                        className="w-fit my-auto h-52 object-fill justify-center border-2 border-blue_cart"
                                    />
                                    <div className="w-full ml-4 justify-end">
                                        <div className="bg-blue_bg_d0f8ff px-6 py-1 flex justify-center w-full">
                                            <h2 className="text-2xl mb-2 pt-2 text-blue_073d4d font-sans font-semibold">{item?.name}</h2>
                                        </div>
                                        <div className="flex flex-row mt-3">
                                            <p className="text-lg mb-4">Số lượng: </p>
                                            <div className="pl-7 flex">
                                                <span className="bg-blue_c0foff font-normal px-8 justify-center items-center flex" style={{ width: 30, height: 30 }}>{item?.quantity}</span>
                                            </div>
                                        </div>
                                        <div className="justify-end flex items-center">
                                            <p className="text-lg">Thành tiền:</p>
                                            <h1 className="text-4xl font-semibold text-sky-800 ml-10 justify-center pl-7">{item.price}</h1>
                                        </div>
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={() => handleFeedback(item.productId)}
                                        >
                                            Đánh Giá
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderDelivered