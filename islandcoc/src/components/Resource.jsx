import React from 'react'
import cross from '../assets/cross.png'
import pray from '../assets/pray.png'
import movie from '../assets/movie-img.png'

const Resource = () => {
  return (
    <div>
      <h1 className='text-center text-red-800 font-semibold my-5'>OUR RESOURCE</h1>
      <h1 className='text-center text-[#03045e] text-3xl font-bold'>How Can We Serve You?</h1>
      <div className='block md:flex lg:flex items-center justify-between w-[80%] mx-auto m-10 gap-5'>
        <div className='bg-[#03045e] h-[50vh] rounded-xl'>
          <span className='flex md:flex lg:flex items-center justify-around gap-5 md:w-[70%] mx-auto'>
            <img src={movie} className='w-12 h-9 mt-7 cursor-pointer'  alt="" />
            <h1 className='text-white mt-7'>Watch Sermons & Services</h1>
          </span>
          <span className='items-center justify-between gap-5 w-[70%] mx-auto'>
          <h2 className='text-start text-white my-5 w-[150px] ml-8 md:mx-auto'>Hear God's Word Delivered by God's Ministers</h2>
          <button className='bg-red-800 text-white rounded-full px-3 text-center justify-center cursor-pointer py-2 mx-auto ml-7 hover:bg-blue-500'>See Messages</button>
          </span>
        </div>
        <div className='bg-red-800 h-[50vh] md:w-[27%] rounded-xl'>
          <span className='flex md:flex lg:flex items-center justify-around md:w-[70%] mx-auto mt-5'>
            <img src={cross} className='h-[70px]' alt="" />
            <h1 className='text-white'>How Can I Be Saved?</h1>
          </span>
          <p className='text-start text-white my-3 w-[150px] ml-16'>The most important question that you'll ever ask that will affect you eternally</p>
          <button className='btnn text-white hover:bg-white hover:text-[#03045e]'>Learn More</button>
        </div>
        <div className='bg-[#4361ee] h-[50vh] md:w-[27%] rounded-xl'>
          <span className='flex md:flex lg:flex items-center justify-around  gap-4 mt-4'>
            <img src={pray} className='text-white w-[100px] h-[100px] rounded-full' alt="" />
            <p className='text-start text-white'>Submit a Prayer Request</p>
          </span>
          <p className='text-white ml-10 text-xl text-wrap font-bold'>We are always available <br /> to pray for you</p>
          <button className='my-9 ml-10 mx-6 px-4 rounded-full py-2 bg-white text-[#03045e] hover:bg-[#03045e] hover:text-[#fff] font-medium'>Submit Prayer</button>
        </div>
      </div>
    </div>
  )
}

export default Resource