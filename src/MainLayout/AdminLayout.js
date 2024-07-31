import React from 'react'
import AdminHeader from '../components/Layout/DashboardHeader/DashboardHeader'
import DashBoardNav from '../pages/Admin/DashBoardNav';

import { Outlet } from 'react-router-dom'
function DashBoard() {

  return (
    <>
      <AdminHeader/>
      <Outlet/>
      <DashBoardNav />
    </>
  )
}

export default DashBoard
