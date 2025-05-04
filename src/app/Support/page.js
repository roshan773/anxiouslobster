import React from 'react'
import { CiSearch } from "react-icons/ci";

const Support = () => {
  return (
    <div className='container-fluid'>
      <div className='container-fluid px-0'>
        <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_heroes/hero-banner-support-home.image.large_2x.jpg" className='w-100 img-fluid'></img>
      </div>

      <div className='container py-5'>
        <div className='display-3 fw-semibold text-center'>
          Apple Support
        </div>

        <div className='container d-flex justify-content-center align-items-center w-100 pt-3'>
          <div className='row justify-content-center text-center'>
            <div className='col-4 col-sm-3 col-md-2 col-lg-1 mb-4'>
              <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_navicons/image-grid-iphone-tn_2x.png" className='img-fluid mb-2' style={{ width: "200px", height: "200px", objectFit: "contain" }} />
              <div>iPhone</div>
            </div>
            <div className='col-4 col-sm-3 col-md-2 col-lg-1 mb-4'>
              <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_navicons/image-grid-mac-tn_2x.png" className='img-fluid mb-2' style={{ width: "200px", height: "200px", objectFit: "contain" }} />
              <div>Mac</div>
            </div>
            <div className='col-4 col-sm-3 col-md-2 col-lg-1 mb-4'>
              <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_navicons/image-grid-ipad-tn_2x.png" className='img-fluid mb-2' style={{ width: "200px", height: "200px", objectFit: "contain" }} />
              <div>iPad</div>
            </div>
            <div className='col-4 col-sm-3 col-md-2 col-lg-1 mb-4'>
              <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-watch-_2x.png" className='img-fluid mb-2' style={{ width: "200px", height: "200px", objectFit: "contain" }} />
              <div>Watch</div>
            </div>
            <div className='col-4 col-sm-3 col-md-2 col-lg-1 mb-4'>
              <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-apple-vision-pro_2x.png" className='img-fluid mb-2' style={{ width: "200px", height: "200px", objectFit: "contain" }} />
              <div>Vision</div>
            </div>
            <div className='col-4 col-sm-3 col-md-2 col-lg-1 mb-4'>
              <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-airpods_2x.png" className='img-fluid mb-2' style={{ width: "200px", height: "200px", objectFit: "contain" }} />
              <div>AirPods</div>
            </div>
            <div className='col-4 col-sm-3 col-md-2 col-lg-1 mb-4'>
              <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-tv_2x.png" className='img-fluid mb-2' style={{ width: "200px", height: "200px", objectFit: "contain" }} />
              <div>TV</div>
            </div>
          </div>
        </div>

        <div className='container py-5'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
              <img src="/Images/Support-page-image/ss2.png" className='w-100 img-fluid' style={{ borderRadius: "30px" }}></img>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
              <img src="/Images/Support-page-image/ss3.png" className='w-100 img-fluid' style={{ borderRadius: "30px" }}></img>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
              <img src="/Images/Support-page-image/ss4.png" className='w-100 img-fluid' style={{ borderRadius: "30px" }}></img>
            </div>
          </div>
        </div>

        <div className='container-fluid py-5 my-5 mx-5' style={{ backgroundColor: "#ffffff" }}>
          <div className='display-6 fw-semibold text-center mb-4'>
            Search Accessories
          </div>

          <div className="position-relative" style={{ maxWidth: "600px", margin: "0 auto" }}>
            <input
              type="search"
              className="form-control ps-5 py-2 rounded"
              placeholder="Search accessories"
            />
            <CiSearch
              className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"
              size={18}
            />
          </div>
        </div>
      </div>

      <div className='container-fluid py-5 d-flex justify-content-center align-items-center' style={{ backgroundColor: "#f5f5f7" }}>
        <div className='container'>
          <img src="/Images/Support-page-image/ss5.png" className='w-100 img-fluid' style={{ borderRadius: "30px" }}></img>
        </div>
      </div>

      <div className='container-fluid py-5' style={{ backgroundColor: "#f5f5f7" }}>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-6 col-lg-8'>
            <img src="/Images/Support-page-image/ss6.png" className='w-100 img-fluid'></img>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            <img src="/Images/Support-page-image/ss7.png" className='w-100 img-fluid'></img>
          </div>
        </div>
      </div>

      <div className='container-fluid py-5 d-flex justify-content-center align-items-center' style={{ backgroundColor: "#f5f5f7" }}>
        <div className='container' style={{borderRadius: "30px"}}>
          <img src="/Images/Support-page-image/ss8.png" className='w-100 img-fluid pt-4' style={{borderRadius: "30px"}}></img>
          <img src="/Images/Support-page-image/ss9.png" className='w-100 img-fluid pt-4' style={{borderRadius: "30px"}}></img>
        </div>
      </div>
    </div>
  )
}

export default Support