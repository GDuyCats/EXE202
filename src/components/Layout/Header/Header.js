import { React, useContext, useState } from 'react'
import SignInAndSignUpButton from './SignInAndSignUpButton';
import NavBarItems from './NavBarItems';
import LogoImg from './LogoImgNoSlogan';
import { AuthContext } from '../../../context/AuthContext'
function Header() {
    const [clicked, setClicked] = useState(false)

    const toggleClicked = () => {
        setClicked(prevClicked => !prevClicked);
    };

    const { token, user, removeToken } = useContext(AuthContext);
    const handleLogout = () => {
        removeToken();
    };
    return (
        <>
            <nav className="p-4 grid grid-cols-4 items-center z-50 bg-white sticky top-0 left-0 right-0 justify-between border-b-2 border-blue_177f9f">
                <LogoImg />
                <NavBarItems />
                {token ? (
                    <div className='flex relative'>
                        <p className='text-xl cursor-pointer absolute right-5 -bottom-3 brightness-100 hover:text-red-950'
                            onClick={toggleClicked}>
                            Xin chào <span>{user.email}</span>
                        </p>
                        {clicked && (
                            <div className='absolute right-0 mt-2 bg-white p-2 rounded shadow transition-all duration-2000 ease-in-out'>
                                <button onClick={handleLogout} className='mr-5 ml-auto'>Logout</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <SignInAndSignUpButton />
                )}
            </nav>
        </>
    )
}

export default Header
