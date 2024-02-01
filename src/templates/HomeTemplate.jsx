import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ModalFade from '../components/ModalFade'

const HomeTemplate = () => {
    return (
        <div>
            <Header />
            <ModalFade />
            <Navbar />
            <div className='view-height'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default HomeTemplate