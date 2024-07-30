import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Tabs = [
  { label: 'CHỜ XÁC NHẬN', status: 0 },
  { label: 'ĐÃ XÁC NHẬN', status: 1 },
  { label: 'ĐÃ GIAO', status: 3 },
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

  const filterOrders = (status) => {
    return orders.filter(order => order.status === status);
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
                {filterOrders(Tabs[selectedTab].status).map(order => (
                  <div key={order.id} className="border p-4 mx-3 my-4 cursor-pointer" onClick={() => handleOrderClick(order)}>
                    <div className="flex items-center">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">Ngày đặt hàng: 29/07/2024</h3>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="flex">
                          <p className="font-semibold text-2xl ">Thành tiền </p>
                          <p className="font-semibold text-2xl text-blue_073d4d">: {order.totalPrice.toLocaleString().replace(',', '.')} VND</p>
                        </div>
                      </div>
                      <div className="flex-1 text-right">
                        <button className="bg-blue_24b3cc text-white px-4 py-2">CHI TIẾT ĐƠN HÀNG</button>
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
