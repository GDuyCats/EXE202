import React, { useContext, useEffect, useState } from 'react'
import voucherImage from '../assets/voucher.jpg'
import CartItem from '../components/CartItem'
import { useItemStore } from '../utils/cart'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useGetAllShipCompany } from '../hooks/useGetAllShipCompany'
import { useGetAllVouchers } from '../hooks/useGetAllVouchers'
import { useGetAllPayments } from '../hooks/useGetAllPayments'
import { useCreatePayOS } from '../hooks/useCreatePayOS'
import { useCreateCheckOut } from '../hooks/useCreateCheckOut'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import Modal from 'react-modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
    },
};

function Transaction() {

    const navigate = useNavigate();
    const [selectedMethod, setSelectedMethod] = useState(null);
    const cartStore = useItemStore()
    const handleMethodSelect = (id) => {
        setSelectedMethod(id);
    };
    const location = useLocation();
    const { state } = location;
    const { selectedItems = [] } = state || {};
    const { totalPrice } = state || {};
    const [isActive, setIsActive] = useState(0);
    const [isActiveVoucher, setIsActiveVoucher] = useState(0);
    const handleShippingClick = (id) => {
        setIsActive(id);
    };
    const { data: shipData } = useGetAllShipCompany();
    const handleVoucherClick = (id) => {
        setIsActiveVoucher(id);
    };
    const { data: voucherData } = useGetAllVouchers();
    const sortedvoucherData = voucherData?.sort((a, b) => b.discount - a.discount);
    const [freightCost, setFreightCost] = useState(30000);
    const currentDate = new Date();
    const startDate = new Date(currentDate.getTime() + 5 * 24 * 60 * 60 * 1000); // add 5 days
    const endDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000); // add 7 days
    const startDateString = `${startDate.getDate()}/${startDate.getMonth() + 1}`;
    const endDateString = `${endDate.getDate()}/${endDate.getMonth() + 1}`;
    const minOrderValue = 100000;

    useEffect(() => {
        if (selectedItems.length === 0) {
            navigate('/');
        }
    }, [selectedItems, navigate]);

    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorQuantityModal, setShowErrorQuantityModal] = useState(false);
    const [errorQuantityMessage, setErrorQuantityMessage] = useState('');

    const handlePlaceOrder = async () => {
        if (!selectedAddressId) {
            setErrorMessage('Xin hãy chọn địa chỉ nhận hàng.');
            setShowErrorModal(true);
            return;
        }
        if (!isActive) {
            setErrorMessage('Xin hãy chọn đơn vị vận chuyển.');
            setShowErrorModal(true);
            return;
        }
        if (!selectedMethod) {
            setErrorMessage('Xin hãy chọn phương thức thanh toán.');
            setShowErrorModal(true);
            return;
        }
        const insufficientProducts = [];
        try {
            for (const item of selectedItems) {
                const response = await axios.get(`https://ohecaa.azurewebsites.net/api/Products/ViewProductByID/${item.id}`);
                if (response.data.success) {
                    const product = response.data.data;
                    if (product.quantity < item.count) {
                        insufficientProducts.push(product);
                    }
                } else {
                    console.error(response.data.message);
                }
            }
        } catch (error) {
            console.error('Error checking product quantity:', error);
            navigate('/paymentfailed');
            return;
        }

        if (insufficientProducts.length > 0) {
            const errorMessages = ['Không đủ số lượng các sản phẩm sau để trừ:'];
            insufficientProducts.forEach(product => {
                errorMessages.push(`${product.name}: Số lượng còn lại là ${product.quantity}`);
            });
            setErrorQuantityMessage(errorMessages);
            setShowErrorQuantityModal(true);
            return;
        }

        const checkOutData = {
            userId: cartStore.userID,
            freightCost: freightCost,
            paymentId: selectedMethod,
            addressToShipId: selectedAddressId,
            totalPrice: isActiveVoucher
                ? totalPrice + (freightCost - (freightCost * sortedvoucherData.find(v => v.id === isActiveVoucher).discount))
                : totalPrice + freightCost,
            ...(selectedItems.length > 0 && {
                carts: selectedItems.map(item => ({
                    productId: item.id,
                    quantity: item.count,
                })),
            }),
        };

        createCheckOut(checkOutData, {
            onSuccess(res) {
                updateProductQuantity(selectedItems);
                cartStore.checkoutItems();
                if (selectedMethod == 1) {
                    createPayOS({
                        userID: cartStore.userID,
                        orderId: res?.data?.id
                    }, {
                        onSuccess(data) {
                            window.location.href = data.url;
                        },
                        onError() {
                            navigate('/paymentfailed');
                        },
                    });
                } else {
                    console.log('OrderId:', res?.data?.id);
                    navigate(`/paymentsuccess?orderId=${res?.data?.id}`);
                }
                if (isActiveVoucher) {
                    updateVoucher(isActiveVoucher);
                }
            },
            onError() {
                navigate('/paymentfailed');
            }
        });
    };

    const updateProductQuantity = async (selectedItems) => {
        try {
            for (const item of selectedItems) {
                const response = await axios.get(`https://ohecaa.azurewebsites.net/api/Products/ViewProductByID/${item.id}`);
                if (response.data.success) {
                    const product = response.data.data;
                    await axios.put(`https://ohecaa.azurewebsites.net/api/Products/UpdateQuantity?id=${item.id}&quantity=${item.count}`, {
                        id: item.id,
                        quantity: product.quantitySold + item.count,
                    });
                } else {
                    console.error(response.data.message);
                }
            }
        } catch (error) {
            console.error('Error updating product quantity:', error);
        }
    };

    const updateVoucher = async (voucherId) => {
        try {
            const response = await axios.put(`https://ohecaa.azurewebsites.net/api/Vouchers/UpdateVoucher/${voucherId}`, {
                discount: sortedvoucherData.find(v => v.id === voucherId).discount,
                totalQuantityVoucher: sortedvoucherData.find(v => v.id === voucherId).totalQuantityVoucher - 1,
                usedQuanity: sortedvoucherData.find(v => v.id === voucherId).usedQuanity + 1,
            });
            if (response.data.success) {
                console.log('Voucher updated successfully');
            } else {
                console.error(response.data.message);
            }
        } catch (error) {
            console.error('Error updating voucher:', error);
        }
    };

    const { data: paymentData } = useGetAllPayments();

    const { mutate: createPayOS, isLoading: iscreatePayOSLoading } = useCreatePayOS();
    const { mutate: createCheckOut, isLoading: iscreateCheckOutLoading } = useCreateCheckOut();

    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const [addressData, setAddressData] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [showAddPopup, setShowAddPopup] = useState(false);
    const [newAddress, setNewAddress] = useState({
        province: '',
        district: '',
        ward: '',
        detailAddress: '',
        phone: '',
        customerName: ''
    });

    const { token, saveToken } = useContext(AuthContext);
    console.log(token)
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);
    // Fetch addresses by userId
    const fetchAddresses = async () => {
        try {
            const response = await axios.get(`https://ohecaa.azurewebsites.net/api/AddressToShips/SearchAddressToShipByUserId/${token?.user?.id}`);
            if (response.data.success) {
                const addressData = response.data.data;
                setAddressData(response.data.data);
                setAddressData(addressData);
                console.log(addressData);
                const ids = response.data.data.map(address => address.id);
                console.log('List of IDs:', ids);
            } else {
                console.error(response.data.message);
            }
        } catch (error) {
            console.error('Error fetching addresses:', error);
        }
    };

    // Fetch addresses when component mounts
    useEffect(() => {
        fetchAddresses(token?.user?.id);
    }, [token?.user?.id]);

    const handleSelectAddress = (address) => {
        setSelectedAddress(address);
        setSelectedAddressId(address.id);
        setShowPopup(false);
    };

    const handleAddAddress = async (e) => {
        e?.preventDefault(); // Prevent the default form submission behavior
        try {
            const response = await axios.post('https://ohecaa.azurewebsites.net/api/AddressToShips/CreateAddressToShip', newAddress, {
                headers: {
                    Authorization: `Bearer ${token?.accessToken}`, // Thêm token vào tiêu đề của yêu cầu
                },
            });
            if (response.data.success) {
                setNewAddress({
                    province: '',
                    district: '',
                    ward: '',
                    detailAddress: '',
                    phone: '',
                    customerName: '',
                });
                setShowAddPopup(false);
                fetchAddresses(token?.user?.id); // Refresh addresses after creation
                console.log(token?.accessToken);
            } else {
                console.error(response.data.message);
            }
        } catch (error) {
            console.error('Error creating address:', error);
        }
    };
    return (
        <>
            <Modal
                isOpen={showErrorModal}
                onRequestClose={() => setShowErrorModal(false)}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: '#fff',
                        padding: '20px',
                        border: 'none',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                    },
                }}
                contentLabel="Error Modal"
            >
                <div className="flex items-center justify-center">
                    <div className="w-fit px-5 flex items-center justify-center rounded-full mb-5" style={{
                        height: 30,
                        background: 'linear-gradient(to right, #24b7cf, #18335c)'
                    }}>
                        <h1 className="text-2xl text-white text-center">CHÚ Ý</h1>
                    </div>
                </div>
                <h2 className="font-semibold" style={{ marginBottom: '10px' }}>{errorMessage}</h2>
                <div className="w-auto flex items-center justify-center">
                    <button onClick={() => setShowErrorModal(false)} className="bg-blue_177f9f" style={{ padding: '10px 20px', color: '#fff', border: 'none', borderRadius: '5px' }}>
                        Đóng
                    </button>
                </div>
            </Modal>
            <Modal
                isOpen={showErrorQuantityModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: '#fff',
                        padding: '20px',
                        border: 'none',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                    },
                }}
                contentLabel="Error Quantity Modal"
            >
                <div className="flex items-center justify-center">
                    <div className="w-fit px-5 flex items-center justify-center rounded-full mb-5" style={{
                        height: 30,
                        background: 'linear-gradient(to right, #24b7cf, #18335c)'
                    }}>
                        <h1 className="text-2xl text-white text-center">CHÚ Ý</h1>
                    </div>
                </div>
                <div>
                    {Array.isArray(errorQuantityMessage) && errorQuantityMessage.map((message, index) => (
                        <p key={index} className="font-semibold" style={{ marginBottom: '10px' }}>
                            {message}
                        </p>
                    ))}
                </div>
                <div className="w-auto flex items-center justify-center">
                    <button onClick={() => {
                        setShowErrorModal(false);
                        navigate('/paymentfailed');
                    }} className="bg-blue_177f9f" style={{ padding: '10px 20px', color: '#fff', border: 'none', borderRadius: '5px' }}>
                        Đóng
                    </button>
                </div>
            </Modal>
            <div className="w-full" style={{
                height: 100,
                background: 'linear-gradient(to right, #24b7cf, #18335c)'
            }}>
                <div className="pt-6 ml-2">
                </div>
            </div>
            {/* ---------------------------------------------------------------------------------------- */}
            <div className=" w-full bg-gradient-to-br from-blue_tl to-blue_br py-1">
                <div className="bg-blue_bg_pd justify-center flex items-center mx-8 mt-8">
                    <div className="w-full">
                        <div className="w-full bg-blue_177f9f" style={{
                            height: 60
                        }}>
                            <div className="pt-4 ml-2 flex items-center">
                                <h4 className="text-white text-xl font-light">ĐỊA CHỈ NHẬN HÀNG</h4>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="bg-white container mx-10 my-7 p-10">
                                <h1 className='text-4xl text-blue_177f9f'>{selectedAddress?.customerName || 'Chưa có tên khách hàng'}</h1>
                                <div className="flex items-start">
                                    <p className="text-4xl mt-5 inline-flex">
                                        ĐỊA CHỈ NHẬN HÀNG: {selectedAddress ? `${selectedAddress.detailAddress}, ${selectedAddress.ward}, ${selectedAddress.district}, ${selectedAddress.province}` : 'Chưa có địa chỉ'}
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <p className="text-4xl mt-5 inline-flex">SỐ ĐIỆN THOẠI: {selectedAddress?.phone || 'Chưa có số điện thoại'}</p>
                                </div>
                                <button
                                    className="bg-blue_6bccde text-white flex items-center justify-center px-2 py-2 text-2xl font-normal mt-5"
                                    onClick={() => setShowPopup(true)}
                                >
                                    THAY ĐỔI
                                </button>

                                {showPopup && (
                                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                                        <div className="bg-white p-5 rounded-lg shadow-lg">
                                            <h2 className="text-2xl mb-4">Chọn địa chỉ</h2>
                                            <ul className="list-disc pl-5">
                                                {addressData.length > 0 ? (
                                                    addressData.map((address) => (
                                                        <li key={address.id} className="mb-2 cursor-pointer hover:bg-gray-200 p-2" onClick={() => handleSelectAddress(address)}>
                                                            {address.customerName} - {address.detailAddress}, {address.ward}, {address.district}, {address.province}. Phone: {address.phone}
                                                        </li>
                                                    ))
                                                ) : (
                                                    <p>Không tìm thấy địa chỉ nào.</p>
                                                )}
                                            </ul>
                                            <div className="flex w-full items-center justify-center">

                                                <button
                                                    className="bg-blue_177f9f text-white px-4 py-2 mt-4 rounded hover:bg-blue_cart"
                                                    onClick={() => setShowAddPopup(true)}
                                                >
                                                    Thêm địa chỉ
                                                </button>
                                                <button
                                                    className="bg-blue_buy text-white px-4 py-2 mt-4 ml-5 rounded hover:bg-blue_24b3cc"
                                                    onClick={() => setShowPopup(false)}
                                                >
                                                    Đóng
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                )}

                                {showAddPopup && (
                                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                                        <div className="bg-white p-5 rounded-lg shadow-lg w-1/2">
                                            <h2 className="text-2xl mb-4 text-center">Thêm địa chỉ mới</h2>
                                            <form onSubmit={(e) => { e.preventDefault(); handleAddAddress(); }}>
                                                <div className="flex flex-col">
                                                    <div className="mb-2">
                                                        <input
                                                            type="text"
                                                            placeholder="Tỉnh"
                                                            value={newAddress.province}
                                                            onChange={(e) => setNewAddress({ ...newAddress, province: e.target.value })}
                                                            className="p-2 border border-gray-300 rounded-md w-full"
                                                        />
                                                    </div>
                                                    <div className="mb-2">
                                                        <input
                                                            type="text"
                                                            placeholder="Quận / Huyện"
                                                            value={newAddress.district}
                                                            onChange={(e) => setNewAddress({ ...newAddress, district: e.target.value })}
                                                            className="p-2 border border-gray-300 rounded-md w-full"
                                                        />
                                                    </div>
                                                    <div className="mb-2">
                                                        <input
                                                            type="text"
                                                            placeholder="Phường / Xã"
                                                            value={newAddress.ward}
                                                            onChange={(e) => setNewAddress({ ...newAddress, ward: e.target.value })}
                                                            className="p-2 border border-gray-300 rounded-md w-full"
                                                        />
                                                    </div>
                                                    <div className="mb-2">
                                                        <input
                                                            type="text"
                                                            placeholder="Địa chỉ cụ thể"
                                                            value={newAddress.detailAddress}
                                                            onChange={(e) => setNewAddress({ ...newAddress, detailAddress: e.target.value })}
                                                            className="p-2 border border-gray-300 rounded-md w-full"
                                                        />
                                                    </div>
                                                    <div className="mb-2">
                                                        <input
                                                            type="text"
                                                            placeholder="Số Điện Thoại"
                                                            value={newAddress.phone}
                                                            onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                                                            className="p-2 border border-gray-300 rounded-md w-full"
                                                        />
                                                    </div>
                                                    <div className="mb-2">
                                                        <input
                                                            type="text"
                                                            placeholder="Tên Người Nhận"
                                                            value={newAddress.customerName}
                                                            onChange={(e) => setNewAddress({ ...newAddress, customerName: e.target.value })}
                                                            className="p-2 border border-gray-300 rounded-md w-full"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <button
                                                        type="submit"
                                                        className="bg-blue_177f9f text-white px-4 py-2 mt-4 rounded mx-1"
                                                    >
                                                        Thêm
                                                    </button>
                                                    <button
                                                        className="bg-blue_cart text-white px-4 py-2 mt-4 rounded mx-1"
                                                        onClick={() => setShowAddPopup(false)}
                                                    >
                                                        Hủy
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* _____________________________________________________________________________SẢN PHẨM____________________________________________________________ */}

                <div className="bg-blue_bg_pd justify-center flex items-center mx-8">
                    <div className="w-full">
                        <div className="w-full bg-blue_177f9f" style={{
                            height: 60
                        }}>
                            <div className="pt-4 ml-2 flex items-center">
                                <h4 className="text-white text-xl font-light">SẢN PHẨM</h4>
                            </div>
                        </div>
                        <div className="container w-full">
                            <div className="items-center justify-center w-full">
                                {selectedItems.map(item => (
                                    <CartItem key={item.id} item={item} isReadOnly={true} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* _____________________________________________________________________________VẬN CHUYỂN_____________________________________________________________ */}
                <div className="bg-blue_bg_pd justify-center flex items-center mx-8">
                    <div className="w-full">
                        <div className="w-full bg-blue_177f9f" style={{
                            height: 60
                        }}>
                            <div className="pt-4 ml-2 flex items-center">
                                <h4 className="text-white text-xl font-light">VẬN CHUYỂN</h4>
                            </div>
                        </div>
                        <div className="container w-full my-8">
                        </div>
                        <div className="flex flex-col overflow-y-auto h-96 py-5">
                            {shipData?.map(item => (
                                <div className="p-3">
                                    <div className={`flex  ${item.id === isActive ? 'border-blue_cart border-4' : ''}`}
                                        onClick={() => handleShippingClick(item.id)}
                                    >
                                        <div className="bg-blue_177f9f w-2">
                                        </div>
                                        <div className="bg-white w-full ">
                                            <div className="flex pt-2">
                                                <h1 className="text-blue_cart font-normal text-3xl ml-5">{item?.name}</h1>
                                                <h3 className="text-blue_0e4759 text-3xl mx-10">{freightCost?.toLocaleString().replace(',', '.')} VND</h3>
                                            </div>
                                            <div className="flex ml-5 py-5">
                                                <h3 className="text-blue_0e4759 text-xl">Nhận hàng vào</h3>
                                                <h3 className="text-blue_0e4759 text-xl">: {startDateString} - {endDateString}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* _____________________________________________________________________________ƯU ĐÃI - KHUYẾN MÃI_____________________________________________________________ */}
                <div className="bg-blue_bg_pd justify-center flex items-center mx-8">
                    <div className="w-full">
                        <div className="w-full bg-blue_177f9f" style={{
                            height: 60
                        }}>
                            <div className="pt-4 ml-2 flex items-center">
                                <h4 className="text-white text-xl font-light">ƯU ĐÃI - KHUYẾN MÃI</h4>
                            </div>
                        </div>
                        <div className="container w-full">
                            <div className="p-3">
                                <h3 className="text-2xl text-blue_177f9f py-3 px-3">Hãy chọn một mã khuyến mãi</h3>
                                <div className="flex flex-col overflow-y-auto h-96">
                                    {sortedvoucherData?.filter(itemVoucher => new Date(itemVoucher.endTime) >= new Date()).map(itemVoucher => (
                                        <div className="flex items-center justify-center w-full">
                                            <div
                                                className={`bg-white container mx-10 my-7 p-5 border-2 border-black flex ${itemVoucher.id === isActiveVoucher ? 'border-blue_cart border-4' : ''}`}
                                                onClick={() => totalPrice >= minOrderValue ? handleVoucherClick(itemVoucher.id) : null}
                                                style={{ opacity: totalPrice < minOrderValue ? 0.5 : 1, cursor: totalPrice < minOrderValue ? 'not-allowed' : 'pointer' }}
                                            >
                                                <img
                                                    src={voucherImage}
                                                    alt="voucher Image"
                                                    className="w-32 h-32 object-cover justify-center border-2 border-blue_cart"
                                                />
                                                <div className="w-full ml-4 justify-end">
                                                    <div className="flex justify-start">
                                                        <h1
                                                            className={`text-2xl mb-2 pt-2 ${totalPrice < minOrderValue ? 'text-gray-400' : 'text-blue_177f9f'} font-sans font-semibold`}
                                                        >
                                                            GIẢM GIÁ {itemVoucher.discount * 100}% PHÍ VẬN CHUYỂN VỚI ĐƠN HÀNG TỪ {minOrderValue.toLocaleString().replace(',', '.')} VND TRỞ LÊN
                                                        </h1>
                                                    </div>
                                                    <div className="flex text-lg">
                                                        <h2>HẠN SỬ DỤNG</h2>
                                                        <h2>: {new Date(itemVoucher.endTime).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}</h2>
                                                    </div>
                                                    <div className="flex text-lg mt-5">
                                                        <h2>SỐ LƯỢNG</h2>
                                                        <h2>: {itemVoucher.totalQuantityVoucher}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* _____________________________________________________________________________PHƯƠNG THỨC THANH TOÁN_____________________________________________________________ */}
                <div className="bg-blue_bg_pd justify-center flex items-center mx-8 mb-5">
                    <div className="w-full">
                        <div className="w-full bg-blue_177f9f" style={{
                            height: 60
                        }}>
                            <div className="pt-4 ml-2 flex items-center">
                                <h4 className="text-white text-xl font-light">PHƯƠNG THỨC THANH TOÁN</h4>
                            </div>
                        </div>
                        <div className="container w-full">
                            <div className="flex mx-10 mt-5">
                                {paymentData?.map(itemPayment => (
                                    <div
                                        className={`cursor-pointer px-6 py-3 mr-3 border border-gray-400 font-font-normal text-lg ${itemPayment.id === selectedMethod
                                            ? 'bg-blue_buy text-white border-none'
                                            : 'bg-white text-black'
                                            }`}
                                        onClick={() => handleMethodSelect(itemPayment.id)}
                                    >
                                        {itemPayment.method}
                                    </div>
                                ))}
                            </div>
                            <div className="mx-3 flex">
                                <div className="bg-white container mx-10 my-7 p-5">
                                    <div className="flex w-full justify-between my-8">
                                        <h3 className="font-normal text-2xl text-black">
                                            Tổng tiền hàng:
                                        </h3>
                                        <h3 className="font-normal text-2xl text-black">
                                            {totalPrice?.toLocaleString().replace(',', '.')} VND
                                        </h3>
                                    </div>
                                    <div className="flex w-full justify-between my-8">
                                        <h3 className="font-normal text-2xl text-black">
                                            Phí vận chuyển:
                                        </h3>
                                        {isActiveVoucher ? (
                                            <h3 className="font-normal text-2xl text-black">
                                                {(freightCost - (freightCost * sortedvoucherData.find(v => v.id === isActiveVoucher).discount))?.toLocaleString().replace(',', '.')} VND
                                            </h3>
                                        ) : (
                                            <h3 className="font-normal text-2xl text-black">
                                                {freightCost?.toLocaleString().replace(',', '.')} VND
                                            </h3>
                                        )}
                                    </div>
                                    <div className="flex w-full justify-between my-8">
                                        <h3 className="font-normal text-2xl text-black">
                                            Tổng thanh toán:
                                        </h3>
                                        <h3 className="font-normal text-4xl text-blue_cart">
                                            {isActiveVoucher ? (
                                                (totalPrice + (freightCost - (freightCost * sortedvoucherData.find(v => v.id === isActiveVoucher).discount)))?.toLocaleString().replace(',', '.')
                                            ) : (
                                                (totalPrice + freightCost)?.toLocaleString().replace(',', '.')
                                            )} VND
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center mb-5">
                                <div className="w-fit flex justify-center items-center" style={{
                                    height: 85,
                                    background: 'linear-gradient(to right, #24b7cf, #18335c)'
                                }}>
                                    <button className="text-4xl text-white px-40 -inset-y-px" onClick={() => handlePlaceOrder()} disabled={iscreatePayOSLoading || iscreateCheckOutLoading}>
                                        ĐẶT HÀNG
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Transaction
