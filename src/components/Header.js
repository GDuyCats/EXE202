import {React, useEffect, useState} from 'react'
import { useLocation, NavLink, Link } from 'react-router-dom'
import logoImage from '../assets/Without slogan.png'
function Header() {
    const location = useLocation();
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
      }, [location]);
    return (

        <>

            <nav className="p-4 grid grid-cols-4 items-center z-50 bg-white sticky top-0 left-0 right-0 justify-between border-b-2 border-blue_177f9f">
                <div className='z-50 ml-2 mr-auto'><Link to="/"><img src={logoImage} alt="Logo" className="w-24 h-24" /></Link></div>
                <div className=" space-x-4 col-span-2 mx-auto">
                    <div className="space-x-4 hidden lg:flex ">
                        <div className='group '>
                            <Link to="/aboutus" className={"text-blue_177f9f px-3 py-2 text-lg font-medium border-b-4 border-b-transparent group-hover:border-b-blue_177f9f " + (url === "/aboutus" ? "bg-blue_c0foff rounded-full" : "")}>VỀ CHÚNG TÔI</Link>
                        </div>
                        <div className='group'>
                            <Link to="/shop" className={"text-blue_177f9f px-3 py-2 text-lg font-medium border-b-4 border-b-transparent group-hover:border-b-blue_177f9f " + (url === "/shop" ? "bg-blue_c0foff rounded-full" : "")}>MUA HÀNG</Link>
                        </div>
                        <div className='group'>
                            <Link to="/forum" className={"text-blue_177f9f px-3 py-2 text-lg font-medium border-b-4 border-b-transparent group-hover:border-b-blue_177f9f " + (url === "/forum" ? "bg-blue_c0foff rounded-full" : "")}>DIỄN ĐÀN</Link>
                        </div>
                        <div className='group'>
                            <Link to="/contact" className={"text-blue_177f9f px-3 py-2 text-lg font-medium border-b-4 border-b-transparent group-hover:border-b-blue_177f9f " + (url === "/contact" ? "bg-blue_c0foff rounded-full" : "")}>LIÊN HỆ</Link>
                        </div>
                    </div>
                </div>
                <div className='flex space-x-2 mr-0 ml-auto'>
                    <Link to="/signup" className="text-blue_177f9f px-8 py-2 text-lg font-medium border-2 border-blue_177f9f rounded-full hover:bg-blue_c0foff">ĐĂNG KÝ</Link>
                    <Link to="/login" className="text-blue_177f9f px-8 py-2 text-lg font-medium bg-blue_c0foff rounded-full hover:brightness-110">ĐĂNG NHẬP</Link>
                </div>
                {/* <div className="lg:hidden block">
                    <button className="text-black px-3 py-2 rounded-full text-lg font-medium hover:bg-blue_c0foff">MENU</button>
                </div> */}
            </nav>
        </>
    )
}

export default Header