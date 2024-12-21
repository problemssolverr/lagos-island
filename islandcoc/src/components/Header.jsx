import React from 'react'
import Navbar from './Navbar'
import bible from '../assets/bible-img.jpg'
import bread from '../assets/supper.jpg'
import give from '../assets/giving.jpg'
import pray from '../assets/pray-img.png'
import sing from '../assets/sing-img.png'

const Header = () => {
  return (
    <div
      className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative'
      style={{
        backgroundImage: "url('/bg_img.webp')",
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className='md:flex-col flex-col lg:flex-col md:w-full items-center justify-center mt-36'>
        <h1 className='text-center text-white font-bold text-4xl hover:animate-bounce'>
          Welcome To Church Of Christ, Lagos Island
        </h1>
        <h3 className='text-center text-white text-2xl mt-2 hover:animate-bounce'>
          The Churches Of Christ Salute You
        </h3>

        <div className='md:flex hidden gap-5 flex-wrap md:items-center md:justify-center md:gap-5 mt-12'>
          <div className='hover:transform hover:-translate-y-2 hover:shadow-lg transition duration-300 cursor-pointer'>
            <img className='w-[150px] h-[100px]' src={sing} alt="" />
            <h3 className='text-center text-white'>We Sing Melodiously <br /> (Eph.5:19)</h3>
          </div>
          <div className='hover:transform hover:-translate-y-2 hover:shadow-lg transition duration-300 cursor-pointer'>
            <img className='w-[150px] h-[100px]' src={bible} alt="" />
            <h3 className='text-center text-white'>We Study Scriptures <br /> (Col.3:16)</h3>
          </div>
          <div className='hover:transform hover:-translate-y-2 hover:shadow-lg transition duration-300 cursor-pointer'>
            <img className='w-[150px] h-[100px]' src={give} alt="" />
            <h3 className='text-center text-white'>We Share Things <br /> in Common (2Cor.9:6-7)</h3>
          </div>
          <div className='hover:transform hover:-translate-y-2 hover:shadow-lg transition duration-300 cursor-pointer'>
            <img className='w-[150px] h-[100px]' src={bread} alt="" />
            <h3 className='text-center text-white'>We Break Bread Every <br /> Sunday (Acts 20:7)</h3>
          </div>
          <div className='hover:transform hover:-translate-y-2 hover:shadow-lg transition duration-300 cursor-pointer'>
            <img className='w-[150px] h-[100px]' src={pray} alt="" />
            <h3 className='text-center text-white'>We Pray in One Accord <br /> (Eph.5:19)</h3>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header
