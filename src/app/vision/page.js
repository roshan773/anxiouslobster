'use client';

import React, { useState } from 'react'
import { IoPlayCircleOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";

const Vision = () => {

  const [hover, setHover] = useState(false);

  return (
    <div className='container-fluid'>
      <div className='container-fluid px-5'>
        <img src="/Images/Vision -page-image/ss1.png" className='w-100 img-fluid' style={{ width: "100%", height: "980px", objectFit: "cover" }}></img>
      </div>

      <div className='container text-center' style={{ paddingBottom: "80px" }}>
        <h1 className='display-4 py-5 fw-bold'>Apple Vision Pro seamlessly blends digital content with your physical space.</h1>
        <h1 className='display-4 pb-5 fw-bold'>So you can work, watch, relive memories, and connect in ways never before possible.</h1>
        <h1 className='display-4 pb-5 fw-bold'>The era of spatial computing is here.</h1>
        <div className='d-flex justify-content-center align-items-center'>
          <div
            className='btn rounded rounded-pill'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              backgroundColor: hover ? '#f56300' : 'transparent',
              border: '4px solid #f56300',
              color: hover ? '#fff' : '#f56300',
              transition: 'all 0.3s ease',
              padding: "10px 40px"
            }}
          >
            <IoPlayCircleOutline style={{ color: hover ? '#fff' : '#f56300', marginRight: '8px', fontSize: "35px" }} />
            <span style={{ color: hover ? '#fff' : '#f56300', fontSize: "20px" }}>Watch the film</span>
          </div>
        </div>
      </div>

      <div className='container-fluid px-5'>
        <img src="https://www.apple.com/v/apple-vision-pro/g/images/overview/foundation/foundation_startframe__e3e7yqbgyvue_large.jpg" className='w-100 img-fluid pb-5'></img>
      </div>

      <div className='container-fluid d-flex justify-content-center align-items-center' style={{ width: "100%", height: "100vh" }}>
        <div>
          <div className='container d-flex justify-content-center align-items-center py-5'>
            <img src="https://www.apple.com/v/apple-vision-pro/g/images/overview/hero/apple_vision_pro_logo__ux94yix23r6y_large_2x.png" className='img-fluid w-25'></img>
          </div>

          <div className='contsiner d-flex justify-content-center align-itemd-center py-5'>
            <img src="https://www.apple.com/v/apple-vision-pro/g/images/overview/intro/hardware_base__ecl2v43j73o2_large_2x.jpg" className='img-fluid w-75'></img>
          </div>

          <div className='d-flex justify-content-center align-items-center'>
            <div
              className='btn rounded rounded-pill'
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                backgroundColor: hover ? '#000000' : 'transparent',
                border: '4px solid #000000',
                color: hover ? '#fff' : '#000000',
                transition: 'all 0.3s ease',
                padding: "10px 40px"
              }}
            >
              <FiPlus style={{ color: hover ? '#fff' : '#000000', marginRight: '8px', fontSize: "35px" }} />
              <span style={{ color: hover ? '#fff' : '#000000', fontSize: "20px" }}>Take a closer Look</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5" style={{ backgroundColor: "#f5f5f7" }}>
        <div className="text-center px-3">
          <h6 className="fw-semibold mb-3 display-6" style={{ color: '#1d1d1f' }}>
            Entertainment
          </h6>

          <h1
            className="fw-bold mx-auto"
            style={{
              color: '#1d1d1f',
              fontSize: '4vw', // Responsive font size
              maxWidth: '1300px',
              lineHeight: 1.2,
            }}
          >
            The ultimate theater.
            <br className="d-none d-md-block" />
            Wherever you are.
          </h1>

          <div className="pt-5">
            <img
              src="https://www.apple.com/v/apple-vision-pro/g/images/overview/experiences/entertainment/entertainment_a_startframe__eqosxjbd3xua_large.jpg"
              alt="Entertainment Visual"
              className="w-100 img-fluid"
              style={{ maxHeight: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <div className='container-fluid pb-5' style={{ backgroundColor: "#f5f5f7" }}>
        <div className='container d-flex justify-content-center pt-3 w-50'>
          <div className='display-6 fw-bold col-12 col-sm-12 col-md-6 col-lg-6'>A new dimension for entertainment.</div>
          <div className='fw-semibold col-12 col-sm-12 col-md-6 col-lg-6' style={{ fontSize: "24px", color: "#86868b" }}>
            Apple Vision Pro can transform any room into your own personal theater. Expand your movies, shows, and games to your perfect size and experience them in Spatial Audio. Apple Immersive Video puts you in the center of the action with mind‑blowing immersion. And with more pixels than a 4K TV for each eye, you can enjoy stunning content wherever you are — on a long flight or the couch at home.
            <div
              className='btn rounded rounded-pill mt-3'
              style={{
                backgroundColor: hover ? '#f56300' : '#f56300',
                border: '4px solid #f56300',
                color: hover ? '#fff' : '#fff',
                transition: 'all 0.3s ease',
                padding: "10px 40px"
              }}
            >
              <FiPlus style={{ color: hover ? '#fff' : '#fff', marginRight: '8px', fontSize: "35px" }} />
              <span style={{ color: hover ? '#fff' : '#fff', fontSize: "20px" }}>Learn more about Entertainment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="text-center px-3">
          <h6 className="fw-semibold mb-3 display-6" style={{ color: '#1d1d1f' }}>
            Productivity
          </h6>

          <h1
            className="fw-bold mx-auto"
            style={{
              color: '#1d1d1f',
              fontSize: '4vw', // Responsive font size
              maxWidth: '1300px',
              lineHeight: 1.2,
            }}
          >
            A workspace with
            <br className="d-none d-md-block" />
            infinite space.
          </h1>

          <div className="pt-5">
            <img
              src="https://www.apple.com/v/apple-vision-pro/g/images/overview/experiences/productivity/productivity_a_startframe__b78h8iwbcw76_large.jpg"
              alt="Entertainment Visual"
              className="w-100 img-fluid"
              style={{ maxHeight: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <div className='container-fluid pb-5' style={{ backgroundColor: "#f5f5f7" }}>
        <div className='container d-flex justify-content-center pt-3 w-50'>
          <div className='display-6 fw-bold col-12 col-sm-12 col-md-6 col-lg-6'>Discover new ways to work.</div>
          <div className='fw-semibold col-12 col-sm-12 col-md-6 col-lg-6' style={{ fontSize: "24px", color: "#86868b" }}>
            Apple Vision Pro gives you limitless space to do your best work. Organize everything you need anywhere around you, in any way you like. Write, express yourself, and get things done effortlessly with Apple Intelligence — all with groundbreaking privacy protections.5 Seamlessly bring in your Mac workflows using Mac Virtual Display. And connect a Magic Keyboard, a Magic Trackpad, and other Bluetooth accessories to expand how you navigate.
            <div
              className='btn rounded rounded-pill mt-3 d-block'
              style={{
                backgroundColor: hover ? '#f56300' : '#f56300',
                border: '4px solid #f56300',
                color: hover ? '#fff' : '#fff',
                transition: 'all 0.3s ease',
                padding: "10px 40px"
              }}
            >
              <FiPlus style={{ color: hover ? '#fff' : '#fff', marginRight: '8px', fontSize: "35px" }} />
              <span style={{ color: hover ? '#fff' : '#fff', fontSize: "20px" }}>Learn more about Productivity</span>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Vision