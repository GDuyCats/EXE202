import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import React, { useEffect, useState, useContext } from 'react';

function GetAllShipCompany({ refresh, setRefresh }) {
  const { token, removeToken } = useContext(AuthContext);
  const [companys, setCompanys] = useState([]);
  const [filteredCompanys, setFilteredCompanys] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [updateCompanyId, setUpdateCompanyId] = useState(null);
  const [newName, setNewName] = useState('');
  const accessToken = token?.accessToken;

  useEffect(() => {
    axios
      .get('https://ohecaa.azurewebsites.net/api/ShipCompanys/ViewAllShipCompanys', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      })
      .then(response => {
        const { data } = response.data;
        if (Array.isArray(data)) {
          setCompanys(data);
          setFilteredCompanys(data);
        } else {
          console.error('error');
          setCompanys([]);
          setFilteredCompanys([]);
        }
      })
      .catch(error => {
        console.log(error);
      });
    setRefresh(false);
  }, [refresh]);

  const handleDelete = async (id) => {
    try {
      console.log(`Attempting to delete company with id: ${id}`);
      const response = await axios.delete(`https://ohecaa.azurewebsites.net/api/ShipCompanys/DeletedShipCompany/${id}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      console.log('Delete response:', response);
      if (response.data.success) {
        console.log('Successfully deleted');
        setRefresh(true);
      } else {
        console.error('Failed to delete:', response.data.message);
      }
    } catch (error) {
      console.error('Error during delete request:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const data = { name: newName };
      const response = await axios.put(`https://ohecaa.azurewebsites.net/api/ShipCompanys/UpdateShipCompany/${id}`, data, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.data.success) {
        setUpdateCompanyId(null);
        setNewName('');
        setRefresh(true);
      } else {
        console.error('Failed to update');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      setFilteredCompanys(companys.filter(company => company.name.toLowerCase().includes(query)));
    } else {
      setFilteredCompanys(companys);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Tìm kiếm công ty"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 text-center">ID</th>
            <th className="py-2 text-center">Name</th>
            <th className="py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCompanys.map(company => (
            <tr key={company.id} className="bg-gray-100">
              <td className="border px-2 py-2 text-center">{company.id}</td>
              <td className="border px-2 py-2 text-center">
                {updateCompanyId === company.id ? (
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Nhập tên mới vào đây"
                    className="border p-1 text-center"
                  />
                ) : (
                  <span>{company.name}</span>
                )}
              </td>
              <td className="border py-2 text-center">
                {updateCompanyId === company.id ? (
                  <div>
                    <button
                      onClick={() => handleUpdate(company.id)}
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setUpdateCompanyId(null)}
                      className="bg-gray-500 text-white px-2 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => setUpdateCompanyId(company.id)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(company.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetAllShipCompany;
