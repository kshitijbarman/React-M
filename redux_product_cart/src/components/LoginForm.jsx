import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'


const LoginForm=()=>{
    const [formData,setFormData]=useState({
     email:'',
     password:''
    })
    const Navigate= useNavigate()

    const handleChange=(e)=>{
       setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const localData=JSON.parse(localStorage.getItem('userInfo'))
        console.log(localData)
        if(localData){
            if(localData.email===formData.email&&localData.password===formData.password){
                localStorage.setItem("isAuthenticated", "true");
                Navigate('/products')
            }
            else{
                alert("Enter Correct Email Password")
            }
        }
        else{
            alert("SignUp First")
        }
        setFormData({
         email:'',
         password:''
        })
       
    }
    return (
        <div className='h-screen w-full bg-black flex items-center justify-center'>
        <div className='bg-gray-200 w-[22rem] min-h-[22rem]  rounded-2xl'>
           <h1 className='text-center text-3xl font-semibold pt-5 pb-6'>Login</h1>
           <form onSubmit={handleSubmit}>
              <div className='px-5 space-y-3 '>
              <input type='email' name='email' value={formData.email} placeholder='Enter Your Email' required onChange={handleChange} className='border-b w-full py-2 px-2 outline-none' ></input>
              <input type='password' name='password' value={formData.password}  placeholder='Enter Your password' required onChange={handleChange} className='border-b w-full py-2 px-2 outline-none' ></input>
              <button type='submit' className='bg-blue-600 w-full mt-3 py-2 text-white hover:bg-blue-700 font-semibold'>Login</button>
              </div>
           </form>
           <p className="text-center mt-3">Don't have an account? <span className="text-blue-500"><NavLink to='/sign-up'>Sign up</NavLink></span></p>
       </div>
      </div>
      )
}
export default LoginForm