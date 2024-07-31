import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useContext(AuthContext);
  const accessToken = token?.accessToken;

  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://ohecaa.azurewebsites.net/api/User/GetAccountList', {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          }
        });
        const filteredUsers = response.data.data.filter(user => user.roleId === 2);
        setUsers(filteredUsers);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: {error.message}</div>;
  }

  return (
    <div className="p-8 w-5/6 mr-0 ml-auto pt-10">
      <h1 className="text-2xl font-bold mb-4">Users with Role ID 2</h1>
      <ul className="space-y-4">
        {users.map(user => (
          <li key={user.id} className="flex items-center p-4 bg-white shadow rounded-lg">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src={user.avatar || 'https://via.placeholder.com/150'}
              alt={`${user.firstName} ${user.lastName}`}
            />
            <div>
              <div className="font-bold text-lg">{user.firstName} {user.lastName}</div>
              <div>Email: {user.email}</div>
              <div>Phone: {user.phone}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
