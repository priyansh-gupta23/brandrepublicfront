'use client'
import React from 'react'
import '../global.css'
import Nav from 'react-bootstrap/Nav';
import front from '../asset/front.jpg'
import Image from 'next/image'
import { Container } from 'react-bootstrap';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'
import hoardingbanner from '../asset/outdoorhoarding.webp'
import digitalooh from '../asset/digital1-ooh.webp'
import radiojingle from '../asset/radio-jingle-ooh.webp'
import radiorj from '../asset/radio-rj-ooh.webp'
import cinemacommn from '../asset/cinema-comm-ooh.webp'
import inshop from '../asset/inshop-branding-ooh.webp'
import outshop from '../asset/outshop-branding-ooh.webp'
import mallbranding from '../asset/mall-brandingh-ooh.webp'
import displayrack from '../asset/display-rack-ooh.webp'
import cinemaslide from '../asset/cinema-slide-ooh.webp'
import auto from '../asset/auto-hood-ooh.webp'
import roadshow from '../asset/road-show.webp'
import magzinedisplay from '../asset/magzine-display.webp'
import magzinearticle from '../asset/magzine-article.webp'
import newspaper from '../asset/newspaper.webp'
import pamplet from '../asset/pamplet.webp'
import offset  from '../asset/offset-printing.webp'
import umbrella  from '../asset/umbrella-ooh.webp'
import noparking  from '../asset/no-parking-ooh.webp'
import ebills  from "../asset/e-bills-ooh.webp"
import ballon  from '../asset/ballon-ooh.webp'
import smartcard  from '../asset/smart-card-ooh.webp'
import tricycle from '../asset/tricycle-ooh.webp'
import lookwalker from '../asset/look-walker-ooh.webp'
import canter from '../asset/canter-ooh.webp'
import bus from '../asset/bus-ooh.webp'
import cab from '../asset/cab-ooh.webp'
import train from '../asset/train-exp-ooh.webp'
import traininside from '../asset/train-inside.webp'
import displayooh from '../asset/display1-ooh.webp'
import poles from '../asset/poles-ooh.webp'
import ledvan from '../asset/led-van-ooh.webp'
import busshelter from '../asset/bus-selter.webp'
import hording from '../asset/hording.webp'
import unipole from '../asset/unipole.webp'
import 'swiper/modules/navigation.min.css';
import digitalmedia from '../asset/digital-media.webp'  
import airplanein from '../asset/airplane-in.webp'
import airport from '../asset/airport.webp'
import airlineblue from '../asset/airline_blue.png'
import outdoorblue from '../asset/outdoor_blue.png'
import printmediablue from '../asset/print-media_blue.png'
import digitalblue from '../asset/digital_blue.png'
import displayblue from '../asset/display_blue.png'
import mallblue from '../asset/mall_blue.png'
import nonblue from '../asset/non-traditional_blue.png'
import transportblue from '../asset/transit_blue.png'
import crtblue from '../asset/crt_blue.png'
import conta from '../asset/conta.avif'
import atlbtlttl from '../asset/atlbtlttl.webp'
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

      <div className='p-1 d-flex position-relative '  
      fade style={{ fontFamily: 'Gilroy Light',
       fontFamily: 'Gilroy ExtraBold'}}>
            <Carousel.Caption className=' p-5 mb-5 z-2'>
              <p>Impactful OOH Advertisement</p>
              <hr/>
                <p className='  display-4 d-flex justify-content-center 
                  lh-sm  fw-light text-center  fw-semibold 
                text-white ' style={{fontFamily: 'Gilroy ExtraBold'}}>OUT-OF-HOME ADVERTISING <br/>
                CAMPAIGNS</p>
                
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
          WE HAVE EXPERTISE IN ATL,BTL AND TTL
        </p>
        <br/>
        <p className='h2 'style={{fontFamily: 'Gilroy ExtraBold'}}>
          WE CAN HELP YOU WITH <br/>ATL, BTL, AND TTL <br/>MARKETING
        </p><br/>

        <p className='display-6 mt-2' style={{fontFamily: 'Gilroy Light'}}>Above The Line</p>
        <p>
        Advertising refers to advertising messages that are broadcast to 
        'the masses' without any sophisticated form of targeting. these messages 
        go out to large audiences via traditional offline media such as tv ads,
        radio, newspapers, magazines and out of home billboards.
        </p>

        <p className='display-6 mt-2' style={{fontFamily: 'Gilroy Light'}}>Below The Line</p>
        <p>
        Advertising is an advertising strategy where products are promoted in media other than
         mainstream radio or television. below-the-line advertising campaigns
         include direct mail campaigns, trade shows, catalogs,
          and targeted search engine marketing.
        </p>

        <p className='display-6 mt-2' style={{fontFamily: 'Gilroy Light'}}>Through The Line</p>
        <p>
        Advertising is an advertising strategy where products are promoted in media other than
        Marketing is the integration of both ATL and BTL marketing 
        activities to create a consistent and coherent message across all channels and platforms.
        </p>

    
        </div>
        <div className='w-50 ms-4'>
          <p>We are a team of creative professionals who can help you with your marketing needs.
             We have expertise in ATL (Above The Line), BTL (Below The Line), and TTL 
             (Through The Line) marketing activities, which means we can design and execute
            campaigns that reach your target audience through various channels and platforms.</p>

            <Image className='py-5 mt-5'
            src={atlbtlttl}
            width={480}
            height={400}     

            />
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

      <div className='container bg-info w-100  p-5 '>
        <div className='d-block align-items-center'>
        <p className='h5 fw-bold mb-3 text-white d-flex justify-content-center'
         style={{fontFamily:'Gilroy ExtraBold '}}>WHAT WE HAVE DONE </p>
         <span className='fw-bolder display-2 mt-3 text-white d-flex justify-content-center ' 
            style={{ fontFamily: 'Gilroy ExtraBold' }}>OUR SERVICES</span>
        </div>
      </div> 
      
      <div className='container '>
        <p className='display-6 fw-bold my-5 d-flex justify-content-center' 
        style={{fontFamily:'Gilroy Light'}}>Airport / Airline Advertisement</p>

        <div className=' d-flex justify-content-between'>
        <div className='  w-25 h-25 container overflow-hidden rounded' >
              <Image className='cardimg  cardimg rounded '
                src={airport} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bold mt-4' style={{fontFamily:"Gilroy Extrabold"}}>AIRPORT ADS</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={airplanein} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>IN-FLIGHTS ADS</p>
        </div>
        </div>
      </div>

      <div className='container '>
        <p className='display-6 fw-bold my-5 d-flex justify-content-center' 
        style={{fontFamily:'Gilroy Light'}}>Hoardings / Banners</p>

        <div className=' d-flex mt-4 justify-content-between'>
        <div className='container w-25 h-25  '>
              <Image className='cardimg rounded '
                src={busshelter} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bold mt-4' style={{fontFamily:"Gilroy Extrabold"}}>BUS SHELTER</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={unipole} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>UNIPOLE</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={hording} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                HORDING</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={hoardingbanner} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                HORDING BANNER</p>
        </div>
        </div>
      </div>

       <div className='container '>
        <p className='display-6 fw-bold my-5 d-flex justify-content-center' 
        style={{fontFamily:'Gilroy Light'}}>DIGITAL / DISPLAY</p>

        <div className=' d-flex  justify-content-between'>
        <div className='container w-25 h-25  '>
              <Image className='cardimg rounded '
                src={poles} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bold mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                POLE KIOSK</p>
        </div>


        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={ledvan} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-2 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                LED VAN
              </p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={digitalooh} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-2 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                DIGITAL BILLBOARD
              </p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={displayooh} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-2 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                DISPLAY SCREEN
              </p>
        </div>
        </div>
      </div>
    

      <div className='container '>
        <p className='display-6 fw-bold my-5 d-flex justify-content-center' 
        style={{fontFamily:'Gilroy Light'}}>Transit Media</p>

        <div className=' d-flex  justify-content-between'>
        <div className='container w-25 h-25  '>
              <Image className='cardimg rounded '
                src={auto} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bold mt-4' style={{fontFamily:"Gilroy Extrabold"}}>AUTO HOOD</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={bus} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                BUS</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={cab} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                CAB / TAXI</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={train} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                TRAIN MAIL / EXP</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={traininside} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                METRO RAIL AD</p>
        </div>
        </div>
      </div>

      <div className='container '>
        <p className='display-6 fw-bold my-5 d-flex justify-content-center' 
        style={{fontFamily:'Gilroy Light'}}>Road Show Activities</p>

        <div className=' d-flex justify-content-between'>
        <div className='container w-25 h-25  '>
              <Image className='cardimg rounded '
                src={roadshow} 
                width={250}
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bold mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                ROAD SHOW</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={canter} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                CANTER</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={lookwalker} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                LOOK WALKER</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={tricycle} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                TRICYCLE</p>
        </div>
        </div>
      </div>


      <div className='container '>
        <p className='display-6 fw-bold my-5 d-flex justify-content-center' 
        style={{fontFamily:'Gilroy Light'}}>Cinema / Radio / Television</p>

        <div className=' d-flex  justify-content-between'>
        <div className='container w-25 h-25  '>
              <Image className='cardimg rounded '
                src={cinemacommn} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bold mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                CINEMA/MOVIE AD</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={cinemaslide} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                CINEMA SLIDE</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={radiojingle} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                RADIO JINGLE</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={radiorj} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                RADIO RJ</p>
        </div>
        </div>
      </div>
      
      
      <div className='container '>
        <p className='display-6 fw-bold my-5 d-flex justify-content-center' 
        style={{fontFamily:'Gilroy Light'}}>MAll Advertising</p>

        <div className=' d-flex  justify-content-between'>
        <div className='container w-25 h-25  '>
              <Image className='cardimg rounded '
                src={outshop} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bold mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                OUT SHOP</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={inshop} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                IN SHOP</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={mallbranding} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                MALL BRANDING</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={displayrack} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                DISPLAY RACK</p>
        </div>
        </div>
      </div>

      <div className='container '>
        <p className='display-6 fw-bold my-5 d-flex justify-content-center' 
        style={{fontFamily:'Gilroy Light'}}>Print Media / Offset Printing</p>

        <div className=' d-flex  justify-content-between'>
        <div className='container w-25 h-25  '>
              <Image className='cardimg rounded '
                src={magzinedisplay} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bold mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                MAGZINE DISPLAY</p>
        </div>

        <div className='container w-25 h-25  '>
              <Image className='cardimg rounded '
                src={newspaper} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bold mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                NEWSPAPER ADS</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={magzinearticle} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                MAGZINE ARTICLE</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={offset} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                OFFSET PRINTING</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={pamplet} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                PAMPLET AD</p>
        </div>
        </div>
      </div>
     

      <div className='container '>
        <p className='display-6 fw-bold my-5 d-flex justify-content-center' 
        style={{fontFamily:'Gilroy Light'}}>Other Non-Traditoinal</p>

        <div className=' d-flex  justify-content-between'>
        <div className='container w-25 h-25  '>
              <Image className='cardimg rounded '
                src={smartcard} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bold mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                SMART CARD</p>
        </div>

        <div className='container w-25 h-25  '>
              <Image className='cardimg rounded '
                src={noparking} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bold mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
               NO PARKING</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={umbrella} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                UMBRELLA</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={ebills} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                ELECTRICITY BILL</p>
        </div>

        <div className='container w-25 h-25 '>
              <Image className='cardimg  rounded  '
                src={ballon} 
                
                height={150}
                alt="Sample Image"/>
              <p className='z-3 ms-5 fw-bolder mt-4' style={{fontFamily:"Gilroy Extrabold"}}>
                BALLON</p>
        </div>
        </div>
      </div>
     
      <div className='container '>
      <div className=' p-4 bg-info mt-5 mb-2'style={{fontFamily:'Gilroy Light'}}>
        <h2 className='d-flex justify-content-center fw-bolder text-white ' style={{fontFamily:
          'Gilroy Light'}}>Digital Marketing</h2>
      </div>
        <h5 className=' d-flex justify-content-center fw-bolder text-black'style={{fontFamily:
          'Gilroy Light'}}>Grow your business with 
        our digital marketing services</h5>

          <div className='w-100 d-flex '>

          <div className=' text-dark w-50 '>
            <h5 className='fw-bolder mt-5' style={{fontFamily:"Gilroy light"}} >We offer a wide range of digital marketing services to suit your needs and goals, 
              such as:</h5>
              <p>Facebook Ads Management: We help you create and manage effective Facebook ads 
                campaigns and generate leads and sales.<br/>

Social Media Marketing: We help you build and maintain a strong social media presence
 that engages your followers and increases your brand awareness.<br/>

Google Ads Management: We manage Google ads campaigns that drive qualified traffic and conversions to your website.

Content Marketing: We help you create and distribute valuable content.

Link Building: We help you acquire high-quality backlinks from authoritative websites that boost your domain authority and ranking.</p>
          </div>
        <div className='w-50 ms-4'>
            <Image className='py-4 '
            src={digitalmedia}
            width={520}
            height={400}     
            />
        </div>
          </div>
        <p className='fw-bold text-info my-5'style={{fontFamily:"Gilroy Extrabold"}}>READY TO TAKE YOUR BUSINESS TO THE NEXT LEVEL WITH DIGITAL MARKETING? CONTACT US TODAY FOR A FREE CONSULTATION AND QUOTE.</p>

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

export default page;