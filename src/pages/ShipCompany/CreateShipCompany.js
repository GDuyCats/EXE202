import axios from 'axios';
import React, { useState } from 'react';

function CreateShipCompany({ onCreateSuccess }) {
    const [Name, setName] = useState('');
    const [success, setSuccess] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                name: Name
            };
            const response = await axios.post('https://ohecaa.azurewebsites.net/api/ShipCompanys/CreateShipCompany', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.data.success) {
                onCreateSuccess()
                setName('')
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='max-w-lg p-6 bg-blue_6bccde rounded-lg shadow-md ml-11 mr-auto'>
            <div className='text-white text-3xl font-bold mb-6 text-center'>Tạo mới 1 công ty ship</div>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <input
                    type='text'
                    placeholder='Tên công ty'
                    onChange={(e) => setName(e.target.value)}
                    value={Name}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                />
                <button
                    type='submit'
                    className='w-full bg-blue_177f9f text-white py-2 rounded-lg hover:bg-blue_073d4d focus:outline-none focus:ring-2 focus:ring-blue-400'
                >
                    Tạo
                </button>
            </form>
            {success && <p className='mt-4 text-green-500 text-center'>Bạn đã tạo mới 1 công ty ship thành công</p>}
        </div>
    )
}

export default CreateShipCompany
