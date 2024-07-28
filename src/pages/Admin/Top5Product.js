import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Top5Product() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://ohecaa.azurewebsites.net/api/Dashboards/Top5Products');
                if (response.data && Array.isArray(response.data.data)) {
                    setProducts(response.data.data);
                } else {
                    console.error('Unexpected response format:', response.data);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching the top 5 products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='flex'>
                <p className='text-blue_177f9f font-bold text-xl'>Tính Theo: </p>
                <select className='ml-2'>
                    <option value="">Tháng</option>
                    <option value="">Năm</option>
                    <option value="">Ngày</option>
                </select>
            </div>
            <div>
                <table className="min-w-full divide-y divide-gray-200 mt-5">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quốc Gia</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nhà Phân Phối</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá sản phẩm</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.country || 'N/A'}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.brandName || 'N/A'}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.unitPrice} VND</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Top5Product;
