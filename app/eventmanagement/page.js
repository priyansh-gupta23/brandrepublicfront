'use client'
import React from 'react'
import '../global.css'
import Nav from 'react-bootstrap/Nav';
import front from '../asset/front.jpg'
import corporate from '../asset/copperate_event.jpg'
import personal from '../asset/personal_event.jpeg'
import birthday from '../asset/images.jpeg'
import conta from '../asset/conta.avif'
import g2 from '../asset/g2.png'
import g1 from '../asset/g1.png'
import Image from 'next/image'
import 'swiper/modules/navigation.min.css';
import event from '../asset/female-wedding-planner-working-with-bride-groom.jpg'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Carousel } from 'react-bootstrap';
import Link from 'next/link';
import { MdMail } from "react-icons/md";
import { FaLocationPin } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import logo from '../asset/logo02.png'


// SwiperCore.use([Navigation, Pagination]);
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

      <div className='p-1 d-flex position-relative '  fade style={{ fontFamily: 'Gilroy Light',
       fontFamily: 'Gilroy ExtraBold'}}>
            <Carousel.Caption className=' p-5 mb-5 z-2'>
              <p className=''>Ultimate Event Management</p>
              <hr/>
                <p className='  display-5 d-flex justify-content-center 
                  lh-sm  fw-light text-center  fw-semibold 
                text-white mb-5' style={{fontFamily: 'Gilroy ExtraBold'}}>ONE STEP SOLUTIONS FOR ALL YOUR
                   <br/>EVENT NEEDS</p>
                
                
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
        <br/>
        <p className='h2 'style={{fontFamily: 'Gilroy ExtraBold'}}>
        YOUR ONE-STOP SOLUTION FOR ALL YOUR EVENT NEEDS
        </p><br/>

        <p>
        Whether you are planning a corporate event, a personal celebration, a wedding, 
        or a birthday, Brand Republic is the event management agency you need. We are a 
        team of creative and professional event planners who can handle every aspect of your event,
         from concept to execution. We offer customized and innovative solutions that suit your 
         budget, theme, and vision. We have the experience and expertise to make your event 
         memorable and infoful. Contact us today and let us turn your dreams into reality.<br/><br/>

      Do you want to make your next event unforgettable? Whether it’s a corporate event, a
      personal celebration, a wedding, or a birthday, Brand Republic is the event management agency
      you can trust.
        </p>
        </div>
        <div className='w-50 ms-4 mt-5'>
            <Image className='py-5 mt-5'
            src={event}
            width={480}
            height={400}     
            />
        </div>
      </div>
      <div className='container p-5 d-flex justify-content-around bg-light rounded w-75 mb-5' 
      style={{fontFamily:'Gilroy Light'}}>
        <div className='w-25'>
          <h4 className='fw-bold'>STRATEGY</h4>
          <p  className='h6'>We offer customized and innovative solutions that suit your budget, 
            theme, and vision of your event.</p>
        </div>

        <div className='w-25'>
          <h4 className='fw-bold'>Creative</h4>
          <p  className='h6'>We design and produce invitations, decorations,
           and other elements that make your event unique and memorable.</p>
        </div>

        <div className='w-25'>
          <h4 className='fw-bold'>EXECUTION</h4>
          <p  className='h6'>We take care of the venue, catering, transportation, security,
           and other logistics of your event.</p>
        </div>
      </div> 

      <div className='caro-item container d-flex overflow-x-scroll w-75 '
             style={{ fontFamily: 'Gilroy Light' }}>

      

              <div className=" mb-5 me-5  rounded" style={{ minWidth: "18rem", maxWidth: "20rem" }}>
                <div className=' w-100 '>
                  <Image src={corporate} 
                  height={250}
                  width={250}
                   className="cardimg card-img-top rounded" alt="..." />
                </div>
                <div className="card-body ">
                  <h5 className=" card-title fw-bolder ms-2 my-5 " style={{ fontFamily: 
                    'Gilroy Light' }}>CORPORATE EVENTS</h5>
                  <p className="card-text ms-2 mt-3">Empower your brand with impactful advertising at corporate events. .</p>
                  <a href="#" className="border ms-3 text-decoration-none border-info text-dark px-4 py-1 fw-bolder border-2" >Explore Now</a>
                </div>
              </div>

              <div className=" mb-5 me-5  rounded" style={{ minWidth: "18rem", 
              maxWidth: "20rem" }}>
                <div className=' w-100 '>
                  <Image src={personal} 
                  height={250}
                  width={250}
                   className="cardimg card-img-top rounded " alt="..." />
                </div>
                <div className="card-body ">
                  <h5 className="card-title fw-bolder ms-2 my-5 " style={{ fontFamily: 
                    'Gilroy Light' }}>PERSONAL EVENTS</h5>
                  <p className="card-text ms-2 mt-3">Bringing your personal events to life with unforgettable advertising.</p>
                  <a href="#" className="border ms-3 text-decoration-none border-info text-dark px-4 py-1 fw-bolder border-2" >Explore Now</a>
                </div>
              </div>

              <div className=" mb-5 me-3  rounded" style={{ minWidth: "18rem", maxWidth: "20rem" }}>
                <div className=' w-100 '>
                  <Image src={birthday} 
                  height={250}
                  width={250}
                   className="cardimg card-img-top rounded " alt="..." />
                </div>
                <div className="card-body ">
                  <h5 className="card-title fw-bolder my-5 ms-2" style={{ fontFamily: 
                    'Gilroy Light' }}>BIRTHDAY EVENTS</h5>
                  <p className="card-text ms-2 mt-3">Make birthdays unforgettable with personalized advertising solutions that celebrate every moment..</p>
                  <a href="#" className="border ms-3 text-decoration-none border-info text-dark px-4 py-1 fw-bolder border-2" >Explore Now</a>
                </div>
              </div>
             </div>

        <div className='  footer w-100 h-25 bg-dark' style={{fontFamily:'Gilroy Light'}}>
        <div className='d-flex justify-content-between'>
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
      <p className='text-white mx-5 p-5'>Copyrights © 2024 Brand Republic All rights reserved. Designed & Developed By <a href='https://www.idroidbecanceindia.com/' className='text-decoration-none text-white'>IdroidBecance</a></p>
      <p className='text-white mx-5 p-5'>Privacy Policy | Terms & Conditions</p>
      </div>
      </div>


    </>
  )
}

export default page;