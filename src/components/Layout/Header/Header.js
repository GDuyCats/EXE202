import { IoIosArrowDropdownCircle, IoMdSettings } from 'react-icons/io';
import React, { useContext, useEffect, useState } from 'react';
import SignInAndSignUpButton from './SignInAndSignUpButton';
import { AuthContext } from '../../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { MdFeedback } from 'react-icons/md';
import { IoLogOut } from 'react-icons/io5';
import { CgProfile } from "react-icons/cg";
import NavBarItems from './NavBarItems';
import DefaultProfilePicture from '../../../assets/profile-default-icon-2048x2045-u3j7s5nj.png'
import LogoImg from './LogoImgNoSlogan';

function Header() {
    const navigate = useNavigate();
    const { token, removeToken } = useContext(AuthContext);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [clicked, setClicked] = useState(false);

    const toggleClicked = () => {
        setClicked(prevClicked => !prevClicked);
    };

    const handleLogout = () => {
        removeToken();
        setIsAuthenticated(false);
        navigate('/');  // Navigate to home page after logout
    };

    useEffect(() => {
        console.log("Token in effect:", token); // Debugging line
        setIsAuthenticated(!!token);
        if (token && token.user && token.user.roleId === 2) {
            navigate('/admin');
        }
    }, [token, navigate]);

    const handleNaviCart = () => {
        navigate('/cart');
    }
    const handleNaviOrders = () => {
        navigate('/orders');
    }


    return (
        <nav className="p-4 grid grid-cols-4 items-center z-50 bg-white sticky top-0 left-0 right-0 justify-between border-b-2 border-blue_177f9f">
            <LogoImg />
            <NavBarItems />
            {isAuthenticated ? (
                <div className='flex relative'>
                    <div className='cursor-pointer mr-5 ml-auto relative hover:brightness-110' onClick={toggleClicked}>
                        <IoIosArrowDropdownCircle className='mr-0 ml-auto absolute right-0 bottom-0 bg-white w-[20px] h-[20px] rounded-full' size={20} />
                        {token?.user?.avatar ? (
                            <img src={token.user.avatar} alt='avatar' className='w-[60px] h-[60px] rounded-full object-cover' />
                        ) : (
                            <div className='w-[60px] h-[60px] rounded-full'>
                                <img src={DefaultProfilePicture} />
                            </div>
                        )}
                    </div>
                    {clicked && (
                        <div className='absolute right-5 top-16 bg-gray-800 p-2 rounded-2xl shadow w-[300px]'>
                            <div className='flex m-5'>
                                <div className='bg-gray-700 rounded-full p-1'><IoMdSettings size={30} className='text-white' /></div>
                                <p className='cursor-pointer ml-5 text-xl text-white font-medium mt-1'><Link to='/profile'>Cập nhật thông tin</Link></p>
                            </div>
                            <div className='flex m-5'>
                                <div className='bg-gray-700 rounded-full p-1'><IoLogOut size={30} className='text-white' /></div>
                                <p onClick={handleLogout} className='cursor-pointer ml-5 text-xl text-white font-medium mt-1'>Đăng xuất</p>
                            </div>
                            <div className='flex m-5'>
                                <div className='bg-gray-700 rounded-full p-1'><MdFeedback size={30} className='text-white' /></div>
                                <p className='cursor-pointer ml-5 text-xl text-white font-medium mt-1'>Phản hồi</p>
                            </div>
                            <div className='flex m-5'>
                                <div className='bg-gray-700 rounded-full p-1'><FaShoppingCart size={30} className='text-white' /></div>
                                <p onClick={handleNaviCart} className='cursor-pointer ml-5 text-xl text-white font-medium mt-1'>Giỏ Hàng</p>
                            </div>
                            <div className='flex m-5'>
                                <div className='bg-gray-700 rounded-full p-1'><FaShoppingCart size={30} className='text-white' /></div>
                                <p onClick={handleNaviOrders} className='cursor-pointer ml-5 text-xl text-white font-medium mt-1'>Đơn Mua</p>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <SignInAndSignUpButton />
            )}
        </nav>
    );
}

export default Header;
