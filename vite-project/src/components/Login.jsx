import React, { useState } from 'react'

const Login = () => {
    const [formdata,setFormdata]=useState({
        email:"",
        password:""

    })
    const handleChange=(e)=>{
        setFormdata({...formdata, [e.target.name]:e.target.value});
    }

    const handleSubmit=()=>{
        e.preventdefault();
        console.log(formdata)
        alert("saved successfully")
    }

  return (
    <div className='bg-blue-200 h-screen pt-30'>
        <div className='bg-white w-[25rem] h-[20rem] mx-auto rounded-3xl'>
            <div className='text-3xl text-center font-semibold pt-5'>
                <h1>Login</h1>
            </div>
            <form className='text-center py-4 space-y-5 ' >
                <input type='email' name='email'  placeholder=' Email' className='border w-[80%] py-3 rounded-md ' onChange={handleChange}></input>
                <input type='password' name='password'  placeholder=' password' className='border w-[80%] py-3 rounded-md ' onChange={handleChange}></input>
            
            </form>
            <button className='bg-blue-400 px-35 py-3 rounded-xl  ml-8 mt-4' onClick={handleSubmit}>Sign Up</button>
        </div>
    </div>
  )
}

export default Login;









// import React from 'react';
// import { useForm } from 'react-hook-form';
// import Login from './Login';

// const Login = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className='bg-blue-200 h-screen pt-20'>
//       <div className='bg-white w-[25rem] h-[30rem] mx-auto rounded-3xl p-6'>
//         <div className='text-3xl text-center font-semibold pt-5'>
//           <h1>Sign Up</h1>
//         </div>
//         <form onSubmit={handleSubmit(onSubmit)} className='text-center py-4 space-y-5'>
//           <input
//             type='text'
//             {...register('name', { required: 'Name is required' })}
//             placeholder='Name'
//             className='border w-[80%] py-3 rounded-md px-2'
//           />
//           {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

//           <input
//             type='email'
//             {...register('email', {
//               required: 'Email is required',
//               pattern: {
//                 message: 'Invalid email address'
//               }
//             })}
//             placeholder='Email'
//             className='border w-[80%] py-3 rounded-md px-2'
//           />
//           {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

//           <input
//             type='password'
//             {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
//             placeholder='Password'
//             className='border w-[80%] py-3 rounded-md px-2'
//           />
//           {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

//           <button type='submit' className='bg-blue-400 px-20 py-3 rounded-xl mt-4'>
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;





