import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoAngular, IoLogoJavascript } from 'react-icons/io';
import { SiExpress, SiMongodb } from 'react-icons/si';


function Skill() {
  return (
    <>
      <Header />
      {/* <div className=' bg-gray-400'>
            <h1 className='text-black  text-4xl'>Skills</h1>
            <div className="grid grid-cols-3">
                <div className='p-10 '>
                    <h1 className='skillhead text-4xl'>01</h1>
                    <p className='text-4xl' >HTML</p>
                </div>
                <div className='p-5'>
                    <h1>01</h1>
                    <p>HTML</p>
                </div>
                <div className='p-5'>
                    <h1>01</h1>
                    <p>HTML</p>
                </div>
            </div>
    </div> */}
      <h1 className='text-center mt-5 text-4xl'>Skills</h1>
      <section className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-20 ">

        <div id='skillcard' className="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl font-bold text-gray-300 " style={{ WebkitTextStroke: "3px black" }}>01</h2>
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-3xl font-bold">HTML</h3>
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <span className="text-black text-6xl " ><a href=""><FaHtml5 /></a></span>
            </div>
          </div>
          <ul className='mt-4 text-gray-500'>
            <li>Proficient in writing clean, semantic HTML for modern websites.</li>
            <li>Skilled at structuring web pages using standard HTML elements.</li>
            <li>Strong understanding of forms, tables, and semantic tags.</li>
          </ul>
          <div className="w-full h-px bg-gray-800 mt-6"></div>
        </div>

        {/* <div class="group shadow-2xl p-5">
          <h2 class="text-3xl font-bold text-gray-300" style={{ WebkitTextStroke: "3px black" }}>02</h2>
          <div class="flex items-center justify-between mt-4">
            <h3 class="text-3xl font-bold">CSS</h3>
            <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <span class="text-black text-6xl"><a href=""><FaCss3Alt /></a></span>
            </div>
          </div>
          <ul className='mt-4 text-gray-500'>
            <li>Skilled in creating responsive and visually appealing web designs using CSS.</li>
            <li>Expert in writing reusable, scalable, and organized CSS code</li>
          </ul>
          <div class="w-full h-px bg-gray-800 mt-6"></div>
        </div> */}
        <div className="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
  <h2 className="text-3xl font-bold text-gray-300" style={{ WebkitTextStroke: "3px black" }}>02</h2>

  <div className="flex items-center justify-between mt-4 ">
    <h3 className="text-3xl font-bold">CSS</h3>

    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110">
      <span className="text-black text-6xl"><a href=""><FaCss3Alt /></a></span>
    </div>
  </div>

  <ul className='mt-4 text-gray-500'>
    <li>Skilled in creating responsive and visually appealing web designs using CSS.</li>
    <li>Expert in writing reusable, scalable, and organized CSS code</li>
  </ul>

  <div className="w-full h-px bg-gray-800 mt-6"></div>
</div>

        <div className="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl font-bold text-gray-300" style={{ WebkitTextStroke: "3px black" }}>03</h2>
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-3xl font-bold ">BOOTSTRAP</h3>
            <div className="w-14 h-14 rounded-full  flex items-center justify-center">
              <span className="text-black text-6xl"><a href=""><FaBootstrap /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500'>
            <li>Skilled in building responsive, mobile-first layouts using Bootstrap.</li>
            <li>Proficient in customizing Bootstrap components for modern UI design.</li>
          </ul>
          <div class="w-full h-px bg-gray-800 mt-6"></div>
        </div>

        <div class="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 class="text-3xl font-bold text-gray-300" style={{ WebkitTextStroke: "3px black" }}>04</h2>
          <div class="flex items-center justify-between mt-4">
            <h3 class="text-3xl font-bold">TAILWIND CSS</h3>
            <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <span class="text-black text-6xl"><a href=""><RiTailwindCssFill /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500'>
            <li>Skilled in building fast, responsive interfaces using Tailwind’s utility-first approach.</li>
            <li>Experienced in creating modern UI layouts with  Flexbox & Grid.</li>
          </ul>
          <div class="w-full h-px bg-gray-800 mt-6"></div>
        </div>

        <div class="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 class="text-3xl font-bold text-gray-300" style={{ WebkitTextStroke: "3px black" }}>05</h2>
          <div class="flex items-center justify-between mt-4">
            <h3 class="text-3xl font-bold">JavaScript</h3>
            <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <span class="text-black text-6xl"><a href=""><IoLogoJavascript /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500'>
            <li>Strong understanding of core JavaScript concepts like functions, arrays, objects, and async programming.
              Capable of creating responsive, user-friendly web interactions and logic.
            </li>

          </ul>
          <div class="w-full h-px bg-gray-800 mt-6"></div>
        </div>
        <div class="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 class="text-3xl font-bold text-gray-300" style={{ WebkitTextStroke: "3px black" }}>06</h2>
          <div class="flex items-center justify-between mt-4">
            <h3 class="text-3xl font-bold">React.Js</h3>
            <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <span class="text-black text-6xl"><a href=""><FaReact /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500'>
            <li>Proficient in building dynamic, component-based UIs with React.js.

            </li>
            <li>Experienced in state management, hooks, and building responsive SPA applications.</li>
          </ul>
          <div class="w-full h-px bg-gray-800 mt-6"></div>
        </div>
        <div class="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]" shadow-2xl p-5>
          <h2 class="text-3xl font-bold text-gray-300" style={{ WebkitTextStroke: "3px black" }}>07</h2>
          <div class="flex items-center justify-between mt-4">
            <h3 class="text-3xl font-bold">MongoDB</h3>
            <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <span class="text-black text-6xl"><a href=""><SiMongodb /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500'>
            <li>Skilled in designing and managing NoSQL databases using MongoDB.

            </li>
            <li>Experience in creating efficient schemas and handling large datasets.</li>
          </ul>
          <div class="w-full h-px bg-gray-800 mt-6"></div>
        </div>
        <div class="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 class="text-3xl font-bold text-gray-300" style={{ WebkitTextStroke: "3px black" }}>08</h2>
          <div class="flex items-center justify-between mt-4">
            <h3 class="text-3xl font-bold">Express.js</h3>
            <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <span class="text-black text-6xl"><a href=""><SiExpress /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500'>
            <li>Experienced in building RESTful APIs and backend services ,
              Strong understanding of middleware, routing, and server-side logic.

            </li>
            <li></li>
          </ul>
          <div class="w-full h-px bg-gray-800 mt-6"></div>
        </div>
        <div class="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 class="text-3xl font-bold text-gray-300" style={{ WebkitTextStroke: "3px black" }}>09</h2>
          <div class="flex items-center justify-between mt-4">
            <h3 class="text-3xl font-bold">Angular</h3>
            <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <span class="text-black text-6xl"><a href=""><IoLogoAngular /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500'>
            <li>Skilled in developing structured, scalable web apps using Angular framework.

            </li>
            <li>Strong understanding of components, services, and two-way data binding.</li>
          </ul>
          <div class="w-full h-px bg-gray-800 mt-6"></div>
        </div>
        <div class="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 class="text-3xl font-bold text-gray-300" style={{ WebkitTextStroke: "3px black" }}>09</h2>
          <div class="flex items-center justify-between mt-4">
            <h3 class="text-3xl font-bold">Node.js</h3>
            <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <span class="text-black text-6xl"><a href=""><FaNode /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500'>
            <li>Skilled in building fast, scalable server-side applications using Node.js.

            </li>
            <li>Experience with asynchronous programming and REST API development.</li>
          </ul>
          <div class="w-full h-px bg-gray-800 mt-6"></div>
        </div>
        <div class="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 class="text-3xl font-bold text-gray-300" style={{ WebkitTextStroke: "3px black" }}>09</h2>
          <div class="flex items-center justify-between mt-4">
            <h3 class="text-3xl font-bold">Git</h3>
            <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <span class="text-black text-6xl"><a href=""><FaGitAlt /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500'>
            <li>Proficient in using Git for version control, branching, and collaboration.

            </li>
            <li>Experienced in managing repositories and maintaining clean commit history.</li>
          </ul>
          <div class="w-full h-px bg-gray-800 mt-6"></div>
        </div>

      </section>

      <Footer />
    </>
  )
}

export default Skill