import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaGithub, FaLinkedin, FaPhoneVolume, FaRegUser } from 'react-icons/fa'
import { MdEmail, MdMail } from 'react-icons/md'
import { Link } from 'react-router-dom'

import AOS from "aos";
import "aos/dist/aos.css";



function Home() {
  useEffect(() => {
  AOS.init({ duration: 900, once: true });
}, []);



   

  return (

    
    <>
      <Header />
     
      <div className='bg-gray-300 '>
        <div id='about' className=" grid md:grid-cols-2 p-5 " data-aos="fade-up">
          <img src="/mypicstand.jpeg" alt="" id='image' className='w-80% h-180' />
          <div className='mt-25 py-5 justify-center items-center text-4xl'>
            <h1 className='title text-4xl md:text-6xl hover:text-amber-300' >Hi I'm Amaldas P R</h1> <br />
            <p className='font-bold '>Full Stack Web Develeper</p> <br />
            <p>It's My Official Portfolio</p>
            <div className=' flex  items-center mt-3'>
              {/* <div><a className='text-xl px-5 py-3 bg-black font-bold p-5 rounded mt-5 text-center text-gray-400 hover:bg-gray-400 hover:text-black hover:border border-black '  >Download CV</a></div> */}
              <div>
                <a className='text-xl px-5 py-3 bg-black font-bold p-5 rounded mt-5 text-center text-gray-400 hover:bg-gray-400 hover:text-black hover:border border-black' download href="/Resume_of_AMALDAS_P_R.pdf">Download CV</a>
              </div>
                 <div className='md:flex gap-8 mt-5 ms-10'>
                  <Link to={"https://www.linkedin.com/in/amal-r-padayattil/"}><div className=' hover:rounded-3xl w-12 h-12 hover:bg-gray-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]'><a href=""><FaLinkedin className='text-4xl text-black flex justify-center items-center ms-1.5 mt-1.5 p-1 ' /></a></div></Link>
                 <div className='hover:rounded-3xl w-12 h-12 hover:bg-gray-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]'> <Link to={"https://github.com/Amalr12"}><FaGithub className='text-4xl text-black flex justify-center items-center ms-1.5 mt-1.5 p-1'/></Link></div>
                 <div className='hover:rounded-3xl w-12 h-12 hover:bg-gray-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]'> <Link ><MdEmail className='text-4xl text-black flex justify-center items-center ms-1.5 mt-1.5 p-1'/></Link></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* <div class="inline-block">
        <button  class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50">
          
          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-10 text-gray-400">
            <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
          </svg>
        </button>

        <div anchor="bottom end" popover class="w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
          <div class="py-1">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Account settings</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Support</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">License</a>
            <form action="#" method="POST">
              <button type="submit" class="block w-full px-4 py-2 text-left text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Sign out</button>
            </form>
          </div>
        </div>
      </div> */}
      {/* aboout */}
     
      <Footer />
    </>
  )
}

export default Home