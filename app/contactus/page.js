'use client'
import '../global.css'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import conta from '../asset/conta.avif'
import Image from 'next/image'
import contact from '../asset/contact.jpg'
import logo from '../asset/logo02.png'
import { MdMail } from "react-icons/md";
import {  Nav, NavDropdown } from 'react-bootstrap'
import { asyncquery } from '@/Store/Actions/queryaction'
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { FaLocationPin } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';


const page = () => {

  const [name, setName] = useState("");
  const [querytype, setquerytype] = useState("Advertising");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const dispatch = useDispatch();

  const queryHandler = (e) => {
    e.preventDefault();
    const newQuery = {
      name,
      querytype,
      contact,
      email,
      message
    };
    dispatch(asyncquery(newQuery));

    setName("");
    setmessage("")
    setEmail("")
    setContact("")
    setquerytype("")
  }

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

      <div className='p-1' fade style={{ fontFamily: 'Gilroy Light', fontFamily: 
      'Gilroy ExtraBold'
     }}>
            <Carousel.Caption className=' p-5 mb-5 z-2'>
              <p>Contact US</p>
              <hr className=''/>
                <p className=' display-4 text-center mb-5 py-5
                 lh-sm z-3 fw-light text-white 'style={{fontFamily:'Gilroy ExtraBold'}}>
                  KEEP IN TOUCH WITH US WITH <br />ANYTIME</p>
                <button className=' btn my-1 btn-info z- fw-bolder fs-6 mb-5
                text-start ' style={{ backgroundColor: '87d68d' }}>OUR SERVICES</button>
            </Carousel.Caption>

            <div className='bg-dark w-100 h-25'>
              <Image className='d-b lock w-100 opacity-25'
                src={conta}
                width={1800}
                height={600}
                alt="Sample Image" />
            </div>
      </div>
 
          <div className='container rounded d-flex position-relative justify-content-around 
          mt-5 w-75 bg-info my-5 '  style={{ fontFamily: 'Gilroy Light' }}>
             <div className='container rounded mx-3 my-5 p-2 w-75  bg-white '>  
             <div style={{ height: "90vh" }} className='w-100 d-flex align-items-center
              justify-content-center'>
        <form onSubmit={queryHandler} className=' continer p-2'>
          <p className='h3 mt-5 fw-bold'>Write To Us</p>
          <hr/>
          <div className="d-flex">
            <div className="mb-3 ">
              <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
              <input type="text" className="form-control border-3 border-3" id="name" value={name} 
              onChange={
                (e) => setName(e.target.value)}  />
            </div>
            
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label fw-semibold">Your Contact</label>
            <input type="tel" className="form-control border-3" id="contact" value={contact} onChange={
              (e) => setContact(e.target.value)} />
          </div>
          
          <div className="mb-3">
            <label htmlFor="querytype" className="form-label fw-semibold">Query</label>
            <select id="querytype" className="form-select border-3" onChange={
              (e)=> setquerytype(e.target.value)} >
              <option value="Advertising" defaultValue="Advertising">Advertising</option>
              <option value="Agency Connect">Agency Connect</option>
              <option value="Media Listing">Media Listing</option>
              <option value="Jobs/Career">Jobs/Career</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Your Email</label>
            <input type="email" className="form-control border-3" id="email" value={email} 
            onChange={(e) => setEmail(e.target.value)} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div> 

          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-semibold ">Type Your Message</label>
            <textarea type="text" className="form-control border-3" id="message" value={message} 
            onChange={
              (e) => setmessage(e.target.value)} />
          </div> 
          <button type="submit" className="btn btn-primary fw-bolder mb-5 ms-2">SEND MESSAGE</button>
        </form>
      </div>     
              </div>

              <div className='d-flex position-relative mx-5 w-75  '>
              <p className='fw-bold h2 text-white position-absolute bottom-50 end-50' 
              style={{fontFamily:'Gilroy ExtraBold'}}>Looking for more<br/>
            information?<br/>
            We would be glad to<br/>
            help you out!</p> 
            
            <Image className=' rounded '
                src={contact} 
                width={500}
                height={500}
                alt="Sample Image"/>
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
      <FaLocationPin/><span className='ms-2 my-3'>Plot No. 61, 3rd Floor, Near Shree Vatika Hotel, 
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