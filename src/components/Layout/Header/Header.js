import { React, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import SignInAndSignUpButton from './SignInAndSignUpButton';
import NavBarItems from './NavBarItems';
import LogoImg from './LogoImgNoSlogan';
import { AuthContext } from '../../../context/AuthContext'
import { IoIosArrowDropdownCircle, IoMdSettings } from 'react-icons/io';
import { IoLogOut } from 'react-icons/io5';
import { MdFeedback } from 'react-icons/md';
import { FaShoppingCart } from "react-icons/fa";
function Header() {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false)
    const toggleClicked = () => {
        setClicked(prevClicked => !prevClicked);
    };
    const { token, removeToken } = useContext(AuthContext);
    const handleLogout = () => {
        removeToken();
    };
    useEffect(() => {
        if (token?.user?.roleId === 2) {
            navigate('/dashboard')
        }
    }, [token])
    
    const handleNaviCart = () => {
        navigate('/cart');
    }
    return (
        <>
            <nav className="p-4 grid grid-cols-4 items-center z-50 bg-white sticky top-0 left-0 right-0 justify-between border-b-2 border-blue_177f9f">
                <LogoImg />
                <NavBarItems />
                {token ?
                    <div className='flex relative'>
                        <div className='cursor-pointer mr-5 ml-auto relative hover:brightness-110'
                            onClick={toggleClicked}>
                            <IoIosArrowDropdownCircle className='mr-0 ml-auto absolute right-1 bottom-1' size={20} />
                            <img src={token?.user?.avatar} alt='' className='w-[60px] h-[60px] rounded-full' />
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
                                    <p onClick={handleNaviCart} className='cursor-pointer ml-5 text-xl text-white font-medium mt-1'>Đơn Hàng</p>
                                </div>
                            </div>
                        )}
                    </div>
                    : (
                        <SignInAndSignUpButton />

                    )}

            </nav>

        </>
    )
}

export default Header
