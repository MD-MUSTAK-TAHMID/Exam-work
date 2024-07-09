import React from 'react'
import girl from "../assets/girl.png"
import girl_1 from "../assets/girl_1.png"
import girl_2 from "../assets/girl_2.png"
import girl_3 from "../assets/girl_3.png"
import girl_4 from "../assets/girl_4.png"
import right from "../assets/right.png"
import right_2 from "../assets/right 2.png"
import left from "../assets/left.png"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import shere from "../assets/left.png"
import bookmark from "../assets/left.png"
import Container from "../components/Layer/Container"
import { CiHeart } from 'react-icons/ci'
import Slider from 'react-slick'
const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className='mt-10 '>
        <Container className="flex justify-between">
        <div className="one">
            
    {/* <Slider {...settings}>
            <img className='rounded-[17px] ' src={girl} alt="" />
            <img className='rounded-[17px] ' src={girl} alt="" />
            <img className='rounded-[17px] ' src={girl} alt="" />
            <img className='rounded-[17px] ' src={girl} alt="" />
    </Slider> */}
        <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
            {/* <div className="flex gap-5 items-center mt-[37px]">
            <img className='rounded-[17px]' src={right} alt="" />
            <img className='border-[3px] border-[#3A4980] rounded-[17px]' src={girl_1} alt="" />
            <img className='rounded-[17px]' src={girl_2} alt="" />
            <img className='rounded-[17px]' src={girl_3} alt="" />
            <img className='rounded-[17px]' src={girl_4} alt="" />
            <img className='rounded-[17px]' src={left} alt="" />
            </div>
            </div>
            <div className="two">
                <div className="top px-4 py-2 bg-[#EDF0F8] rounded-[12px] w-[]">
                    <ul className='flex gap-[14px] items-center'>
                        <li className='text-sm text-[#A3A9C2]'>Home</li>
                        <li><img src={right_2} alt="" /></li>
                        <li className='text-sm text-[#A3A9C2]'>Decoration</li>
                        <li><img src={right_2} alt="" /></li>
                        <li className='text-sm text-[#A3A9C2]'>Furniture</li>
                        <li><img src={right_2} alt="" /></li>
                        <li className='text-sm text-[#A3A9C2]'>Storage</li>
                        <li><img src={right_2} alt="" /></li>
                        <li className='text-sm text-[#3A4980] font-semibold'>Sideboard</li>
                    </ul>
                </div>
                <div className="mt-[30px] flex ">
                    <div>
                    <h1 className='font-semibold text-[28px] mb-1'>Embrace Sideboard</h1>
                    <p className='text-sm text-[#B9BBBF] '>Teixeira Design Studio</p>
                    </div>
                    <div className="">
                        <div className="bg-[#FFF0F0] px-[13px] py-[10px] flex gap-2 items-center rounded-[12px]">
                        <CiHeart className='text-[#D46F77]'/>
                        <p className='text-[#D46F77] font-semibold text-base'>109</p>
                        </div>
                    </div>
                </div> */}
        </div>
        </Container>
    </div>
  )
}

export default Banner