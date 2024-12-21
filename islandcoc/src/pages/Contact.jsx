import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
        <div>
          <h1 className='block'>Contact</h1>
          <button className='bg-blue-600 px-6 py-3 rounded-md text-white mt-5 mx-10'><Link to='/'>Back to home</Link></button>
        </div>
  )
}

export default Contact