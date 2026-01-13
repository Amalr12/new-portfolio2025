import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaPhone, FaPhoneVolume } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4tlga23', 'template_rmf8t85', form.current, {
        publicKey: 'nvP5N3jHleHPRN-qk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            title: "Messege Sent Successfully!",
            icon: "success",
            draggable: true
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <>
      <Header />
      <div className='bg-gray-400'>
        <div className="grid grid-cols-2 ">

          <form ref={form} onSubmit={sendEmail} className='bg-gray-500 space-y-6 p-5 m-10 shadow-2xl'>
            <h1 className='text-3xl'>Let's Work Together..</h1>
            <div className='grid grid-cols-2 gap-6'>
              <input className='bg-[#0d0f10] text-gray-400 border border-gray-800 p-3 rounded-lg outline-none text-sm' type="text" placeholder='First Name' name='name' />
              <input className='bg-[#0d0f10] text-gray-400  border border-gray-800 p-3 rounded-lg outline-none text-sm' type="text" placeholder='Last Name' name='lastname' />
            </div>
            <div className='grid grid-cols-2 gap-6'>
              <input className='bg-[#0d0f10] text-gray-400  border border-gray-800 p-3 rounded-lg outline-none text-sm' type="text" placeholder='Email Id' name='email' />
              <input className='bg-[#0d0f10] text-gray-400  border border-gray-800 p-3 rounded-lg outline-none text-sm' type="text" placeholder='Phone' name='phone' />
            </div>
            <div className='grid grid-cols-1 gap-6'>
              <textarea placeholder='Type Your Message here' className='text-gray-400  w-full bg-[#0d0f10] border border-gray-800 p-3 h-32 rounded-lg text-sm' name="message" id="" ></textarea>
            </div>
            <button type='submit' class="bg-black text-gray-400 px-6 py-3 rounded-full font-semibold hover:opacity-90">
              Send Message
            </button>
          </form>



          <div className=' space-y-10 mt-20'>
            <div className="flex item-start gap-4 m-10 ">
              <div className=' hover:rounded-3xl w-12 h-12 rounded-3xl bg-gray-600 '><a href=""><FaPhoneVolume className='text-4xl text-black flex justify-center items-center ms-1.5 mt-1.5 p-1' /></a></div>
              <div className=''>
                <p class="text-sm ">Phone</p>
                <p class="text-lg">+91 8848446731</p>
              </div>
            </div>
            <div className="flex item-start gap-4 m-10 ">
              <div className=' hover:rounded-3xl w-12 h-12 rounded-3xl bg-gray-600 '><a href=""><MdEmail className='text-4xl text-black flex justify-center items-center ms-1.5 mt-1.5 p-1' /></a></div>
              <div className=''>
                <p class="text-sm ">Email</p>
                <p class="text-lg">amaldaspr12@gmail.com</p>
              </div>
            </div>
            <div className="flex item-start gap-4 m-10 ">
              <div className=' hover:rounded-3xl w-12 h-12 rounded-3xl bg-gray-600 '><a href=""><FaLocationDot className='text-4xl text-black flex justify-center items-center ms-1.5 mt-1.5 p-1' /></a></div>
              <div className=''>
                <p class="text-sm ">Address</p>
                <p class="text-lg">House No. 112 <br />Padayattil House P.O.Kuzhur</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Contact