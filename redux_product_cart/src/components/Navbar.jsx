import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar=()=>{
    const cartItem = useSelector(state=>state.cart.items)
    const cartLength = cartItems.length; 
    return(
        <div className='w-full bg-blue-400 py-2 flex justify-between px-5 sticky'>
            <div className='pt-2 '>
                <h2>Barman Store</h2>
            </div>
            <div className='pt-3 text-xl font-semibold no-underline'>
                <ul className='flex  space-x-5 font-style '>
                    <li className='hover:underline underline-offset-4'><NavLink to='/' className="!no-underline text-black ">Home</NavLink></li>
                    <li className='hover:underline underline-offset-4'><NavLink to='/about' className="!no-underline text-black ">About</NavLink></li>
                    <li className='hover:underline underline-offset-4'><NavLink to='/products' className="!no-underline text-black ">Products</NavLink></li>
                    <li className='hover:underline underline-offset-4'><NavLink to='/contact' className="!no-underline text-black ">Contact</NavLink></li>
                </ul>
            </div>
            <div className='flex space-x-4 pt-2 text-2xl'>
                <div>
                <input type='search' placeholder='search ' className='border rounded-l-2xl pl-5' >
                </input>
                <button className='border px-2  bg-red-500'>search</button>
                </div>
                <NavLink to='/cart'><FaCartShopping className='pt-2 text-3xl text-white' /></NavLink>
                <MdAccountCircle className='pt-2 text-3xl'/>
            </div>
        </div>
    )
}
export default Navbar













