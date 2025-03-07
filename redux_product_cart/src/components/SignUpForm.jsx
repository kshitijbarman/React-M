import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:''
  })
  const navigate=useNavigate()

  const handleChange=(e)=>{
     setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
     e.preventDefault()
     console.log(formData)
     localStorage.setItem('userInfo',JSON.stringify(formData))
     setFormData({
     name:'',
     email:'',
     password:'',
    })
    navigate('/')
  }
  return (
    <div className='h-screen w-full bg-black flex items-center justify-center'>
    <div className='bg-gray-200 w-[22rem] min-h-[22rem]  rounded-2xl'>
       <h1 className='text-center text-3xl font-semibold pt-5 pb-6'>SignUp</h1>
       <form onSubmit={handleSubmit} >
          <div className='px-5 space-y-3 '>
          <input type='text' name='name' value={formData.name} placeholder='Enter Your Name' required onChange={handleChange} className='border-b w-full py-2 px-2 outline-none' ></input>
          <input type='email' name='email' value={formData.email}  placeholder='Enter Your Email' required onChange={handleChange} className='border-b w-full py-2 px-2 outline-none' ></input>
          <input type='password' name='password' value={formData.password} placeholder='Enter Your password' required onChange={handleChange}className='border-b w-full py-2 px-2 outline-none' ></input>
          <button type='submit' className='bg-blue-600 w-full mt-3 py-2  text-white hover:bg-blue-700 font-semibold'>SignUp</button>
          </div>
       </form>
       <p className="text-center mt-3">Don't have an account? <span className="text-blue-500"><NavLink to='/'>Login</NavLink></span></p>
   </div>
  </div>
  )
};
export default SignUpForm;
