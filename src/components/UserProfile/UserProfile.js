import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

function UserProfile() {
  const navigate = useNavigate();
  const { token, removeToken  } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [editedUserData, setEditedUserData] = useState({
  //   id: '',
  //   firstName: '',
  //   lastName: '',
  //   avatar: '',
  //   email: '',
  //   password: '',
  //   phone: '',
  //   gender: '',
  //   roleId: '',
  //   status: '',
  // });

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      if (token?.user?.id) {
        try {
          const response = await axios.get(`https://ohecaa.azurewebsites.net/api/User/GetAccountById/${token?.user?.id}`, {
            headers: {
              Authorization: `Bearer ${token?.accessToken}`,
            },
          });
          setUserData(response.data.data);
        } catch (error) {
          if (error.response && error.response.status === 401) {
            console.error('Unauthorized: Token may be expired or invalid', error);
            removeToken();
            navigate('/login');
          } else {
            console.error(error);
          }
        }
      }
    };
    fetchData();
  }, [token?.user?.id, token?.accessToken, removeToken, navigate]);

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  //   setEditedUserData({
  //     id: userData.id,
  //     firstName: userData.firstName,
  //     lastName: userData.lastName,
  //     avatar: userData.avatar,
  //     email: userData.email,
  //     password: userData.password, // Không thay đổi password
  //     phone: userData.phone,
  //     gender: userData.gender,
  //     roleId: userData.roleId, // Không thay đổi roleId
  //     status: userData.status, // Không thay đổi status
  //   });
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  // const handleUpdateUserProfile = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.put(`https://ohecaa.azurewebsites.net/api/User/UpdateUser/${token?.user?.id}`, editedUserData, {
  //       headers: {
  //         Authorization: `Bearer ${token?.accessToken}`,
  //         'Content-Type': 'application/json'
  //       },
  //     });
  //     console.log(response);
  //     setIsModalOpen(false);
  //     setUserData(response.data.data);
  //   } catch (error) {
  //     if (error.response && error.response.status === 401) {
  //       console.error('Unauthorized: Token may be expired or invalid', error);
  //       removeToken();
  //       navigate('/login');
  //     } else {
  //       console.error('Error updating user profile:', error.response ? error.response.data : error.message);
  //     }
  //   }
  // };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-full" style={{
        height: 100,
        background: 'linear-gradient(to right, #24b7cf, #18335c)'
      }}>
      </div>
      <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Hồ Sơ Của Tôi</h2>
        <p className="text-sm text-gray-500 mb-6">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>

        <div className="flex flex-col md:flex-row">
          <div className="flex-grow">
            <div className="mb-4">
              <label className="block text-gray-700">Tên</label>
              <p className="mt-1 p-2 border rounded w-full">{userData.firstName} {userData.lastName}</p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <div className="flex items-center">
                <p className="mt-1 p-2 border rounded w-full">{userData.email}</p>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Số điện thoại</label>
              <div className="flex items-center">
                <p className="mt-1 p-2 border rounded w-full">{userData.phone}</p>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Giới tính</label>
              <div className="flex items-center">
                <p className="mt-1 p-2 border rounded w-full">{userData.gender === 'Male' ? 'Nam' : userData.gender === 'Female' ? 'Nữ' : 'Khác'}</p>
              </div>
            </div>
            {/* <button className="mt-4 bg-blue_177f9f text-white py-2 px-4 rounded" onClick={handleOpenModal}>Thay Đổi</button> */}
            <button className="mt-4 bg-blue_177f9f text-white py-2 px-4 rounded">Thay Đổi</button>
          </div>

          <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
            <div className="border p-4 rounded">
              <img src={userData.avatar} alt="Avatar" className="w-[200px] h-[200px] rounded-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* <Modal
        isOpen={isModalOpen}
        style={customStyles}
        onRequestClose={handleCloseModal}
      >
        <h2 className="text-2xl font-semibold mb-4">Chỉnh sửa hồ sơ</h2>
        <form onSubmit={handleUpdateUserProfile}>
          <div className="mb-4">
            <label className="block text-gray-700">Tên</label>
            <input
              type="text"
              value={editedUserData.firstName}
              onChange={(e) => setEditedUserData({ ...editedUserData, firstName: e.target.value })}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Họ</label>
            <input
              type="text"
              value={editedUserData.lastName}
              onChange={(e) => setEditedUserData({ ...editedUserData, lastName: e.target.value })}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={editedUserData.email}
              onChange={(e) => setEditedUserData({ ...editedUserData, email: e.target.value })}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Số điện thoại</label>
            <input
              type="text"
              value={editedUserData.phone}
              onChange={(e) => setEditedUserData({ ...editedUserData, phone: e.target.value })}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Giới tính</label>
            <select
              value={editedUserData.gender}
              onChange={(e) => setEditedUserData({ ...editedUserData, gender: e.target.value })}
              className="mt-1 p-2 border rounded w-full"
            >
              <option value="Male">Nam</option>
              <option value="Female">Nữ</option>
              <option value="Other">Khác</option>
            </select>
          </div>

          <button type="submit" className="mt-4 bg-blue_177f9f text-white py-2 px-4 rounded">Lưu thay đổi</button>
        </form>
      </Modal> */}
    </>
  );
}

export default UserProfile;
