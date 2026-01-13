import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Footer() {
  return (
    <>
      <div className='bg-black text-gray-400 p-10 '>

        <div className='flex gap-8 justify-center'>
          <a href=""><FaLinkedin className='text-2xl text-gray-400 ' /></a>
          <a href=""><FaGithub className='text-2xl text-gray-400 ' /></a>
          <a href=""><MdEmail className='text-2xl text-gray-400 ' /></a>
              <a href=""> <FaInstagram className='text-2xl text-gray-400 ' /></a>
         
        </div>

        <h1 className='text-center mt-5'>All Rights Reserverd . | AMALDAS P R | 2025</h1>
      </div>

    </>
  )
}

export default Footer