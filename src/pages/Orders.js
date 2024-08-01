import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Tabs = [
  { label: 'CHỜ XÁC NHẬN', isConfirm: 0, status: 0 },
  { label: 'ĐANG GIAO', isConfirm: 1, status: 1 },
  { label: 'ĐÃ GIAO', isConfirm: 1, status: 3 },
  { label: 'ĐÃ HỦY', status: 2 },
];

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`https://ohecaa.azurewebsites.net/api/Orders/ViewAllOrderByUserID/${token?.user?.id}`);
        setOrders(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  const handleOrderClick = (order) => {
    if (order.status === 3) {
      navigate(`/orderdelivered/${order.id}`);
    } else {
      navigate(`/ordertracking/${order.id}`);
    }
  };

  const handleConfirmOrder = async (orderId) => {
    try {
      await axios.put(`https://ohecaa.azurewebsites.net/api/Orders/ReceivedOrder/${orderId}`);
      setOrders(orders.map(order => order.id === orderId ? { ...order, status: 3 } : order));
    } catch (error) {
      console.error('Error confirming order:', error);
    }
  };

  const filterOrders = (tab) => {
    if (tab.isConfirm !== undefined) {
      return orders.filter(order => order.isConfirm === tab.isConfirm && order.status === tab.status);
    }
    return orders.filter(order => order.status === tab.status);
  };

  if (loading) return (
    <div className='h-screen w-screen bg-blue_a2dde8 flex items-center justify-center'>
      <p className='text-9xl font-bold '>Loading</p>
      <span className='animate-bounce text-9xl font-bold'>.</span>
      <span className='text-9xl font-bold animate-bounce [animation-delay:-0.15s]'>.</span>
      <span className='[animation-delay:-0.3s] animate-bounce text-9xl font-bold'>.</span>
    </div>
  );

  return (
    <>
      <div className="w-full" style={{
        height: 100,
        background: 'linear-gradient(to right, #24b7cf, #18335c)'
      }}>
      </div>

      <div className="container mx-auto p-4 min-h-screen w-full bg-gradient-to-br from-blue_tl to-blue_br py-1">
        <div className="bg-blue_eefcff justify-center mx-8 my-8 pb-3">
          <h1 className="text-5xl text-blue_cart text-center my-5 pt-5">ĐƠN MUA</h1>
          <div className="bg-white mx-5 h-fit my-5">
            <div className="flex justify-around bg-blue_177f9f text-white h-14">
              {Tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 ${selectedTab === index ? 'bg-blue_24b3cc' : 'bg-blue_177f9f'}`}
                  onClick={() => setSelectedTab(index)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="pb-4">
                {filterOrders(Tabs[selectedTab]).map(order => (
                  <div key={order.id} className="border p-4 mx-3 my-4 cursor-pointer" onClick={() => handleOrderClick(order)}>
                    <div className="flex items-center">
                      <div className="flex-1">
                        <img
                          src={order?.imageLink}
                          alt="Product Image"
                          className="w-fit my-auto h-32 object-fill justify-center border-2 border-blue_cart"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">Ngày đặt hàng: {new Date(order?.creationDate).toLocaleDateString()}</h3>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="flex">
                          <p className="font-semibold text-2xl ">Thành tiền </p>
                          <p className="font-semibold text-2xl text-blue_073d4d">: {order.totalPrice.toLocaleString().replace(',', '.')} VND</p>
                        </div>
                      </div>
                      <div className="flex-1 text-right">
                        {selectedTab === 1 && order.status === 1 ? (
                          <button
                            className="bg-white border-2 border-blue_24b3cc text-blue_24b3cc px-4 py-2 hover:bg-blue_24b3cc hover:border-white hover:text-white"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleConfirmOrder(order.id);
                            }}
                          >
                            Đã nhận được hàng / Xác nhận
                          </button>
                        ) : (
                          <button className="bg-blue_24b3cc text-white px-4 py-2">CHI TIẾT ĐƠN HÀNG</button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

    </>
  );
}

export default Orders;
