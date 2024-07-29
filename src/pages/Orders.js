import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { token, userID } = useContext(AuthContext);


  useEffect(() => {
      if (!token) {
          navigate('/login');
      }
  }, [token, navigate]);

  useEffect(() => {
    fetch(`https://ohecaa.azurewebsites.net/api/Orders/ViewAllOrderByUserID/${token?.user?.id}`)
      .then(response => response.json())
      .then(data => {
        setOrders(data.data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  const handleOrderClick = (order) => {
    if (order.status === 3) {
      navigate(`/orderdelivered/${order.id}`);
    } else {
      navigate(`/ordertracking/${order.id}`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Orders của người dùng</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Ngày đặt hàng</th>
              <th className="px-4 py-2">Tổng tiền</th>
              <th className="px-4 py-2">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} onClick={() => handleOrderClick(order)}>
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.orderDate}</td>
                <td className="px-4 py-2">{order.totalPrice}</td>
                <td className="px-4 py-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Orders;