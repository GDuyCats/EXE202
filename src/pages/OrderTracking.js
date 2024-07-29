import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
function OrderTracking() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [orderDetails, setOrderDetails] = useState([]);
    const { orderId } = useParams();
    const [orderStatus, setOrderStatus] = useState(null);


    const steps = [
        'Đơn hàng đã được xác nhận',
        'Người bán đang chuẩn bị hàng',
        'Người bán đã giao hàng cho bên vận chuyển',
        'Đang giao hàng',
    ];

    const currentSteps = steps.slice(0, orderStatus + 1);

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


    if (loading) return <p>Loading...</p>;
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-blue_bg_pd justify-center flex items-center mx-8">
                    <div className="w-full">
                        <div className="w-full bg-blue_177f9f" style={{
                            height: 60
                        }}>
                            <div className="pt-4 ml-2 flex items-center">
                                <h4 className="text-white text-xl font-light">TÌNH TRẠNG ĐƠN HÀNG</h4>
                            </div>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-md mt-4">
                            {currentSteps.map((step, index) => (
                                <div key={index} className="flex items-start mb-4 last:mb-0">
                                    <div className="flex flex-col items-center mr-4">
                                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                        {index < currentSteps.length - 1 && <div className="w-px h-20 bg-blue-500 border-dotted"></div>}
                                    </div>
                                    <div className="text-lg">
                                        {step === 'Đơn hàng đã được hủy' && orderStatus === 2 ? (
                                            <span style={{ color: 'red' }}>{step}</span>
                                        ) : (
                                            step
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default OrderTracking
