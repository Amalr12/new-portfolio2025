import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { TiThMenu } from 'react-icons/ti'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    const [clickStatus,setClickStatus]=useState(false)

    const navigate=useNavigate()
    
    return (
        <>

            <div className='bg-black  items-center justify-center p-3 shadow-lg md:w-full grid grid-cols-[1fr_9fr_2fr]'>
                <div  className=' '>
                   <Link to={"/"}> <img src="/Minimalist_Portfolio_2025_Logo-removebg-preview.png" alt="" className='md:w-30 md:h-30 w-30 h-20 ' /></Link>
                    
                </div>
                <div onClick={()=>setClickStatus(!clickStatus)} className='md:hidden flex justify-end'>
                    <TiThMenu  className='text-white text-4xl'/>
                </div>


               <div className='hidden ms-10 md:flex items-center justify-end text-gray-200'>
                   <Link to={"/"}> <a  href="#" className="-mx-3 block rounded-lg px-5 py-3 not-first:not-last:text-base/7 font-semibold text-gray-400 text-2xl  hover:text-amber-300">Home</a></Link>
                   <Link to={"/about"}> <a   href="" className="-mx-3 block rounded-lg px-5 py-3  font-semibold text-gray-400 text-2xl  hover:text-amber-300 ">About</a></Link>
                   <Link to={"/skills"}> <a   href="#" className="-mx-3 block rounded-lg px-5 py-3  font-semibold text-gray-400 text-2xl  hover:text-amber-300">Skills</a></Link>
                   <Link to={"/contact"}> <a   href="#" className="-mx-3 block rounded-lg px-5 py-3  font-semibold text-gray-400 text-2xl  hover:text-amber-300 ">Contact</a></Link>
                    <Link to={"/projects"}><a  href="#" className="-mx-3 block rounded-lg px-5 py-3  font-semibold text-gray-400 text-2xl  hover:text-amber-300">Projects</a></Link>
               </div>
              

              

            </div>
             {
                clickStatus&&
               
                    <ul className='text-gray-400 items-center text-center bg-black  justify-center '>
                        <li className='p-2 mb-3'>Home</li>
                        <li  className='p-2 mb-3'>About</li>
                        <li  className='p-2  mb-3'>Skills</li>
                        <li  className=' p-2 mb-3'>Contact</li>
                        <li  className='p-2'>Projects</li>
                    </ul>
               
               }
           
        </>
    )
}

export default Header