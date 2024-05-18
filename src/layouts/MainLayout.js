import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
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