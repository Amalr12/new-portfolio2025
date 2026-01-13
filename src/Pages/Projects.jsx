import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
   useEffect(() => {
      AOS.init({ duration: 900, once: true });
    }, []);
  return (
   
    
    <>
      <Header />
      <section className="w-full bg-[#0d0d0d] text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center" data-aos="fade-up">


          <div>
            <h1 className="text-6xl font-bold text-gray-600 mb-4">01</h1>

            <h2 className="text-3xl font-semibold mb-4">MERN Project</h2>
            <h1 className='text-2xl text-green-400 font-bold'>DOCPULSE</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
              Patients Records Management System Website using HTML,CSS and React.js with CRED operations,It stores the Records of the Patients in a Hospital</p>
           

            <p className="text-green-400 font-medium mb-8">
              Html 5, Css 3, Javascript,React.js,MongoDB,Node.js,Express.js
            </p>


            <div className="flex gap-4">
              <Link to={"https://docpulse-frontend.vercel.app/"} >
                <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <FiArrowUpRight size={22} />
                </button>
              </Link >

              <Link to={"https://github.com/Amalr12/docpulse-frontend.git"}>
                <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <FiGithub size={22} />
                </button>
              </Link>
            </div>
          </div>


          <div className="flex justify-center">
            <img
              src="/Docpulse.png"
              alt="Project screenshot"
              className="rounded-xl shadow-lg border border-white/10"
            />
          </div>

        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center" data-aos="fade-up">


          <div>
            <h1 className="text-6xl font-bold text-gray-600 mb-4">01</h1>

            <h2 className="text-3xl font-semibold mb-4">Frontend Project</h2>
            <h1 className='text-2xl text-green-400 font-bold'>EMPLOYEE MANAGEMENT SYSTEM</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
              Employee Management System Website using HTML,CSS and React.js with CRED operations,It shows the details of the Employees and company</p>
           

            <p className="text-green-400 font-medium mb-8">
              Html 5, Css 3, Javascript,React.js
            </p>


            <div className="flex gap-4">
              <Link to={"https://employee-frontend-sigma.vercel.app/"} >
                <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <FiArrowUpRight size={22} />
                </button>
              </Link >

              <Link to={"https://github.com/Amalr12/employee-frontend.git"}>
                <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <FiGithub size={22} />
                </button>
              </Link>
            </div>
          </div>


          <div className="flex justify-center">
            <img
              src="/empmgnt.png"
              alt="Project screenshot"
              className="rounded-xl shadow-lg border border-white/10"
            />
          </div>

        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center  py-20 " data-aos="fade-up" data-aos-delay="150">


          <div>
            <h1 className="text-6xl font-bold text-gray-600 mb-4">02</h1>

            <h2 className="text-3xl font-semibold mb-4">Frontend Project</h2>
            <h1 className='text-2xl text-green-400 font-bold'>TODO App</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
              A ToDo Website  using HTML,CSS and React with CRED operations</p>
            

            <p className="text-green-400 font-medium mb-8">
              Html 5, Css 3, Javascript,React.js
            </p>


            <div className="flex gap-4">
              <Link to={"https://todo-frontend-lime-ten.vercel.app/"} >
                <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <FiArrowUpRight size={22} />
                </button>
              </Link >

              <Link to={"https://github.com/Amalr12/todo-frontend.git"}>
                <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <FiGithub size={22} />
                </button>
              </Link>
            </div>
          </div>


          <div className="flex justify-center">
            <img
              src="/todo.png"
              alt="Project screenshot"
              className="rounded-xl shadow-lg border border-white/10"
            />
          </div>

        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center  py-10"  data-aos="fade-up" data-aos-delay="300">


          <div>
            <h1 className="text-6xl font-bold text-gray-600 mb-4">03</h1>

            <h2 className="text-3xl font-semibold mb-4">Frontend Project</h2>
            <h1 className='text-2xl text-green-400 font-bold'>EDUHUB</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
              E-Learning Platform for selling courses using HTML,CSS and React</p>
           

            <p className="text-green-400 font-medium mb-8">
              Html 5, Css 3, Javascript,React.js
            </p>


            <div className="flex gap-4">
              <Link to={""} >
                <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <FiArrowUpRight size={22} />
                </button>
              </Link >

              <Link to={"https://github.com/Amalr12/bootstrap-infant-world.git"}>
                <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <FiGithub size={22} />
                </button>
              </Link>
            </div>
          </div>


          <div className="flex justify-center">
            <img
              src="/eduhub.png"
              alt="Project screenshot"
              className="rounded-xl shadow-lg border border-white/10"
            />
          </div>

        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center  py-10"  data-aos="fade-up" data-aos-delay="450">


          <div>
            <h1 className="text-6xl font-bold text-gray-600 mb-4">04</h1>

            <h2 className="text-3xl font-semibold mb-4">Frontend Project</h2>
            <h1 className='text-2xl text-green-400 font-bold'>SOUL ROUTES</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
             Travel Agency Website using HTML,CSS and BOOTSTRAP</p>
           

            <p className="text-green-400 font-medium mb-8">
              Html 5, Css 3, Bootstrap
            </p>


            <div className="flex gap-4">
              <Link to={"https://travel-agency-project-theta.vercel.app/"} >
                <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <FiArrowUpRight size={22} />
                </button>
              </Link >

              <Link to={"https://github.com/Amalr12/travel-agency-project.git"}>
                <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <FiGithub size={22} />
                </button>
              </Link>
            </div>
          </div>


          <div className="flex justify-center">
            <img
              src="public/souls.png"
              alt="Project screenshot"
              className="rounded-xl shadow-lg border border-white/10"
            />
          </div>

        </div>
      </section>
      <Footer />
    </>
  )
}

export default Projects