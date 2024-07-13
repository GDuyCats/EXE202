import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Header from '../components/Layout/Header/Header'
import Footer from '../components/Layout/Footer/Footer'
function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>


    )
}

export default MainLayout