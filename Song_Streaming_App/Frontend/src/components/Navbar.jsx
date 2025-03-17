import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-3 bg-[#f5f5f5] px-5'>
        <div className='lg:flex items-center '>
            <div className='flex gap-2 items-center'>
                <img src='/savan-logo.png' className='w-10' alt="Logo" />
                <Link to='/' className='font-semibold text-lg md:text-xl lg:hidden xl:block'>JioSavan</Link>
            </div>

            <ul className="flex  md:hidden lg:flex  gap-3 text-base font-semibold pl-5">
                <li className="cursor-pointer text-2xl lg:text-base">Music</li>
                <li className="cursor-pointer text-2xl lg:text-base">Podcasts</li>
                <li className="cursor-pointer hidden lg:block">Pro</li>
            </ul>
        </div>

        <div className="hidden xl:block bg-white rounded-3xl text-center">
            <input
                type="text"
                name="search"
                id="search"
                className="py-2 px-4 w-[40vw] rounded-3xl  border border-gray-300 text-black outline-none"
                placeholder="⌕ Search "
                autoComplete="off"
                autoCorrect="off"
            />
        </div>

        <div className="lg:flex items-center gap-4">
            <div className="flex items-center">
                <div className="flex flex-col text-sm font-semibold">
                    <span className="text-gray-600 text-[14px] md:text-lg">Music Languages</span>
                    <span className="text-gray-500 text-[12px] hidden lg:block">Hindi</span>
                </div>
                <MdKeyboardArrowDown className="text-xl text-gray-500 ml-1" />
            </div>

            <ul className="hidden lg:flex gap-5 text-gray-600 font-semibold">
                <li className="cursor-pointer">Log In</li>
                <li className="cursor-pointer">Sign Up</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
