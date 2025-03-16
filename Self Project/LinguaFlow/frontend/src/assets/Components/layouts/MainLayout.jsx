import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Header/navbar'
import ContactUS from '../../Pages/Static_Pages/Contact'
import Footer from '../Footer/footer'

const MainLayout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <ContactUS />
      <Footer />
    </div>
  )
}

export default MainLayout