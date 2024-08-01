import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GetAllOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageRange, setPageRange] = useState([1, 10]);
    const [filterStatus, setFilterStatus] = useState(''); // Initial state as an empty string
    const [clickedOrders, setClickedOrders] = useState([]); // Track clicked orders
    const ordersPerPage = 9;

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('https://ohecaa.azurewebsites.net/api/Orders/ViewAllOrder');
                if (response && response.data && Array.isArray(response.data.data)) {
                    setOrders(response.data.data);
                    console.log('Fetched orders:', response.data.data);
                } else {
                    throw new Error('Invalid response data');
                }
            } catch (error) {
                setError(error.message);
                console.error('Error fetching orders:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const handleConfirmOrder = async (orderId) => {
        const order = orders.find(order => order.id === orderId);
        if (order && (order.status === 2 || order.isConfirm)) {
            setError('Cannot confirm a canceled or already confirmed order');
            return;
        }

        try {
            setClickedOrders(prevClicked => [...prevClicked, orderId]); // Disable button immediately
            const response = await axios.put(`https://ohecaa.azurewebsites.net/api/Orders/ConfirmOrder/${orderId}`, {
                status: 1 // Set status to processing
            });
            if (response.status === 200) {
                setOrders(prevOrders => prevOrders.map(order =>
                    order.id === orderId ? { ...order, isConfirm: true, status: 1 } : order
                ));
            } else {
                throw new Error('Failed to confirm order');
            }
        } catch (error) {
            console.error('Error confirming order:', error);
            setError(error.response?.data?.message || error.message);
        }
    };

    const handleCancelOrder = async (orderId) => {
        const order = orders.find(order => order.id === orderId);
        if (order && (order.isConfirm || order.status !== 0)) {
            setError('Cannot cancel a confirmed or non-pending order');
            return;
        }

        try {
            setClickedOrders(prevClicked => [...prevClicked, orderId]); // Disable button immediately
            const response = await axios.delete(`https://ohecaa.azurewebsites.net/api/Orders/CancelOrder/${orderId}`);
            if (response.status === 200) {
                setOrders(prevOrders => prevOrders.map(order =>
                    order.id === orderId ? { ...order, status: 2 } : order
                ));
            } else {
                throw new Error('Failed to cancel order');
            }
        } catch (error) {
            console.error('Error canceling order:', error);
            setError(error.response?.data?.message || error.message);
        }
    };

    const filteredOrders = orders.filter(order => filterStatus === '' || order.status === parseInt(filterStatus));
    const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
    const currentOrders = filteredOrders.slice((currentPage - 1) * ordersPerPage, currentPage * ordersPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > totalPages || pageNumber < 1) {
            return;
        }
        setCurrentPage(pageNumber);
        if (pageNumber > pageRange[1]) {
            setPageRange([pageRange[0] + 10, pageRange[1] + 10]);
        } else if (pageNumber < pageRange[0]) {
            setPageRange([pageRange[0] - 10, pageRange[1] - 10]);
        }
    };

    const handleFilterChange = (e) => {
        const value = e.target.value;
        setFilterStatus(value);
        setCurrentPage(1); // Reset to the first page when filter changes
    };

    const pageNumbers = [];
    for (let i = pageRange[0]; i <= Math.min(pageRange[1], totalPages); i++) {
        pageNumbers.push(i);
    }

    useEffect(() => {
        console.log('Filter status:', filterStatus);
    }, [filterStatus]);

    return (
        <div className='w-5/6 mr-0 ml-auto min-h-screen bg-blue_6bccde pt-10 flex flex-col'>
            <div className='container mx-auto py-8 flex-grow flex flex-col justify-between'>
                <div className='flex justify-end mb-4'>
                    <select
                        value={filterStatus}
                        onChange={handleFilterChange}
                        className='p-2 border border-gray-300 rounded'
                    >
                        <option value=''>All Statuses</option>
                        <option value='0'>Chờ xác nhận</option>
                        <option value='1'>Đang vận chuyển</option>
                        <option value='2'>Đã hủy đơn</option>
                        <option value='3'>Hoàn Thành</option>
                    </select>
                </div>
                {loading ? (
                    <div className='h-full flex items-center justify-center absolute right-[20%] top-0'>
                        <p className='text-black font-mono text-center text-8xl'>Vui lòng chờ&nbsp;</p>
                        <span className='animate-bounce text-9xl font-bold'>.</span>
                        <span className='text-9xl font-bold animate-bounce [animation-delay:-0.15s]'>.</span>
                        <span className='[animation-delay:-0.3s] animate-bounce text-9xl font-bold'>.</span>
                    </div>
                ) : error ? (
                    <p className='text-red-500 text-center'>Error: {error}</p>
                ) : currentOrders && currentOrders.length > 0 ? (
                    <>
                        <div className='flex-grow'>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                {currentOrders.map(order => (
                                    <div key={order.id} className='bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105'>
                                        <div className='flex mb-4'>
                                            <img src={order.imageLink} alt={`Order ${order.id}`} className='w-24 h-24 rounded-lg object-cover mr-4' />
                                            <div className='text-black'>
                                                <p className='text-lg font-semibold mb-2'>Order ID: {order.id}</p>
                                                <p className='text-sm text-gray-600'><span className='font-bold'>Ngày tạo đơn:</span> {new Date(order.creationDate).toLocaleDateString()}</p>
                                                <p className='text-sm text-gray-600'><span className='font-bold'>Xác nhận đơn:</span> {order.isConfirm ? 'Yes' : 'No'}</p>
                                                <p className='text-sm text-gray-600'><span className='font-bold'>Trạng thái:</span> {order.status === 0 ? 'Chờ xác nhận' : order.status === 1 ? 'Đang vận chuyển' : order.status === 2 ? 'Đã hủy đơn' : 'Hoàn Thành'}</p>
                                                <p className='text-sm text-gray-600'><span className='font-bold'>Total Price:</span> ${order.totalPrice}</p>
                                                <div className='mt-4 space-x-2'>
                                                    <button
                                                        onClick={() => handleConfirmOrder(order.id)}
                                                        className={`px-4 py-2 rounded ${order.isConfirm || clickedOrders.includes(order.id) ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-gray-500 text-white'}`}
                                                        disabled={order.isConfirm || order.status === 2 || clickedOrders.includes(order.id)}
                                                    >
                                                        {order.isConfirm ? 'Confirmed' : 'Confirm'}
                                                    </button>
                                                    <button
                                                        onClick={() => handleCancelOrder(order.id)}
                                                        className={`px-4 py-2 rounded ${order.status === 0 && !order.isConfirm && !clickedOrders.includes(order.id) ? 'bg-red-500 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
                                                        disabled={order.status !== 0 || order.isConfirm || clickedOrders.includes(order.id)}
                                                    >
                                                        {order.status === 2 ? 'Cancelled Order' : 'Cancel Order'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-center mt-8'>
                            {pageRange[0] > 1 && (
                                <button
                                    onClick={() => handlePageChange(pageRange[0] - 1)}
                                    className='mx-1 px-3 py-1 rounded bg-white text-blue-500'
                                >
                                    &laquo; Prev
                                </button>
                            )}
                            {pageNumbers.map(number => (
                                <button
                                    key={number}
                                    onClick={() => handlePageChange(number)}
                                    className={`mx-1 px-3 py-1 rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                                >
                                    {number}
                                </button>
                            ))}
                            {pageRange[1] < totalPages && (
                                <button
                                    onClick={() => handlePageChange(pageRange[1] + 1)}
                                    className='mx-1 px-3 py-1 rounded bg-white text-blue-500'
                                >
                                    Next &raquo;
                                </button>
                            )}
                        </div>
                    </>
                ) : (
                    <p className='text-black text-center'>No orders found.</p>
                )}
            </div>
        </div>
    );
}

export default GetAllOrders;
