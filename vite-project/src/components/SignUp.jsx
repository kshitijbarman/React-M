// import React, { useState } from 'react'
// import { data } from 'react-router-dom';

// const SignUp = () => {
//   const [formdata ,setFormdata]=useState({
//       name:"",
//       email:"",
//       password:"",
//   })

//   const handleChange=(e)=>{
//     e.preventDefault();
//     setFormdata({...formdata,[e.target.name]: e.target.value});
//   }

//   const handleSubmit=()=>{
//    localStorage.setItem("userform",JSON.stringify(data))
//     console.log(formdata)
//     alert("saved successfully")
//   }

//   return (
//     <div className='bg-blue-200 h-screen pt-20'>
//         <div className='bg-white w-[25rem] h-[25rem] mx-auto rounded-3xl'>
//             <div className='text-3xl text-center font-semibold pt-5'>
//                 <h1>Sign Up</h1>
//             </div>
//             <form className='text-center py-4 space-y-5 '>
//                 <input type='text' name='name'  placeholder=' Name' className='border w-[80%] py-3 rounded-md ' onChange={handleChange}></input>
//                 <input type='email' name='email'  placeholder=' Email' className='border w-[80%] py-3 rounded-md 'onChange={handleChange}></input>
//                 <input type='password' name='password'  placeholder=' password' className='border w-[80%] py-3 rounded-md ' onChange={handleChange}></input>
            
//             </form>
//             <button className='bg-blue-400 px-35 py-3 rounded-xl  ml-8 mt-4'onClick={handleSubmit}>Sign Up</button>
//         </div>
//     </div>
//   )
// }

// export default SignUp;




import React, { useState } from "react";

const SignUp = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    localStorage.setItem("userform", JSON.stringify(formdata)); 
    console.log(formdata);
    alert("Saved successfully");
  };

  return (
    <div className="bg-blue-200 h-screen pt-20">
      <div className="bg-white w-[25rem] h-[25rem] mx-auto rounded-3xl">
        <div className="text-3xl text-center font-semibold pt-5">
          <h1>Sign Up</h1>
        </div>
        <form className="text-center py-4 space-y-5 ">
          <input
            type="text"
            name="name"
            placeholder=" Name"
            className="border w-[80%] py-3 rounded-md"
            value={formdata.name} 
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder=" Email"
            className="border w-[80%] py-3 rounded-md"
            value={formdata.email} 
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder=" Password"
            className="border w-[80%] py-3 rounded-md"
            value={formdata.password} 
            onChange={handleChange}
          />
        </form>
        <button
          className="bg-blue-400 px-35 py-3 rounded-xl ml-8 mt-4"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        <button className="bg-blue-400 px-35 py-3 rounded-xl ml-8 mt-4" onClick={()=>{
          localStorage.clear()
        }}>logout</button>
      </div>
    </div>
  );
};

export default SignUp;



