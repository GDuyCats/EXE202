import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { deleteProduct } from './ProductService';
import CreateProductModal from './CreateProductModal';
function Product() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingProduct, setEditingProduct] = useState(null);

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        axios.get('https://ohecaa.azurewebsites.net/api/Products/ViewAllProduct?pageIndex=1&pageSize=10')
            .then(response => {
                console.log('API Response:', response.data); // Log the API response
                const { data } = response.data; // Extract the data property from response.data
                if (Array.isArray(data)) {
                    setProducts(data); // Ensure response data is an array
                } else {
                    console.error('Unexpected response format:', response.data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the products:', error);
                setLoading(false);
            });
    }, []);

    const handleUpdateClick = (product) => {
        setEditingProduct(product);
    };

    const handleUpdateChange = (e) => {
        const { name, value } = e.target;
        setEditingProduct(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const createNewProduct = () => {

    }

    const saveUpdatedProduct = () => {
        axios.put(`https://ohecaa.azurewebsites.net/api/Products/UpdateProduct?id=${editingProduct.id}`, editingProduct)
            .then(response => {
                console.log('Update Response:', response.data);
                setProducts(products.map(product => product.id === editingProduct.id ? editingProduct : product));
                setEditingProduct(null);
            })
            .catch(error => {
                console.error('Error updating the product:', error);
            });
    };

    const handleDeleteProduct = (productId) => {
        deleteProduct(productId, products, setProducts);
    };

    const convertToPercentage = (value) => {
        return `${value * 100}%`;
    };

    const tableheadcss = "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider";
    const tablebodycss = "px-6 py-4 whitespace-nowrap text-center";

    return (
        <div className='w-5/6 mr-0 ml-auto pt-28'>
            <div className='pl-5'>
                <p className='font-bold text-2xl text-blue_073d4d'>DANH MỤC SẢN PHẨM</p>
                <div className='flex mt-10'>
                    <p className='mr-10 text-2xl font-bold mt-2'>Bộ Lọc :</p>
                    <select className='font-semibold text-2xl bg-blue_a2dde8'>
                        <option className='font-semibold text-2xl'>Danh mục</option>
                        <option className='font-semibold text-2xl'>Thương hiệu</option>
                        <option className='font-semibold text-2xl'>Nơi bán</option>
                    </select>
                    <button onClick={openModal} className='p-y-2 px-5 rounded-full bg-blue_a2dde8 text-center justify-center ml-5 hover:bg-blue_177f9f transform hover:scale-110 hover:text-white'>Tạo mới 1 sản phẩm</button>
                </div>
            </div>

            <div className='pl-5 mt-10'>
                {loading ? (
                    <p>Loading products...</p>
                ) : (
                    <table className='min-w-full divide-y divide-gray-200'>
                        <thead>
                            <tr>
                                <th className={tableheadcss}>ID</th>
                                <th className={tableheadcss}>Ảnh sản phẩm</th>
                                <th className={tableheadcss}>Tên sản phẩm</th>
                                <th className={tableheadcss}>Danh mục</th>
                                <th className={tableheadcss}>Giá tiền</th>
                                <th className={tableheadcss}>Giá tiền sau giảm giá</th>
                                <th className={tableheadcss}>Giảm Giá</th>
                                <th className={tableheadcss}>Quản Lý</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td className={tablebodycss}>{product?.id}</td>
                                    <td className={tablebodycss}><img src={product?.imageLink} alt={product?.name} className='w-[50px] h-[50px]' /></td>
                                    <td className={tablebodycss}>{product?.name}</td>
                                    <td className={tablebodycss}>Danh mục</td>
                                    <td className={tablebodycss}>{product?.unitPrice}</td>
                                    <td className={tablebodycss}>{product?.priceSold}</td>
                                    <td className={tablebodycss}>{convertToPercentage(product?.discountPercent)}</td>
                                    <td className={tablebodycss}>
                                        <button onClick={() => handleDeleteProduct(product?.id)} className='bg-red-500 text-white px-5 py-2 rounded-full'>Xóa</button>
                                        <button onClick={() => handleUpdateClick(product)} className='bg-blue-500 text-white px-5 py-2 rounded-full ml-4'>Cập nhật</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {editingProduct && (
                <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full mx-auto'>
                    <div className='relative top-1/4 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white'>
                        <h2 className='text-2xl mb-4'>Cập nhật sản phẩm</h2>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700'>Tên sản phẩm</label>
                            <input
                                type='text'
                                name='name'
                                value={editingProduct.name}
                                onChange={handleUpdateChange}
                                className='mt-1 p-2 border w-full'
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700'>Giá tiền</label>
                            <input
                                type='number'
                                name='unitPrice'
                                value={editingProduct.unitPrice}
                                onChange={handleUpdateChange}
                                className='mt-1 p-2 border w-full'
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700'>Giá tiền sau giảm giá</label>
                            <input
                                type='number'
                                name='priceSold'
                                value={editingProduct.priceSold}
                                onChange={handleUpdateChange}
                                className='mt-1 p-2 border w-full'
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700'>Giảm Giá</label>
                            <input
                                type='number'
                                name='discountPercent'
                                value={editingProduct.discountPercent}
                                onChange={handleUpdateChange}
                                className='mt-1 p-2 border w-full'
                            />
                        </div>
                        <div className='flex justify-end'>
                            <button
                                onClick={() => setEditingProduct(null)}
                                className='bg-gray-500 text-white px-5 py-2 rounded-full mr-2'
                            >
                                Hủy
                            </button>
                            <button
                                onClick={saveUpdatedProduct}
                                className='bg-blue-500 text-white px-5 py-2 rounded-full'
                            >
                                Lưu
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {modalOpen && (
                <CreateProductModal setProducts={setProducts}/>
            )}
        </div>
    );
}

export default Product;

