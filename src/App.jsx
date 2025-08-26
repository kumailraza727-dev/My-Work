import React from 'react'
import "./style.css"
import EmailForm from './Emailform'
import Navbar from './Navbar'
import About from './About'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

export default function App() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar mx-[15px] py-[30px] flex flex-row">
        {/* Left */}
        <div className='nav-left w-[20%]'>
          <img src="https://rogarcomm.com/wp-content/uploads/2025/04/rOGER-Communication.webp" alt="site-logo" />
        </div>
        {/* Right */}
        <div className='nav-right w-[75%] flex flex-wrap justify-end content-end'>
          <ul className='flex gap-[30px]'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><HashLink smooth to="/#testimonials">Testimonials</HashLink></li>
            {/* <li><a href="">Refund Policy</a></li>
            <li><a>Terms and Conditions</a></li> */}
          </ul>
        </div>
      </div>
      {/* Navbar End}

      {/* Mobile Navbar */}

      <Navbar />

      {/* Mobile Navbar End */}
      
     {/* Hero Section */}
      <div className="hero-section relative flex items-center justify-center">
        <div className='items-center w-[100%] flex flex-col gap-[20px]'>
          <h3 className='text-[64px] font-semibold text-white flex leading-[74px] text-center'>
            Your Trusted Telecom <br /> Consultancy
          </h3>
          <p className='text-white'>Expert guidance for all your telecom needs today.</p>
          <a href="" className='text-center border border-white rounded-[50px] p-[10px] text-[20px] font-medium w-[12%] text-white cursor-pointer'>
            Get Started
          </a>

          <div className="hero-sections flex w-[100%] justify-around pt-[50px]">
            <div className='sec-1 flex flex-col gap-y-[10px] p-[25px] bg-[#FFFFFF1F] text-center w-[30%]'>
              <h2 className='flex justify-center text-white font-semibold'>Tailored Solutions</h2>
              <p className='text-white'>Customized telecom packages for your requirements.</p>
            </div>
            <div className='sec-2 flex flex-col gap-y-[10px] p-[25px] bg-[#FFFFFF1F] text-center w-[30%] '>
              <h2 className='flex justify-center text-white font-semibold'>Billing Support</h2>
              <p className='text-white'>Resolve network issues with our expert support.</p>
            </div>
            <div className='sec-3 flex flex-col gap-y-[10px] p-[25px] bg-[#FFFFFF1F] text-center w-[30%] '>
              <h3 className='flex justify-center text-white font-semibold'>Telecom Audits</h3>
              <p className='text-white'>Affordable financing options for your devices.</p>
            </div>
          </div>
        </div>
      </div>

      {/* First Section */}
      <div  className="first-sec flex justify-center py-[30px] content-end">
        <div className='left gap-[60px] flex flex-col w-[50%] content-start justify-center'>
          <h3 className='text-[48px] font-semibold flex leading-[58px] '>Your Trusted <br />Telecom <br /> Consultancy</h3>
          <p>Expert guidance for all your telecom needs today.</p>
          <a href="" className='text-center border border-black rounded-[50px] p-[10px] text-[20px] font-medium w-[20%] cursor-pointer'>
            Get Started
          </a>
        </div>
        <div className="right">
          <img className='w-[90%] rounded-[25px]' src="https://rogarcomm.com/wp-content/uploads/2025/04/6102334_xnPgQxtR8tpAK5tQFRmPIh0vLnDdApywjtstsoExofU.webp" alt="" />
        </div>
      </div>

      {/* Second Section
      <div id='about' className="second-sec flex justify-evenly pt-[30px] pb-[100px]  content-end gap-[60px]">
        <div className="left">
          <img className='w-[90%] rounded-[25px]' src="https://rogarcomm.com/wp-content/uploads/2025/04/RKXEW525TJA3EFJ5I2MDW1MKVAXNCH41VEY4RWQJIZLI3DVP.webp" alt="" />
        </div>
        <div className='right gap-[60px] flex flex-col w-[50%] content-start justify-center pl-[85px]'>
          <h3 className='text-[48px] font-semibold flex leading-[58px] '>Who We Are</h3>
          <p>At Rogar Communication, we empower individuals and businesses to navigate telecom choices with ease, ensuring tailored solutions for every need.</p>
        </div>
      </div> */}

      {/* Third Section
      <div id='services' className="third-sec bg-[#E6F7FF] flex pt-[50px] flex-col">
        <div className='w-[100%] flex flex-col items-center gap-[20px] '>
          <h3 className='text-[48px] font-semibold flex leading-[58px] '>Our Services</h3>
          <p>At Rogar Communication, we empower individuals and businesses to navigate telecom choices with ease, ensuring tailored solutions for every need.</p>
        </div>
        <div className="inner-sections flex w-[100%] justify-around pt-[50px]">
          <div className='sec-1 flex flex-col gap-y-[10px] p-[25px] bg-[#FFFFFF1F] text-center w-[30%]'>
            <img className='rounded-[25px]' src="https://rogarcomm.com/wp-content/uploads/2025/04/photo-1567872822303-59ec11c24dea.webp" alt="" />
            <h3 className='flex text-black font-semibold'>Network Issue Resolution</h3>
            <p className='text-[#847A8B] text-left'>We help resolve network issues quickly and efficiently, ensuring seamless connectivity for your services.</p>
          </div>
          <div className='sec-2 flex flex-col gap-y-[10px] p-[25px] bg-[#FFFFFF1F] text-center w-[30%] '>
            <img className='rounded-[25px]' src="https://rogarcomm.com/wp-content/uploads/2025/04/photo-1695136228645-afa4dba2c7de.webp" alt="" />
            <h3 className='flex text-black font-semibold'>Package Selection</h3>
            <p className='text-[#847A8B] text-left'>Assistance in choosing the right telecom packages that fit your specific needs and budget.</p>
          </div>
          <div className='sec-3 flex flex-col gap-y-[10px] p-[25px] bg-[#FFFFFF1F] text-center w-[30%] '>
            <img className='rounded-[25px]' src="https://rogarcomm.com/wp-content/uploads/2025/04/photo-1495156613386-c20b942f356d.webp" alt="" />
            <h3 className='flex text-black font-semibold'>Telecom Audits</h3>
            <p className='text-[#847A8B] text-left'>Comprehensive telecom audits for identifying savings and optimizing your current telecom services and expenses.</p>
          </div>
        </div>
      </div> */}

      {/* Fourth Section */}
      <div id='testimonials' className="fourth-sec bg-[#4A90E2]  flex py-[100px] flex-col align-center text-[20px] align-center text-center">
        <div className='w-[100%] flex flex-col items-center gap-[20px] '>
          <p>⭐⭐⭐⭐⭐</p>
          <p className='flex content-center justify-center w-[50%] text-white'>
            Rogar Communication transformed my telecom experience! Their expert guidance on package selection and negotiations saved me time and money. Highly recommend their services!
          </p>
          <img className='rounded-[25px]' src="https://rogarcomm.com/wp-content/uploads/2025/04/photo-1693735042481-ccf3ef8f5c1a.webp" alt="" />
          <p className='text-white'>John Doe</p>
        </div>
      </div>

      {/* Footer */}
      <div id='contact' className="footer bg-[#000] ] flex py-[50px] flex-col align-center text-[20px] align-center text-center px-[100px] gap-[20px]]">
        <div className='w-[100%] flex flex-row'>
          <div className='w-[33.3%] flex flex-col items-center gap-[20px] text-left '>
            <div className='gap-[20px] flex flex-col'>
              <h3 className='text-white font-semibold text-[23px] '>Services</h3>
              <p className='text-white text-[18px] text-left'>Expert telecom consultancy for informed decision-making.</p>
            </div>
          </div>

          <div className='w-[33.3%] flex flex-col items-center gap-[20px] text-left '>
            <div className='flex flex-col'>
              <h2 className='text-white font-semibold text-[23px] '>Support</h2>
              <div className='pt-[18px]'>
                <a href="tel:+1 866 456 6551">
                  <p className='text-white text-[18px] text-left'>+1 866 456 6551</p>
                </a>
                <p className='text-white text-[18px] text-left'>contact@rogarcommunication.com</p>
              </div>
            </div>
          </div>

          <div className='w-[33.3%] flex flex-col items-center gap-[20px] text-left '>
            <div className='flex flex-col'>
              <h2 className='text-white font-semibold text-[23px] '>Solutions</h2>
              <div className='pt-[18px] flex flex-col gap-[10px] '>
                <p className='text-white text-[18px] text-left'>Enter Your email address</p>
                <EmailForm />
              </div>
            </div>
          </div>
        </div>

        <div className='text-left gap-[20px] flex flex-col py-[20px]'>
          <p className='text-white'>At Rogar Communication, we empower individuals and businesses to navigate telecom choices with ease, ensuring tailored solutions for every need.</p>
          <p className='text-white'>Copyright © 2025. Rogar Communication All rights reserved.</p>

          <div className='flex flex-row gap-[20px]'>
            <img className='max-w-[4%] h-[auto] py-[10px]' src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=FFFFFF" alt="" />
            <img className='max-w-[4%] h-[auto] py-[10px]' src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="" />
            <img className='max-w-[4%] h-[auto] py-[10px]' src="https://img.icons8.com/?size=100&id=62852&format=png&color=FFFFFF" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
