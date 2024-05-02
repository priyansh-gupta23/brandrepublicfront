'use client'  

import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../global.css'
import Image from 'next/image'
import { FaLocationPin } from "react-icons/fa6";
import digitaldisplay from '../asset/digital-display.webp'
import airport from '../asset/air-port.webp'
import road_show from '../asset/road-show.webp'
import { FaPhoneAlt } from "react-icons/fa";
import crt from '../asset/crt.webp'
import h01 from '../asset/h01.webp'
import digital_marketing from '../asset/digital-marketing.webp'
import events from '../asset/events.webp'
import outdoor from '../asset/outdoor-media.webp'
import transit from '../asset/transit-media.webp'
import front from '../asset/front.jpg'
import airlineblue from '../asset/airline_blue.png'
import outdoorblue from '../asset/outdoor_blue.png'
import printmediablue from '../asset/print-media_blue.png'
import digitalblue from '../asset/digital_blue.png'
import displayblue from '../asset/display_blue.png'
import mallblue from '../asset/mall_blue.png'
import nonblue from '../asset/non-traditional_blue.png'
import transportblue from '../asset/transit_blue.png'
import crtblue from '../asset/crt_blue.png'
import front02 from '../asset/front02.jpg'
import logo from '../asset/logo02.png'
import front03 from '../asset/front03.jpg'
import { Carousel, Collapse, Card, Stack, NavLink } from 'react-bootstrap';
import { MdMail } from "react-icons/md";
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';

const page = () => {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Trigger the transition when the component mounts
    setOpen(true)
  }, []);
   
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
      <div className=''>
        <Carousel className='p-1' fade style={{ fontFamily: 'Gilroy Light', 
        fontFamily: 'Gilroy ExtraBold' }}>
          <Carousel.Item>
            <Carousel.Caption className='mb-5'>
              <Collapse in={open} dimension="width" >
                <p className='animated-caption display-1
                 lh-sm z-3 fw-light text-start text-white 
                 text-xxl-start sticky-xxl-bottom  position-absolute'>AGENCY FOR <br /> OUTDOOR <br /> ADVERTISING</p>
              </Collapse>
              <Collapse in={open} dimension="height" style={{ delay: '2500ms' }}>
                <Link href='/ooh' className='animated-text btn my-1 btn-info text-white z-3 fw-bolder fs-6 
                text-start position-absolute d-flex justify-content-center'
                >OUR SERVICES</Link>
              </Collapse>
            </Carousel.Caption>
            <div className='bg-dark w-100 h-25'>
              <Image className='d-b lock w-100 opacity-25'
                src={front}
                width={1000}
                alt="Sample Image" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='bg-dark w-100 h-25'>
              <Image className='d-block w-100 opacity-25'
                src={front02}
                width={1800}
                height={700}
                alt="Sample Image" />
            </div>
            <Carousel.Caption className='mb-5'>
              <Collapse in={open} dimension="width" >
                <p className='animated-caption display-1 text-start lh-sm z-3 fw-semibold text-white 
                text-xxl-start sticky-xxl-bottom position-absolute'>BUILD YOUR<br />
                BRAND IMAGE<br />WITH US</p>
              </Collapse>
              <Collapse in={open} dimension="height" style={{ delay: '2500ms', transition: "10000ms ease" }}>
                <Link  href='/ooh' className='animated-text btn btn-info my-1 z-3 fw-bolder fs-6 text-start position-absolute d-flex justify-content-center'>OUR SERVICES</Link>
              </Collapse>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption className='mb-5'>
              <Collapse in={open} dimension="width">
                <p className=' animated-caption display-1 text-start lh-sm z-3 fw-semibold text-white text-xxl-start sticky-xxl-bottom position-absolute'>BUILD BRAND <br /> AWARENESS <br /> IMMEDIATLY</p>
              </Collapse>
              <Collapse in={open} dimension="height" style={{ delay: '2500s',
               transition: "10000ms ease" }}>
                <Link  href='/ooh' className='animated-text btn btn-info z-3 
                fw-bolder my-1 fs-6 text-start position-absolute d-flex justify-content-center'>
                  OUR SERVICES</Link>
              </Collapse>
            </Carousel.Caption>
            <div className='bg-dark w-100 h-25'>
              <Image className='d-block w-100 opacity-25'
                src={front03}
                width={1800}
                height={700}
                alt="Sample Image" />
            </div>
          </Carousel.Item>
        </Carousel>
        
        <div className='container  mb-5 py-5 d-flex justify-content-center bg-white'>
          <div className=' mt-2 d-flex justify-content-around  w-75 h-75 '>
            <div className='p-2'>
              <p className='fs-1 text-start mx-2 fw-bold lh-sm' style={{ fontFamily: 'Gilroy ExtraBold' }}>WE CREATE MASS <br /> PUBLIC'S EYE <br /> <span className='text-info'>ATTENTION</span> <br />
              </p>
              <span className='fw-bold mx-2 border-3  border-bottom border-info '>WHO WE ARE</span><br />
            </div>
            <div className='mx-5'>
              <p className='fs-5 lh-sm p-2 justify-content-start' >"Brand Republic" is an advertising agency & online<br />
                marketplace for advertisement, branding,<br />
                promotions, and brand awareness in India.
              </p>
              <div className='d-flex justify-content-between'>
                <span style={{ fontFamily: 'Gilroy ExtraBold' }} className='text-info fw-bold fs-1 '>250+<br /></span>
                <span style={{ fontFamily: 'Gilroy ExtraBold' }} className='text-info fw-bold fs-1 '>78K</span>
                <span style={{ fontFamily: 'Gilroy ExtraBold' }} className='text-info fw-bold fs-1 '>49+</span>
              </div>
              <div className='d-flex justify-content-between align-items-center grid gap-0 column-gap-3'>
                <p className='fw-normal g-col-6'>Screens Place </p>
                <p className='g-col-6'>People Reached </p>
                <p className='fw-normal g-col-6'>City Cover</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-info w-100 h-25 p-5 d-flex justify-content-between rounded'>
          <div className='d-block align-items-center'>
            <div className='bg-white p-2 rounded ' style={{ width: '7.2rem' }} >
              <Image className='d-block  '
                src={airlineblue}
                width={100}
                height={100}
                alt="Sample Image" />
            </div>
            <p className='text-white m-1 justify-content-center'>Airline/Airport</p>
          </div>

          <div className='d-block justify-content-centeralign-items-center'>
            <div className='bg-white p-2 rounded d-flex justify-content-center ' style={{ width: '7.2rem' }} >
              <Image className='d-block  '
                src={outdoorblue}
                width={100}
                height={100}
                alt="Sample Image" />
            </div>
            <p className='text-white m-1 ms-4'>Hoardings</p>
          </div>

          <div className='d-block align-items-center'>
            <div className='bg-white p-2 rounded ' style={{ width: '7.2rem' }} >
              <Image className='d-block '
                src={printmediablue}
                width={100}
                height={100}
                alt="Sample Image" />
            </div>
            <p className='text-white m-1 ms-4'>Print Ad</p>
          </div>

          <div className='d-block align-items-center'>
            <div className='bg-white p-2 rounded ' style={{ width: '7.2rem' }} >
              <Image className='d-block '
                src={crtblue}
                width={100}
                height={100}
                alt="Sample Image" />
            </div>
            <p className='text-white m-1 ms-3'>TV/Cinema</p>
          </div>

          <div className='d-block align-items-center'>
            <div className='bg-white p-2 rounded ' style={{ width: '7.2rem' }} >
              <Image className='d-block '
                src={digitalblue}
                width={100}
                height={100}
                alt="Sample Image" />
            </div>
            <p className='text-white m-1 ms-2'>Digital Media</p>
          </div>

          <div className='d-block align-items-center'>
            <div className='bg-white p-2 rounded ' style={{ width: '7.2rem' }} >
              <Image className='d-block '
                src={displayblue}
                width={100}
                height={100}
                alt="Sample Image" />
            </div>
            <p className='text-white m-1 ms-12'>Digital Display</p>
          </div>

          <div className='d-block align-items-center'>
            <div className='bg-white p-2 rounded d-flex justify-content-center' style={{ width: '7.2rem' }} >
              <Image className='d-block '
                src={mallblue}
                width={100}
                height={100}
                alt="Sample Image" />
            </div>
            <p className='text-white m-1 align-items-center ms-5'>Mall</p>
          </div>

          <div className='d-block align-items-center'>
            <div className='bg-white p-2 rounded ' style={{ width: '7.2rem' }} >
              <Image className='d-block '
                src={nonblue}
                width={100}
                height={100}
                alt="Sample Image" />
            </div>
            <p className='text-white m-1 '>Non-traditional</p>
          </div>

          <div className='d-block align-items-center justify-content-center'>
            <div className='bg-white p-2 rounded ' style={{ width: '7.2rem' }} >
              <Image className='d-block '
                src={transportblue}
                width={100}
                height={100}
                alt="Sample Image" />
            </div>
            <p className='text-white m-1 ms-2'>Transit Media</p>
          </div>

        </div>
        <div className='w-100 d-block py-5 '>
          <p className='fw-bold text-info text-center my-5'>WHAT WE DO<br /><br />
            <span href='/ooh' className='fw-bolder display-2 my-1 text-black' 
            style={{ fontFamily: 'Gilroy ExtraBold' }}>OUR SERVICES</span>
            <span className='text-info fw-bold display-1 '
             style={{ fontFamily: 'Gilroy ExtraBold' }}>.</span></p>
        </div>

        <Carousel  prevIcon={<span className="carousel-control-prev-icon " aria-hidden="true" />} nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" />}>
          <Carousel.Item className='caro-item'>
            <div className='caro-item container d-flex overflow-x-scroll w-75 '
             style={{ fontFamily: 'Gilroy Light' }}>
              <div className="card  me-3  rounded" style={{ minWidth: "18rem", maxWidth: "20rem" }}>
                <div className='bg-dark w-100 '>
                  <Image src={airport} className="card-img-top opacity-50" alt="..." />
                </div>
                <div className="card-body ">
                  <h5 className="card-title fw-bolder " style={{ fontFamily: 'Gilroy Light' }}>AIRLINE/TRAIN ADS</h5>
                  <p className="card-text">We create eye-catching and impactful billboards that reach
                    millions of potential customers on the road.</p>
                  <a href="#" className="border text-decoration-none border-info text-dark px-4 py-1 fw-bolder border-2" >Explore Now</a>
                </div>
              </div>

              <div className="card  me-3 rounded " style={{ minWidth: "18rem", maxWidth: "20rem" }}>
                <div className='bg-dark w-100'>
                  <Image src={crt} className="card-img-top opacity-50" alt="..." />
                </div>
                <div className="card-body  ">
                  <h5 className="card-title fw-bolder" style={{ fontFamily: 'Gilroy Light' }}>CINEMA/RADIO/TV</h5>
                  <p className="card-text">We offer cinema, radio and TV advertising, that can help you reach
                    a large and diverse audience with brand message.</p>
                  <a href="#" className="border text-decoration-none border-info text-dark px-4 py-1 fw-bolder border-2" >Explore Now</a>
                </div>
              </div>

              <div className="card  me-3 rounded" style={{ minWidth: "18rem", maxWidth: "20rem" }}>
                <div className='bg-dark w-100'>
                  <Image src={digital_marketing} className="card-img-top opacity-50" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bolder" style={{ fontFamily: 'Gilroy Light' }}>DIGITAL MEDIA ADS</h5>
                  <p className="card-text">These are screens or devices that display digital content,
                    such as images, videos, animations, or text.</p>
                  <a href="#" className="border text-decoration-none border-info text-dark px-4 py-1 fw-bolder border-2" >Explore Now</a>
                </div>
              </div>

              <div className="card  me-3 rounded" style={
                { minWidth: "18rem", maxWidth: "20rem" }}>
                <div className='bg-dark w-100'>
                  <Image src={events} className="card-img-top opacity-50" alt="..." />
                </div>
                <div className="card-body ">
                  <h5 className="card-title fw-bolder" style={{ fontFamily: 'Gilroy Light' }}>EVENT MANAGEMENT</h5>
                  <p className="card-text">We manage the planning and hosting a variety of public and private
                    events for social or business purposes.</p>
                  <a href="#" className="border text-decoration-none border-info text-dark px-4 py-1 fw-bolder border-2" >Explore Now</a>
                </div>
              </div>

              <div className="card  me-3 rounded" style={{ minWidth: "18rem", maxWidth: "20rem" }}>
                <div className='bg-dark w-100'>
                  <Image src={outdoor} className="card-img-top opacity-50" alt="..." />
                </div>
                <div className="card-body ">
                  <h5 className="card-title fw-bolder" style={{ fontFamily: 'Gilroy Light' }}>NON TRADITIONAL</h5>
                  <p className="card-text">Innovative and unconventional media formats, such as digital,
                    interactive, experiential, or ambient media.</p>
                  <a href="#" className="border text-decoration-none border-info text-dark px-4 py-1 fw-bolder border-2" >Explore Now</a>
                </div>
              </div>

              <div className="card  me-3 rounded" style={{ minWidth: "18rem", maxWidth: "20rem" }}>
                <div className='bg-dark w-100'>
                  <Image src={transit} className="card-img-top opacity-50" alt="..." />
                </div>
                <div className="card-body ">
                  <h5 className="card-title fw-bolder" style={{ fontFamily: 'Gilroy Light' }}>TRANSIT MEDIA ADS</h5>
                  <p className="card-text ">We create engaging & creative transit ads that capture the
                    attention of peoples on buses, trains, taxis and more.</p>
                  <a href="#" className="border text-decoration-none border-info text-dark px-4 py-1 fw-bolder border-2" >Explore Now</a>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

      </div>
      <div className='bg-info w-100 h-100 p-5  mt-5 d-block rounded'>
        <div className='d-flex justify-content-center '>
          <p className='fw-bold text-white text-center m-5'>TRENDING<br /><br />
            <span className='fw-bolder display-2 my-1 text-white' style={{ fontFamily: 'Gilroy ExtraBold' }}>TOP SERVICES</span></p>
        </div>

        <div className='container p-5 ms-5 d-flex justify-content-around position-relative'>
          <div className="card me-5 rounded bg-white overflow-hidden " style={{ minWidth: "18rem", maxWidth: "20rem" }}>
            <Image src={h01} height={350} className="card-img-top cardimg  " alt="..." />
            <div className=' position-absolute end-0 top-50 w-75 h-50 ms-5 bg-white z-2 p-2 rounded'>
              <p className=' fw-bold '>HOARDING / BANNERS</p>
              Billboard advertising has grown as technology
            </div>
          </div>

          <div className="card me-5 rounded bg-white overflow-hidden " style={{ minWidth: "18rem", maxWidth: "20rem" }}>
            <Image src={road_show} height={350} className="card-img-top cardimg" alt="..." />
            <div className=' position-absolute end-0 top-50 w-75 h-50 ms-5 bg-white z-2 p-2 rounded'>
              <p className=' fw-bold '>MOBILE / LED VAN</p>
              Advertising on a truck is a unique strategy to help.
            </div>
          </div>

          <div className="card me-5 rounded bg-white overflow-hidden " style={{ minWidth: "18rem",
           maxWidth: "20rem" }}>
            <Image src={digitaldisplay} height={350} className="card-img-top cardimg" alt="..." />
            <div className='position-absolute end-0 top-50 w-75 h-50 p-2 ms-5 bg-white z-2 rounded'>
              <p className=' fw-bold '>POLE KIOSK / DIGITAL DISPLAY</p>
              These are screens or devices that display digital content.
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-center'>

          <Link href='/ooh' className='p-2 btn bg-white fw-bold'>EXPLORE ALL SERVICES</Link>
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