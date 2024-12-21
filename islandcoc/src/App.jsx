import React from 'react'
import Navbar from './components/Navbar'
import Resource from './components/Resource'
import Discipleship from './components/Discipleship'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Header from './components/Header'


const App = () => {
  return (
    <div className='overflow-hidden w-full'>
      <Navbar />
      <Header />
      <Resource />
      <Discipleship />
      <hr className='my-2 text-4xl font-bold' />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App