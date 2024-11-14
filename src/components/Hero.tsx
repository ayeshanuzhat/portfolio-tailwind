import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/44e00418-a509-4e35-a73b-5af31dfe138a.jpg)] bg-center lg:bg-[15%] bg-cover'
    style={{backgroundSize: "35%"}}
    >
      <Navbar />  
    </div>
  )
}

export default Hero
