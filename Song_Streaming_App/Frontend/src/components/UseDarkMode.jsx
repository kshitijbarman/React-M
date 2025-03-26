// import React, { useState } from 'react'

// const UseDarkMode = () => {
//     const [toggle,setToggle]=useState(true)
    
//     const prevalue=()=>{

//        setToggle((pre)=>!pre)
//     }
       
//   return {
//     toggle,prevalue,
//   }
// }

// export default UseDarkMode





import { useDarkMode } from "./ThemeContext";

const Navbar = () => {
  const { toggle, prevalue } = useDarkMode();

  return (
    <nav style={{ background: toggle ? "white" : "black", color: toggle ? "black" : "white", padding: "10px" }}>
      <h1>Navbar</h1>
      <button onClick={prevalue}>Toggle Theme</button>
    </nav>
  );
};

export default Navbar;
