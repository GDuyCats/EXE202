import { React, useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
function NavBarItems() {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
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
  )
}

export default NavBarItems