import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const countInc=()=>{
    setCount(count+1)
  }
  const countDec=()=>{
    if(count<1){
      setCount(0)
      alert("invalid")
    }
    else{
      setCount(count-1)
    }
  }
  return (
    
    <div className='text-center'>
      <div className='text-5xl my-10'>{count}</div>
      <button className='text-2xl font-semibold bg-blue-400 px-4 py-1 rounded-4xl' onClick={countInc}>Increase</button>
      <button className='text-2xl font-semibold bg-green-400 px-4 py-1 mx-3 rounded-4xl' onClick={()=>setCount(0)}>Reset</button>
      <button className='text-2xl font-semibold bg-red-500 px-4 py-1 rounded-4xl' onClick={countDec}>Decrease</button>
    </div>
  )
}

export default Counter;