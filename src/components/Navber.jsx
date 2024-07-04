import React from 'react'
import Container from './Layer/Container'
import logo from "../assets/logo.png"
import cart from "../assets/Cart.png"
import profile from "../assets/profile.png"
import { Link } from 'react-router-dom'
const Navber = () => {
  return (
    <div className='py-5 bg-[#F4F4F4] border-b border-[#EDEDED]'>
        <Container className="flex justify-between items-center">
            <div className="flex gap-[60px]">
            <div className="logo">
                <Link><img src={logo} alt="" /></Link>
            </div>
            <div className="menu">
                <ul className='flex gap-[50px]'>
                    <li>
                        <Link className='font-normal text-base text-[#1D364D]'>Category</Link>
                    </li>
                    <li>
                        <Link className='font-normal text-base text-[#1D364D]'>Brand</Link>
                    </li>
                    <li>
                        <Link className='font-normal text-base text-[#1D364D]'>Contact</Link>
                    </li>
                    <li>
                        <Link className='font-normal text-base text-[#1D364D]'>FAQ’s</Link>
                    </li>
                </ul>
            </div>
            </div>
            <div className="icons flex gap-[15px] items-center">
                <img src={cart} alt="" />
                <img src={profile} alt="" />
                <div className="text">
                    <h6 className='font-normal text-xs text-[#C0C3C6] mb-1'>Good Morning!</h6>
                    <h4 className='font-semibold text-base text-[#1D364D]'>Scarlet Johnson</h4>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navber