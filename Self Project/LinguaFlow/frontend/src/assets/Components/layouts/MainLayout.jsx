import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Header/navbar'
import Footer from '../Footer/footer'

const MainLayout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout