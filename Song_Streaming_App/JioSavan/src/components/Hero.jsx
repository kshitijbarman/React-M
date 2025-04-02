import React from 'react'
import Slidebar from './Slidebar'
import { useSelector } from 'react-redux'

const Hero = () => {
    const apiData=useSelector((state)=>state.apiData)
    
  return (
    <div className='flex pt-20'>
       <div><Slidebar/></div>
       <div>
      
       </div>
    </div>
  )
}

export default Hero