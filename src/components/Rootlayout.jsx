import React from 'react'
import Navber from './Navber'
import { Outlet } from 'react-router'
import Footer from './Footer'

const Rootlayout = () => {
  return (
    <div>
        <Navber/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Rootlayout