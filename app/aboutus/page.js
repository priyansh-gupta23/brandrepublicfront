'use client'
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../global.css'
import Image from 'next/image'
import logo from '../asset/logo02.png'
import conta from '../asset/conta.avif'
import aboutus from '../asset/aboutus.jpg'
import { FaLocationPin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Carousel, Collapse, Card, Stack, NavLink } from 'react-bootstrap';
import { MdMail } from "react-icons/md";
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import g1 from '../asset/g1.png'
import g2 from '../asset/g2.png'

const page = () => {
  return (
    <>
     <div className='container-xxl z-3 position-absolute mt-2 mx-5 px-5 fs-0 d-flex 
      justify-content-around' style={{ color: 'white', fontFamily: 'Gilroy Light' }}>
        <Nav variant="pills" activeKey="0" style={{ position: 'fixed' }}>
          <div className='nav d-flex rounded mt-3 justify-content-around text-black p-3'>
            <Nav.Item>
              <div className='d-flex justify-content-around'>

            {/* <Image className='me-3 mx-1 z-3 w-100 '
                src={g2}
                width={80}
                alt="LOGO"/> */}
                <div className='bg-white rounded w-100 me-5 p-2'>

                <Image className='me-3 mx-1 z-3 w-100 '
                src={logo}
                width={150}
                alt="LOGO"/>
                </div>
              </div>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  href="/home"className='text-black fw-semibold' eventKey="1" title="Item">
                HOME
              </Nav.Link>
            </Nav.Item>
            <NavDropdown className='text-black fw-semibold' title="ABOUT" id="nav-dropdown" style={{ color: 'white' }}>
              <NavDropdown.Item href='/aboutus' className=' fw-semibold' eventKey="4.1">ABOUT US</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className=' fw-semibold' eventKey="4.2">GALLERY</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link className='text-black fw-semibold' eventKey="2" title="Item">
                PORTFOLIO
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='text-black fw-semibold' eventKey="3" title="Item">
                NEWS & BLOGS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='text-black fw-semibold' eventKey="4" title="Item">
                CAREER
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/contactus' className='text-black fw-semibold' eventKey="5" title="Item">
                CONTACT US
              </Nav.Link>
            </Nav.Item>
            <NavDropdown className='text-black fw-semibold' title="SERVICES" id="nav-dropdown">
              <NavDropdown.Item href='/ooh'  eventKey="6.1">OOH ADVERTISING</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/eventmanagement' 
               eventKey="6.2">EVENT MANAGEMENT SERVICE</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Nav>
      </div>
      <div className='p-1 d-flex position-relative '  
      fade style={{ fontFamily: 'Gilroy Light',
       fontFamily: 'Gilroy ExtraBold'}}>
            <Carousel.Caption className=' p-5 mb-5 z-2'>
              <p>Who we are</p>
              <hr/>
                <p className='  display-4 d-flex justify-content-center 
                  lh-sm  fw-light text-center  fw-semibold 
                text-white ' style={{fontFamily: 'Gilroy ExtraBold'}}>TALENTED AND MOTIVATED <br/>
               PROFESSIONALS TEAM</p>
                
            </Carousel.Caption>
            <div className='bg-dark w-100 h-25'>
              <Image className='d-b lock w-100 opacity-25'
                src={conta}
                width={1800}
                height={600}
                alt="Sample Image" />
            </div>
      </div>

      <div className='container p-5 mt-5 w-100 d-flex justify-content-between' >
        <div className='w-50'>
        <p className='text-info 'style={{fontFamily: 'Gilroy ExtraBold'}}>
          ABOUT US.
        </p>
        <br/>
        <p className='h2 'style={{fontFamily: 'Gilroy ExtraBold'}}>
        TAKING ADVERTISING TO THE <br/>NEXT LEVEL.  
        </p><br/>

        <p>
        By taking care of our clients' Advertising and Marketing requirements, 
        they can focus on their business more efficiently. We offer customized, 
        uniquely suitable solutions to all our clients by understanding their specific requirements.
        </p>

        <p className='fw-bold '>WHO WE ARE </p>
        <hr className='color-info'/>

        <p>At the heart of our organization lies a commitment to values that drive us to 
            surpass limits and establish new industry standards.</p>
        <br/>
        <br/>
        <p>Embark on your brand's journey to equity with our strategic approach. 
           Creative has mastered project management and implementation through collaboration.</p>
        </div>

        <div className='w-50'>
        <Image className='p-1 m-5 w-50 '
                src={aboutus}
                height={400}
                alt="Sample Image" />
        </div>
      </div>

      <div className='container p-5 d-flex justify-content-around bg-light rounded w-75 mb-5' 
      style={{fontFamily:'Gilroy Light'}}>
        <div className='w-25'>
          <h4 className='fw-bold'>OUR MISSION</h4>
          <p  className='h6'>Embark on brand building through strategic excellence.
           Our industry expertise drives comprehensive solutions that transcend conventions.</p>
        </div>

        <div className='w-25'>
          <h4 className='fw-bold'>CORE VALUES</h4>
          <p  className='h6'>Guided by our intrinsic values, 
          we thrive as a purposeful organization, drawing inspiration to strive beyond limits.</p>
        </div>

        <div className='w-25'>
          <h4 className='fw-bold'>OUR PHILOSOPHY</h4>
          <p  className='h6'>Initiate brand elevation through a strategic approach,
           harnessing industry expertise to create impactful solutions.</p>
        </div>
      </div> 

      <div className='  footer w-100 h-25 bg-dark' style={{fontFamily:'Gilroy Light'}}>
        <div className='d-flex'>
      <p className='w-25 ms-3 my-3 p-5 text-white'>
      <Image src={logo} width={200} className='mb-3'/><br />
      As we take care of the Advertising & Marketing Requirements of our clients,
       we offer customized, unique, 
      and best-suitable solutions to 
      all our clients by understanding their requirements.
      </p>

      <div className='w-25 p-5 '>
      <p className='text-white my-3 fw-bold '>
        USEFULLINKS</p>
      <Link href="/home" className='d-block mb-2 text-decoration-none text-white'>About US</Link>
      <Link href="/ooh" className='d-block mb-2 text-decoration-none text-white'>Our Services</Link>
      <Link href="/home" className='d-block mb-2 text-decoration-none text-white'>Latest News</Link>
      <Link href="/home" className='d-block mb-2 text-decoration-none text-white'>Carrer</Link>
      <Link href="/contactus" className='d-block mb-2 text-decoration-none text-white'>Contact</Link>
      </div>

      <div className='w-25 p-5'>
      <p className='text-white my-3 fw-bold'>
       TOPSERVICES </p>
       <Link href="/ooh" className='d-block mb-2 text-decoration-none text-white'>Airport/Airlines Ads</Link>
      <Link href="/ooh" className='d-block mb-2 text-decoration-none text-white'>Hoarding Banner Ads</Link>
      <Link href="/ooh" className='d-block mb-2 text-decoration-none text-white'>Transit Media Ads</Link>
      <Link href="/ooh" className='d-block mb-2 text-decoration-none text-white'>Digital Display Ads</Link>
      <Link href="/ooh" className='d-block mb-2 text-decoration-none text-white'>Digital Marketing</Link>
      </div>
      
      <div className='text-white w-25 p-5'>
          
      <p className='text-white my-3 fw-bold '>
       CONTACT INFO 
      </p>
      <FaLocationPin/><span className='ms-2 my-2'>Plot No. 61, 3rd Floor, Near Shree Vatika Hotel, 
        Zone-I, M.P. Nagar Bhopal, M.P.<br/></span> 
      <MdMail /><span className='ms-2'>brandrepublic847@gmail.com</span><br/>
      <FaPhoneAlt /><span className='ms-2 '>91 9144660266</span>
      
      </div>
      </div>
      <div className='d-flex'>
      <p className='text-white mx-5 p-5'>Copyrights © 2024 Brand Republic All rights reserved.
       Designed & Developed By <a href='https://www.idroidbecanceindia.com/' className='text-decoration-none text-white'>IdroidBecance</a></p>
      <p className='text-white mx-5 p-5'>Privacy Policy | Terms & Conditions</p>
      </div>
      </div>
    </>
  )
}

export default page