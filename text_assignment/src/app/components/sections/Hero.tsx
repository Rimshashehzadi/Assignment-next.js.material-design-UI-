import Button from '../shared/Button'
import React from 'react'
import Wrapper from '../shared/Wrapper'

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div >
        <div className="bg-[url('/images/hero1.jfif')]   drop-shadow  shadow-2xl bg-fixed bg-right-bottom bg-cover   blur-none mt-4 p-6 rounded-lg">
  <h1 className='p-3 text-white text-xl font-semibold'>Hi! 👋 James Doe</h1>
        <p className='text-gray-100 mb-8'>Lorem ipsus dolor sit amen, something important to say here</p>
        <div className='py-8'>
        <Button  text={'Add Check ln'}/>
        </div>
        </div>
        </div>
        </Wrapper>

    </section>
   
      
    
  )
}

export default Hero