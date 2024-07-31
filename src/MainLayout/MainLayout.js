import React,{useEffect, useContext} from 'react'
import { Outlet, Link } from 'react-router-dom'
import Header from '../components/Layout/Header/Header'
import { AuthContext } from '../context/AuthContext'
import Footer from '../components/Layout/Footer/Footer'
function MainLayout() {
    const { token } = useContext(AuthContext);
    useEffect(() => {
        console.log(token)
    }, [token])
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>


    )
}

export default MainLayout