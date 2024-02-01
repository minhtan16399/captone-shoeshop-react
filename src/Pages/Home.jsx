import React from 'react'
import { Outlet } from 'react-router'
import ShoeStores from '../utils/ShoeStores'

const Home = () => {
    return (
        <div id='homePage'>
            <Outlet />
            <ShoeStores />
        </div>
    )
}

export default Home