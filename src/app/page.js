'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function Home() {

  return (
    <div className="container-fluid px-0">
      {/* Watch */}
      <div
        className="d-flex w-100 justify-content-center mb-3"
        style={{
          backgroundImage: "url('/Images/Home-page-image/Watch.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "400px",
          maxHeight: "800px",
          height: "80vh",
        }}
      >
        <div className="text-center" style={{ width: "100%", height: "100px" }}>
          <img
            src="/Images/Home-page-image/hero watch header.png"
            alt="Watch Header"
            className="img-fluid mb-3"
            style={{ width: "500px", height: "80px", objectFit: "contain" }}
          />
          <p className="text-dark display-1">Thinstant classic</p>
          <button className="btn btn-primary rounded-pill me-3 fw-bold" style={{ padding: "10px 20px" }}>Learn More</button>
          <button className="btn btn-outline-primary rounded-pill fw-bold" style={{ padding: "10px 20px" }}>Buy</button>
        </div>
      </div>

      {/* Ipad */}
      <div className="d-flex w-100 justify-content-center mb-3"
        style={{
          backgroundImage: "url('/Images/Home-page-image/hero ipad pro.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "400px",
          maxHeight: "800px",
          height: "80vh",
        }}
      >
        <div className="text-center pt-4">
          <p className="text-light fw-bold display-1">iPad Pro</p>
          <p className="text-light display-5">Unbelievely thin. Incredibly Powerful</p>
          <button className="btn btn-primary rounded-pill me-3 fw-bold" style={{ padding: "10px 20px" }}>Learn More</button>
          <button className="btn btn-outline-primary rounded-pill fw-bold" style={{ padding: "10px 20px" }}>Buy</button>
        </div>
      </div>

      {/* Iphone */}
      <div className="d-flex w-100 justify-content-center mb-3"
        style={{
          backgroundImage: "url('https://www.apple.com/v/home/cd/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_mediumtall_2x.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "400px",
          maxHeight: "800px",
          height: "80vh",
        }}
      >
        <div className="text-center pt-4">
          <p className="text-dark fw-bold display-2">iPad Pro</p>
          <p className="text-dark display-5">Meet the iPhone 16 family</p>
          <button className="btn btn-primary rounded-pill me-3 fw-bold" style={{ padding: "10px 20px" }}>Learn More</button>
          <button className="btn btn-outline-primary rounded-pill fw-bold" style={{ padding: "10px 20px" }}>Shop iPhone</button>
        </div>
      </div>

      {/* Mothers day and macbook */}
      <div className="container-fluid row align-items-center px-0 mb-2">
        <div className="col-6 col-sm-12 col-md-6 col-lg-6 px-1">
          <div className="d-flex w-100 justify-content-center mb-2"
            style={{
              backgroundImage: "url('https://www.apple.com/v/home/cd/images/promos/mothers-day-2025/promo_md25__ctgnskbynamq_large_2x.png')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              minHeight: "400px",
              maxHeight: "800px",
              height: "80vh",
              width: "100%"
            }}
          >
            <div className="d-flex justify-content-center align-items-end h-100 pb-5">
              <div className="text-center pt-4">
                <p className="text-dark display-5">Mothers Day</p>
                <p className="text-dark display-6">Find the perfect gift for mom</p>
                <button className="btn btn-primary rounded-pill me-3 fw-bold" style={{ padding: "10px 20px" }}>Learn More</button>
                <button className="btn btn-outline-primary rounded-pill fw-bold" style={{ padding: "10px 20px" }}>Shop iPhone</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-12 col-md-6 col-lg-6 pe-0">
          <div className="d-flex w-100 justify-content-center mb-2"
            style={{
              backgroundImage: "url('https://www.apple.com/v/home/cd/images/promos/macbook-air/promo_macbook_air_avail__e8ksaudoisey_large_2x.jpg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              minHeight: "400px",
              maxHeight: "800px",
              height: "80vh",
            }}
          >
            <div className="text-center pt-4">
              <p className="text-dark fw-bold display-5">MacBook</p>
              <p className="text-dark fs-4 text-center">Sky blue colour <br /> Sky high performance with M4</p>
              <button className="btn btn-primary rounded-pill me-3 fw-bold" style={{ padding: "10px 20px" }}>Learn More</button>
              <button className="btn btn-outline-primary rounded-pill fw-bold" style={{ padding: "10px 20px" }}>Shop iPhone</button>
            </div>
          </div>
        </div>
      </div>

      {/* mac does that  &  Trade in*/}
      <div className="container-fluid row align-items-center px-0 mb-2">
        <div className="col-6 col-sm-12 col-md-6 col-lg-6 px-1">
          <div className="d-flex w-100 justify-content-center mb-2"
            style={{
              backgroundImage: "url('https://www.apple.com/v/home/cd/images/promos/mac-does-that/promo_mac_does_that__ckozfqcs65w2_small_2x.jpg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              minHeight: "400px",
              maxHeight: "800px",
              height: "80vh",
              width: "100%"
            }}
          >
            <div className="d-flex justify-content-center h-100 pb-5">
              <div className="text-center pt-4">
                <img
                  src="https://www.apple.com/v/home/cd/images/logos/mac-does-that/promo_logo_mac_does_that__clw0vbszi002_small_2x.png"
                  alt="Watch Header"
                  className="img-fluid mb-3"
                  style={{ width: "250px", height: "80px", objectFit: "contain" }}
                />
                <p className="text-dark fs-4 text-center fw-bold">See how easy it is to switch mac</p>
                <button className="btn btn-primary rounded-pill me-3 fw-bold" style={{ padding: "10px 20px" }}>Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-12 col-md-6 col-lg-6 pe-0">
          <div className="d-flex w-100 justify-content-center mb-2"
            style={{
              backgroundImage: "url('https://www.apple.com/v/home/cd/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_small_2x.jpg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              minHeight: "400px",
              maxHeight: "800px",
              height: "80vh",
            }}
          >
            <div className="text-center pt-4">
              <img src="https://www.apple.com/v/home/cd/images/logos/iphone-tradein/promo_logo_iphone_tradein__7y3gtai5az66_small_2x.png" alt="chnage header" className="img-fluid mb-3" style={{ width: "250px", height: "80px", objectFit: "contain" }}></img>
              <p className="text-dark fs-4 text-center fw-semibold">get $170-$630 in credit when you <br />trade in iPhone 12 or higher <sup>1</sup></p>
              <button className="btn btn-primary rounded-pill me-3" style={{ padding: "10px 20px" }}>Get Your estimate</button>
            </div>
          </div>
        </div>
      </div>

      {/* deals and cards */}
      <div className="container-fluid row align-items-center px-0 mb-2">
        <div className="col-6 col-sm-12 col-md-6 col-lg-6 px-1">
          <div className="d-flex w-100 justify-content-center mb-2"
            style={{
              backgroundImage: "url('https://www.apple.com/v/home/cd/images/promos/carriers/promo_carrier__e0izvxwqosgi_small_2x.jpg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              minHeight: "400px",
              maxHeight: "800px",
              height: "80vh",
              width: "100%"
            }}
          >
            <div className="d-flex justify-content-center align-items-end h-100 pb-5">
              <div className="text-center pt-4">
                <p className="text-dark display-5 fw-bold">Carrier deals at Apple</p>
                <p className="text-dark fw-semibold fs-4">Get Upto $1000 in credit on <br /> A new iPhone Trade-in may <br /> be required <sup>2</sup></p>
                <button className="btn btn-primary rounded-pill me-3 fw-bold" style={{ padding: "10px 20px" }}>Learn More</button>
                <button className="btn btn-outline-primary rounded-pill fw-bold" style={{ padding: "10px 20px" }}>Shop iPhone</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-12 col-md-6 col-lg-6 pe-0">
          <div className="d-flex w-100 justify-content-center mb-2"
            style={{
              backgroundImage: "url('https://www.apple.com/v/home/cd/images/promos/apple-card-gradient/promo_apple_card__5cm7draujpey_small_2x.jpg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              minHeight: "400px",
              maxHeight: "800px",
              height: "80vh",
            }}
          >
            <div className="text-center pt-4">
              <img src="https://www.apple.com/v/home/cd/images/logos/iphone-tradein/promo_logo_iphone_tradein__7y3gtai5az66_small_2x.png" alt="chnage header" className="img-fluid mb-3" style={{ width: "250px", height: "80px", objectFit: "contain" }}></img>
              <p className="text-dark fs-4 text-center">Get Upto 3% Daily cash back <br /> with every purchase</p>
              <button className="btn btn-primary rounded-pill me-3 fw-bold" style={{ padding: "10px 20px" }}>Learn More</button>
              <button className="btn btn-outline-primary rounded-pill fw-bold" style={{ padding: "10px 20px" }}>Shop iPhone</button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="container-fluid" style={{ width: "100%", height: "auto", maxHeight: "800px", paddingBottom: "20px" }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={15}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true, paddingBottom: "-70px" }}
          // autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.3 },
            992: { slidesPerView: 1.5 },
            1200: { slidesPerView: 1.5 },
          }}
        >
          <SwiperSlide className="custom-slide">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/hjmYsl20uNCFQ9sqjiQIYw/1378x774.jpg" className="img-fluid" alt="Slide 1" style={{ width: "100%", height: "auto" }} />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/5geoozRQUAjDnWF2KLHyJg/1378x774.jpg" className="img-fluid" alt="Slide 2" style={{ width: "100%", height: "auto" }} />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/EUeDAPovZrBtOcrP2Da5Lw/1378x774.jpg" className="img-fluid" alt="Slide 3" style={{ width: "100%", height: "auto" }} />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/mlNnLrkeXFsJh7QVz4ZMsg/1378x774.jpg" className="img-fluid" alt="Slide 4" style={{ width: "100%", height: "auto" }} />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/Features/v4/b9/6c/68/b96c68d2-3728-e602-6e19-2ce0157335c1/284c3b0a-d043-4797-b7c8-23d6e8a981ab.png/1378x774.jpg" className="img-fluid" alt="Slide 5" style={{ width: "100%", height: "auto" }} />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/1378x774.jpg" className="img-fluid" alt="Slide 6" style={{ width: "100%", height: "auto" }} />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Shows Slider */}
      <div
        className="container-fluid"
        style={{ width: '100%', paddingBottom: '20px' }}
      >
        <Swiper
          modules={[Autoplay]}
          slidesPerView={'auto'}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={3000} // Adjust this to make it slower/smoother
          freeMode={{
            enabled: false,
            momentum: false,
          }}
          grabCursor={false}
        >
          {[
            "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/ff/13/26/ff132623-be0f-9875-aa85-34d39e123f55/fef47031-f444-4d4f-bc5b-da8d258eb112.png/572x322.jpg",
            "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/dc/cf/89/dccf8922-21e7-765c-edea-bca02bbb1300/a4ca9f85-f07a-458e-a753-ae8e1b875466.png/262x262sr.jpg",
            "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/03/36/de/0336dec4-8cdd-f206-03ce-4b68bdf29737/e0e01f1e-d50c-4154-835a-f1766ffa89da.png/572x322.jpg",
            "https://is1-ssl.mzstatic.com/image/thumb/mlNnLrkeXFsJh7QVz4ZMsg/1378x774.jpg",
            "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/b9/6c/68/b96c68d2-3728-e602-6e19-2ce0157335c1/284c3b0a-d043-4797-b7c8-23d6e8a981ab.png/1378x774.jpg",
            "https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/1378x774.jpg",
          ].map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="img-fluid"
                style={{ width: '100%' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* footer upper part */}
      <div className="container-fluid" style={{ backgroundColor: "#f5f5f7" }}>
        <div className="container mx-auto px-4 py-8 border-bottom">
          <p className=" text-sm">
            1. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.
          </p>
          <p className=" text-sm">
            2. AT&T iPhone 16 Special Deal: Monthly price (if shown) reflects net monthly payment, after application of AT&T trade-in credit applied over 36 months with purchase of an iPhone 16 Pro, iPhone 16 Pro Max, or iPhone 16, and trade-in of eligible smartphone. Receive credit with purchase of an iPhone 16 Pro or iPhone 16 Pro Max of either $1000, $830, or $350 (based upon the model and condition of your trade-in smartphone). Receive credit with purchase of an iPhone 16 of either $800 or $350 (based upon the model and condition of your trade-in smartphone). Max bill credits will not exceed the cost of the device. Requires upgrade of an existing line or activation of a new line and purchase of a new iPhone 16 Pro, iPhone 16 Pro Max, or iPhone 16, on qualifying 36 month 0% APR installment plan, subject to carrier credit qualification. Customers purchasing this offer through Apple cannot add the Next Up Anytime option. $0 down for well qualified customers only, or down payment may be required and depends on a variety of factors. Tax on full retail price due at sale. Requires activation on eligible AT&T unlimited plan. AT&T may temporarily slow data speeds if the network is busy. If you cancel eligible wireless service, credits will stop and you will owe the remaining device balance. Activation/Upgrade Fee: $35. Trade in device may not be on existing installment plan. Bill credits are applied as a monthly credit over the 36 month installment plan. Credits start within 3 bills. Will receive catchup credits once credits start. Wireless line must be on an installment agreement, active, and in good standing for 30 days to qualify. Installment agreement starts when device is shipped. To get all credits, device must remain on agreement for entire term and you must keep eligible service on device for entire installment term. Limited time offer; subject to change. Limits: one trade-in per qualifying purchase and one credit per line. May not be combinable with other offers, discounts, or credits. Purchase, financing, other limits, and restrictions apply. Price for iPhone 16 and iPhone 16 Plus includes $30 AT&T connectivity discount. Activation required.
          </p>
          <p className=" text-sm">
            Boost Mobile iPhone 16 Special Deal: Buy an iPhone 16 Pro, iPhone 16 Pro Max, iPhone 16, or iPhone 16 Plus and get $1000 in bill credits (not to exceed the cost of the iPhone) applied over 36 months. No trade-in required. If you are trading in a device with this deal, trade-in value will be applied as additional bill credits over 36 months. Monthly price (if shown) reflects net monthly payment, after application of $1000 in bill credit (not to exceed the cost of the iPhone purchased) and trade-in credit (if applicable) applied over 36 months respectively. Requires activation of a new line, Boost Mobile Infinite Access plan and purchase on qualifying 36-month 0% APR installment plan, subject to carrier credit qualification. After making 12 installment payments, you may upgrade to a new iPhone and get up to $1000 in bill credits (not to exceed the cost of the iPhone) applied over 36 months for the new iPhone on the Infinite Access plan and purchase on new qualifying 36-month 0% APR installment plan, subject to carrier credit qualification. Tax on full retail price due at sale. If you cancel eligible wireless service, credits will stop and you will owe the remaining device balance. Bill credits are applied as a monthly credit over the 36-month installment plan. Trade-in credits start within 3 bills. Installment agreement starts when device is shipped. To get all credits, device must remain on agreement for entire term and you must keep eligible service on device for entire installment term. Limited-time offer; subject to change. Limits: one credit per line. May not be combined with other offers, discounts, or credits. Purchase, financing, other limits, and restrictions apply. Price for iPhone 16 and iPhone 16 Plus includes $30 Boost Mobile connectivity discount. Activation required.
          </p>
          <p className=" text-sm">
            T‑Mobile iPhone 16 Special Deal: Monthly price (if shown) reflects net monthly payment, after application of T‑Mobile trade-in credit applied over 24 months with purchase of an iPhone 16 Pro, iPhone 16 Pro Max, iPhone 16, or iPhone 16 Plus and trade-in of eligible smartphone. Existing customers: Receive credit with purchase of an iPhone 16 Pro, iPhone 16 Pro Max, iPhone 16, or iPhone 16 Plus (based upon the model and condition of your trade-in smartphone) of $1000, $800, or $400 for customers on a Go5G Next plan (excluding 55, Military, First Responder plans); or $800 or $400 for customers on a Go5G Plus plan (excluding 55, Military, First Responder plans); or $800, $600, or $300 for customers on a Go5G Next 55, Military, or First Responder plan; or $600 or $300 for customers on a Go5G Plus 55, Military, or First Responder plan; or $500 or $250 for customers on a Go5G, Magenta/MAX, or Essentials plan. Must be an existing T‑Mobile customer. New or Add-a-Line customers: Receive credit with purchase of an iPhone 16 Pro, iPhone 16 Pro Max, iPhone 16, or iPhone 16 Plus (based upon the model and condition of your trade-in smartphone) of $1000, $800, or $400 for customers on a Go5G Next plan (excluding 55, Military, First Responder plans); or $800 or $400 for customers on a Go5G Plus plan (excluding 55, Military, First Responder plans); or $800, $600, or $300 for customers on a Go5G Next 55, Military, or First Responder plan; or $600 or $300 for customers on a Go5G Plus 55, Military, or First Responder plan; or $800 or $400 for customers on an Essentials, Simple Choice, TMO ONE/Plus, Magenta/MAX or Go5G plan (excluding 55, Military, First Responder plans); or $600 or $300 for customers on an Essentials 55 Choice, TMO ONE/Plus, Magenta/MAX & Go5G 55, Military, or First Responder plan. Must be a new T‑Mobile customer or adding a new line to an existing T‑Mobile account. Max bill credits will not exceed the cost of the device. Credit comprised of (i) Apple instant trade-in credit at checkout and (ii) T‑Mobile monthly bill credits applied over 24 months. Allow 2 bill cycles from valid submission and validation of trade-in. Tax on pre-credit price due at sale. Limited-time offer; subject to change. Qualifying credit, data plan, and trade-in in good condition required. Max 4 promotional offers on any iPhone per account. May not be combinable with some offers or discounts. Activation required. Contact T‑Mobile before cancelling service to continue remaining bill credits on current device, or credits stop & balance on required finance agreement is due.
          </p>
          <p className=" text-sm">
            Verizon iPhone 16 Special Deal: Monthly price (if shown) reflects net monthly payment, after application of Verizon trade-in credit applied over 36 months with purchase of an iPhone 16 Pro, iPhone 16 Pro Max, iPhone 16, or iPhone 16 Plus. Existing customers: Customers on an Unlimited Ultimate plan receive $830 credit (based upon the model and condition of your trade-in smartphone) with purchase of an iPhone 16 Pro, iPhone 16 Pro Max, iPhone 16, or iPhone 16 Plus. Customers on an Unlimited Plus plan receive $415 credit (based upon the model and condition of your trade-in smartphone) with purchase of an iPhone 16 Pro, iPhone 16 Pro Max, iPhone 16, or iPhone 16 Plus. Must be an existing Verizon customer. New or Add-a-Line customers: Customers on an Unlimited Ultimate plan receive $830 credit (based upon the model and condition of your trade-in smartphone) with purchase of an iPhone 16 Pro, iPhone 16 Pro Max, iPhone 16, or iPhone 16 Plus. Customers on an Unlimited Plus plan receive $830 credit (based upon the model and condition of your trade-in smartphone) with purchase of an iPhone 16 Pro, iPhone 16 Pro Max, iPhone 16, or iPhone 16 Plus. Customers on an Unlimited Welcome plan receive $830 credit (based upon the model and condition of your trade-in smartphone) with purchase of an iPhone 16 Pro, iPhone 16 Pro Max, iPhone 16, or iPhone 16 Plus. Must be a new Verizon customer or adding a new line to an existing Verizon account. Max bill credits will not exceed the cost of the device. Credit comprised of (i) Apple instant trade-in credit at checkout and (ii) Verizon monthly bill credits applied over 36 months. Customer must remain in the Verizon Device Payment Program for 36 months to receive the full benefit of the Verizon bill credits. Bill credits may take 1-2 bill cycles to appear. If it takes two cycles for bill credits to appear, you'll see the credit for the first cycle on your second bill in addition to that month's credit. Requires purchase and activation of a new iPhone 16 Pro, iPhone 16 Pro Max, iPhone 16, or iPhone 16 Plus with the Verizon Device Payment Program at 0% APR for 36 months, subject to carrier credit qualification, and iPhone availability and limits. Taxes and shipping not included in monthly price. Sales tax may be assessed on full value of new iPhone. Requires eligible unlimited service plan. Requires trade-in of eligible device in eligible condition. Must be at least 18 to trade-in. Apple or its trade-in partners reserve the right to refuse or limit any trade-in transaction for any reason. In-store trade-in requires presentation of a valid, government-issued photo ID (local law may require saving this information). In-store promotion availability subject to local law; speak to a Specialist to learn more. Limited-time offer; subject to change. Additional terms from Apple, Verizon, and Apple's trade-in partners may apply. Price for iPhone 16 and iPhone 16 Plus includes $30 Verizon connectivity discount. Activation required.
          </p>
          <p className=" text-sm">
            AT&T iPhone 15 Special Deal: Buy an iPhone 15 128 GB and get $513.36 in bill credits applied over 36 months. Buy an iPhone 15 256 GB and get $433.36 in bill credits applied over 36 months. Buy an iPhone 15 512 GB and get $453.36 in bill credits applied over 36 months. Requires upgrade of an existing line (or activation of a new line) and purchase on qualifying 36-month 0% APR installment plan, subject to carrier credit qualification. $0 down for well-qualified customers only, or down payment may be required and depends on a variety of factors. Tax on full retail price due at sale. Requires activation on eligible AT&T unlimited plan. AT&T may temporarily slow data speeds if the network is busy. If you cancel eligible wireless service, credits will stop and you will owe the remaining device balance. Activation/Upgrade Fee: $35. Bill credits are applied as a monthly credit over the 36-month installment plan. Credits start within 3 bills. Will receive catch-up credits once credits start. Wireless line must be on an installment agreement, active, and in good standing for 30 days to qualify. Installment agreement starts when device is shipped. To get all credits, device must remain on agreement for entire term and you must keep eligible service on device for entire installment term. Limited-time offer; subject to change. Limits: one credit per line. May not be combinable with other offers, discounts, or credits. Purchase, financing, other limits, and restrictions apply. Activation required.
          </p>
          <p className=" text-sm">
            T‑Mobile iPhone 15 Special Deal: Monthly price (if shown) reflects net monthly payment, after application of T‑Mobile trade-in credit applied over 24 months with purchase of an iPhone 15 or iPhone 15 Plus and trade-in of eligible smartphone. Existing customers: Receive credit with purchase of an iPhone 15 or iPhone 15 Plus (based upon the model and condition of your trade-in smartphone) of $1000, $800, or $400 for customers on a Go5G Next plan (excluding 55, Military, First Responder plans); or $800 or $400 for customers on a Go5G Plus plan (excluding 55, Military, First Responder plans); or $800, $600, or $300 for customers on a Go5G Next 55, Military, or First Responder plan; or $600 or $300 for customers on a Go5G Plus 55, Military, or First Responder plan; or $500 or $250 for customers on a Go5G, Magenta/MAX, or Essentials plan. Must be an existing T‑Mobile customer. New or Add-a-Line customers: Receive credit with purchase of an iPhone 15 or iPhone 15 Plus (based upon the model and condition of your trade-in smartphone) of $1000, $800, or $400 for customers on a Go5G Next plan (excluding 55, Military, First Responder plans); or $800 or $400 for customers on a Go5G Plus plan (excluding 55, Military, First Responder plans); or $800, $600, or $300 for customers on a Go5G Next 55, Military, or First Responder plan; or $600 or $300 for customers on a Go5G Plus 55, Military, or First Responder plan; or $800 or $400 for customers on an Essentials, Simple Choice, TMO ONE/Plus, Magenta/MAX or Go5G plan (excluding 55, Military, First Responder plans); or $600 or $300 for customers on an Essentials 55 Choice, TMO ONE/Plus, Magenta/MAX & Go5G 55, Military, or First Responder plan. Must be a new T‑Mobile customer or adding a new line to an existing T‑Mobile account. Max bill credits will not exceed the cost of the device. Credit comprised of (i) Apple instant trade-in credit at checkout and (ii) T‑Mobile monthly bill credits applied over 24 months. Allow 2 bill cycles from valid submission and validation of trade-in. Tax on pre-credit price due at sale. Limited-time offer; subject to change. Qualifying credit, data plan, and trade-in in good condition required. Max 4 promotional offers on any iPhone per account. May not be combinable with some offers or discounts. Activation required. Contact T‑Mobile before cancelling service to continue remaining bill credits on current device, or credits stop & balance on required finance agreement is due.
          </p>
          <p className=" text-sm">
            T-Mobile iPhone 14 Special Deal: Monthly price (if shown) reflects net monthly payment, after application of T-Mobile trade-in credit applied over 24 months with purchase of an iPhone 14 or iPhone 14 Plus and trade-in of eligible smartphone. Receive credit with purchase of an iPhone 14 or 14 Plus of $800 or $400 for customers on a Go5G Next or Go5G Plus plan (based upon the model and condition of your trade-in smartphone); or $300 or $150 for customers on a Go5G, TMO ONE, TMO ONE Plus, Magenta, Magenta MAX, or Magenta Plus plan (based upon the model and condition of your trade-in smartphone). Offer excludes customers on Go5G Next First Responder, Go5G Plus First Responder, Go5G Next Military, Go5G Plus Military, Go5G Next 55, and Go5G Plus 55 plans. Max bill credits will not exceed the cost of the device. Credit comprised of (i) Apple instant trade-in credit at checkout and (ii) T-Mobile monthly bill credits applied over 24 months. Allow 2 bill cycles from valid submission and validation of trade-in. Tax on pre-credit price due at sale. Limited-time offer; subject to change. Qualifying credit, data plan, and trade-in in good condition required. Max 4 promotional offers on any iPhone per account. May not be combinable with some offers or discounts. Price for iPhone 14 and iPhone 14 Plus includes $30 T-Mobile connectivity discount. Activation required. Contact T-Mobile before cancelling service to continue remaining bill credits on current device, or credits stop & balance on required finance agreement is due.
          </p>
          <p className=" text-sm">
            AT&T iPhone SE Special Deal: Buy an iPhone SE 64 GB and get $358.36 in bill credits applied over 36 months. Buy an iPhone SE 128 GB and get $264.36 in bill credits applied over 36 months. Buy an iPhone SE 256 GB and get $184.36 in bill credits applied over 36 months. Requires upgrade of an existing line (or activation of a new line) and purchase on qualifying 36-month 0% APR installment plan, subject to carrier credit qualification. $0 down for well-qualified customers only, or down payment may be required and depends on a variety of factors. Tax on full retail price due at sale. Requires activation on eligible AT&T unlimited plan. AT&T may temporarily slow data speeds if the network is busy. If you cancel eligible wireless service, credits will stop and you will owe the remaining device balance. Activation/Upgrade Fee: $35. Bill credits are applied as a monthly credit over the 36-month installment plan. Credits start within 3 bills. Will receive catch-up credits once credits start. Wireless line must be on an installment agreement, active, and in good standing for 30 days to qualify. Installment agreement starts when device is shipped. To get all credits, device must remain on agreement for entire term and you must keep eligible service on device for entire installment term. Limited-time offer; subject to change. Limits: one credit per line. May not be combinable with other offers, discounts, or credits. Purchase, financing, other limits, and restrictions apply. Activation required.
          </p>
          <p className=" text-sm">
            T-Mobile iPhone SE 3 Special Deal: Monthly price (if shown) reflects net monthly payment, after application of T-Mobile trade-in credit applied over 24 months with purchase of an iPhone SE 3 and trade-in of eligible smartphone. Receive credit with purchase of an iPhone SE 3 of $579 or $400 for customers on a Go5G Next or Go5G Plus plan (based upon the model and condition of your trade-in smartphone); or $300 or $150 for customers on a Go5G, TMO ONE, TMO ONE Plus, Magenta, Magenta MAX, or Magenta Plus plan (based upon the model and condition of your trade-in smartphone). Offer excludes customers on Go5G Next First Responder, Go5G Plus First Responder, Go5G Next Military, Go5G Plus Military, Go5G Next 55, and Go5G Plus 55 plans. Max bill credits will not exceed the cost of the device. Credit comprised of (i) Apple instant trade-in credit at checkout and (ii) T-Mobile monthly bill credits applied over 24 months. Allow 2 bill cycles from valid submission and validation of trade-in. Tax on pre-credit price due at sale. Limited-time offer; subject to change. Qualifying credit, data plan, and trade-in in good condition required. Max 4 promotional offers on any iPhone per account. May not be combinable with some offers or discounts. Activation required. Contact T-Mobile before cancelling service to continue remaining bill credits on current device, or credits stop & balance on required finance agreement is due.
          </p>
          <p className=" text-sm">
            To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch. If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card. Learn more about how Apple Card applications are evaluated at <a href="https://support.apple.com/kb/HT209218" className="text-blue-600 hover:underline">support.apple.com/kb/HT209218</a>.
          </p>
          <p className=" text-sm">
            Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to Chinese (Simplified), English (Australia, Canada, India, Ireland, New Zealand, Singapore, South Africa, UK, or U.S.), French, German, Italian, Japanese, Korean, Portuguese (Brazil), or Spanish, as part of an iOS 18, iPadOS 18, and macOS Sequoia software update, with more languages coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages.
          </p>
          <p className=" text-sm">
            A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV+. Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
          </p>
        </div>
      </div>

    </div>
  );
}
