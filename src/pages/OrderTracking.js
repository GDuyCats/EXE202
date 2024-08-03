import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
function OrderTracking() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [orderDetails, setOrderDetails] = useState([]);
    const { orderId } = useParams();
    const [orderStatus, setOrderStatus] = useState(null);
    const [showCancelPopup, setShowCancelPopup] = useState(false);


    const steps = [
        'Đơn hàng chưa được xác nhận',
        'Đơn hàng đã được xác nhận',
        'Đang giao hàng',
    ];

    const currentSteps = orderStatus === 2
        ? ['Đơn hàng đã được hủy']
        : steps.slice(0, orderStatus === 1 ? 3 : orderStatus + 1);

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

        const fetchOrderStatus = async () => {
            try {
                const response = await fetch(`https://ohecaa.azurewebsites.net/api/Orders/ViewOrderByID/${orderId}`);
                const data = await response.json();
                if (data.success) {
                    setOrderStatus(data.data.status);
                } else {
                    setError(data.message);
                }
            } catch (error) {
                setError("Error fetching order status");
            }
        };

        fetchOrderDetails();
        fetchOrderStatus();
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

    const handleCancelOrder = async () => {
        try {
            const response = await fetch(`https://ohecaa.azurewebsites.net/api/Orders/CancelOrder/${orderId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if (data.success) {
                setOrderStatus(2);
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError("Error cancelling order");
        } finally {
            setShowCancelPopup(false);
        }
    };


    if (loading) return (
        <div className='h-screen w-screen bg-blue_a2dde8 flex items-center justify-center'>
            <p className='text-9xl font-bold '>Loading</p>
            <span className='animate-bounce text-9xl font-bold'>.</span>
            <span className='text-9xl font-bold animate-bounce [animation-delay:-0.15s]'>.</span>
            <span className='[animation-delay:-0.3s] animate-bounce text-9xl font-bold'>.</span>
        </div>
    );
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className="w-full" style={{
                height: 100,
                background: 'linear-gradient(to right, #24b7cf, #18335c)'
            }}>
            </div>
            <div className="min-h-screen w-full bg-gradient-to-br from-blue_tl to-blue_br py-1">
                <div className="bg-blue_bg_pd justify-center flex items-center mx-8 mt-5">
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
                                <div className="bg-white container mx-10 my-7 p-10 border-2 border-black flex w-auto relative">
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
                                        <div className="absolute bottom-4 right-4 flex items-center">
                                            <p className="text-lg">Thành tiền:</p>
                                            <h1 className="text-4xl font-semibold text-sky-800 ml-10 justify-center pl-7">{item.price?.toLocaleString().replace(',', '.')}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-blue_bg_pd justify-center flex items-center mx-8">
                    <div className="w-full">
                        <div className="w-full bg-blue_177f9f" style={{ height: 60 }}>
                            <div className="pt-4 ml-2 flex items-center">
                                <h4 className="text-white text-xl font-light">TÌNH TRẠNG ĐƠN HÀNG</h4>
                            </div>
                        </div>
                        <div className="p-4 bg-white rounded-md mx-4 my-4">
                            {currentSteps.map((step, index) => (
                                <div key={index} className="flex items-start mb-4 last:mb-0">
                                    {orderStatus !== 2 && (
                                        <div className="flex flex-col items-center mr-4">
                                            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                            {index < currentSteps.length - 1 && <div className="w-px h-20 bg-blue-500 border-dotted"></div>}
                                        </div>
                                    )}
                                    <div className="text-lg">
                                        {step === 'Đơn hàng đã được hủy' ? (
                                            <div className=" w-full items-center justify-center flex">
                                                <span style={{ color: 'red' }} className="text-2xl font-semibold">{step}</span>
                                            </div>
                                        ) : (
                                            step
                                        )}
                                    </div>
                                </div>
                            ))}
                            {(orderStatus === 0) && (
                                <div className="flex justify-end mt-4">
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                                        onClick={() => setShowCancelPopup(true)}
                                    >
                                        Hủy Đơn Hàng
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {showCancelPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-md">
                        <h2 className="text-lg mb-4">Bạn có chắc bạn muốn Hủy đơn Hàng này không?</h2>
                        <div className="flex justify-end">
                            <button
                                className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                                onClick={() => setShowCancelPopup(false)}
                            >
                                Hủy bỏ
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-md"
                                onClick={handleCancelOrder}
                            >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default OrderTracking
