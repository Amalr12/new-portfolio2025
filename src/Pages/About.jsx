import React, { useEffect } from 'react'
import { FaGithub, FaLinkedin, FaPhoneVolume, FaRegUser } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
        AOS.init({ duration: 900, once: true });
      }, []);
  return (
    <>
    <Header/>
     <div id='about' className="p-10  h-full bg-cover bg-center bg-gray-300" >
        <div className="grid md:grid-cols-2 gap-10" data-aos="fade-up">

          <div className='mt-10'>
            <img className='h-full w-full' src="/mypicsit.jpeg" alt="" />
          </div>
          <div className=' mt-10 '>
            <h1 className='font-bold text-4xl'>ABOUT</h1>
            <div className='w-30 bg-black h-1'></div>
            <h1 className='mt-3 text-4xl text-black'>Introduction</h1>
            <p className=' text-xl text-justify'>I'm  graduated in Electronics and Communication engineering from APJ ABDUL KALAM Technological University on 2019. After completing my graduation i joined a company as a Resident
              Engineer for Reserve Bank of India, Kochi.
              I am passionate about building innovating web applications and solving real-world problems with technology. <br />
              My Jounrney in to web development is began from Luminar technolab software institute on
              April
              2025. I have a basic knowledge about the web development using HTML, CSS, Bootstrap,
              Tailwind,JavaScript and React.My career goal is to become a skilled Full Stack Developer and work on scalable appliations that make a difference. </p>

            <div className='flex items-center mt-5 gap-4'>
             <Link to={""}> <FaRegUser /></Link>
              <span className='text-xl'>AMALDAS P R</span>
            </div>
            <div className='flex items-center mt-5 gap-4'>
              <FaPhoneVolume />
              <span className='text-xl'>+91 8848446731</span>
            </div>
            <div className='flex items-center mt-5 gap-4'>
              <MdMail />
              <span className='text-xl'>amaldaspr12@gmailcom</span>
            </div>
            <div className='flex items-center mt-5 gap-4'>
              <FaGithub />
              <span className='text-xl'><a href="https://github.com/Amalr12">Amalr12</a></span>
            </div>
            <div className='flex items-center mt-5 gap-4'>
              <FaLinkedin />
              <span className='text-xl'><a href="https://www.linkedin.com/in/amal-r-padayattil/">AMAL R</a></span>
            </div>
          </div>
          <div>

          </div>
        </div>
        {/* Skills */}

      </div>
      <Footer/>
    </>
  )
}

export default About