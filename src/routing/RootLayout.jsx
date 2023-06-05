import React from 'react'
import { Outlet } from 'react-router-dom'
import AppNavbar from '../components/AppNavbar'

function RootLayout() {
  return (
    <div>
        <AppNavbar/>
        <Outlet />
    </div>
  )
}

export default RootLayout