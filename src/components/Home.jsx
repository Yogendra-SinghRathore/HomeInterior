import React from "react";
import { NavLink } from "react-router-dom";
import heroImage1 from "../assets/images/heroImage1.jpg";
import heroImage2 from "../assets/images/heroImage2.jpg";
import counterSideImage from "../assets/images/counterSideImage.jpg";
import serviceImg1 from "../assets/images/Residentialimg.jpg";
import serviceImg2 from "../assets/images/Commercialimg.jpg";
import serviceImg3 from "../assets/images/Visualizationimg.jpg";
import serviceImg4 from "../assets/images/Furnitureimg.jpg";
import projectImg1 from "../assets/images/Westwoodimg.webp";
import projectImg2 from "../assets/images/Veranoimg.webp";
import projectImg3 from "../assets/images/Hudsonimg.webp";
import projectImg4 from "../assets/images/Bellevueimg.webp";
import processIcon1 from "../assets/images/support.png";
import processIcon2 from "../assets/images/bulb.png";
import processIcon3 from "../assets/images/dimond.png";
import processIcon4 from "../assets/images/shuffle.png";

import TestimonialSlider from "./TestimonialSwiper";

const Home = () => {
  const serviceCard = [
    {
      img: serviceImg1,
      number: "01",
      heading: "Residential Interior Design",
      desc: "We transform houses into homes that reflect your personality and lifestyle. From cozy apartments to grand villas, our designs blend beauty and function, with every detail curated for comfort, harmony, and timeless appeal.",
    },
    {
      img: serviceImg2,
      number: "02",
      heading: "Commercial Interior Design",
      desc: "We create workspaces that inspire productivity and reflect your brand’s identity. From offices to retail spaces, our designs combine functionality and style, ensuring every element supports efficiency, enhances atmosphere, and leaves a lasting impression on clients and teams.",
    },
    {
      img: serviceImg3,
      number: "03",
      heading: "3D Visualization & Concept Design",
      desc: "Our 3D Visualization & Concept Design service lets you see your dream space before it’s built. Through detailed renders and mood boards, we help you visualize layouts, materials, and colors, ensuring clarity, confidence, and perfection in every design decision",
    },
    {
      img: serviceImg4,
      number: "04",
      heading: "Custom Furniture & Décor Design",
      desc: "We curate and source unique furniture, art, and décor pieces that elevate your interiors. Every selection is tailored to complement your space’s style and function, ensuring a cohesive design that feels personal, refined, and effortlessly timeless.",
    },
  ];

  const projectSlides = [
    {
      id: 1,
      img: projectImg1,
      heading: "Westwood",
      count: "01/04",
      text: "Anderson Family – Los Angeles, CA",
      alt: "Project 1",
    },
    {
      id: 2,
      img: projectImg2,
      heading: "Verano Beach",
      count: "02/04",
      text: "Michael Roberts – New York, NY",
      alt: "Project 2",
    },
    {
      id: 3,
      img: projectImg3,
      heading: "Hudson Loft",
      count: "03/04",
      text: "Michael Roberts – New York, NY",
      alt: "Project 3",
    },
    {
      id: 4,
      img: projectImg4,
      heading: "Bellevue",
      count: "04/04",
      text: "Bellevue Tech Partners – Seattle, WA",
      alt: "Project 4",
    },
  ];

  const processData = [
    {
      id: 1,
      img: processIcon1,
      heading: "Consultation & Discovery",
      text: "We start by understanding your needs, style preferences, and lifestyle through an in-depth.",
    },
    {
      id: 2,
      img: processIcon2,
      heading: "Concept & Planning",
      text: "Our team creates mood boards, layouts, and design concepts tailored to your vision.",
    },
    {
      id: 3,
      img: processIcon3,
      heading: "Design Development",
      text: "From material selection to detailed 3D visualizations, we refine every aspect for perfection.",
    },
    {
      id: 4,
      img: processIcon4,
      heading: "Execution & Styling",
      text: "We manage the entire implementation, ensuring every detail comes to life beautifully.",
    },
  ];

  return (
    <>
      <section id="hero" className="section hero-section">
        <div className="container">
          <div className="row gx-0">
            <div className="col-md-9">
              <div className="heroLeftBox ">
                <div className=" section-title-box" data-aos="fade-down" data-aos-delay="500">
                  <div className="section-icon"></div>
                  <div className="section-title">
                    We Build Your Sustainable Lifestyle
                  </div>
                </div>
                <h1 className="hero-title" data-aos="fade-up">INTERIOR FOR HOME</h1>
                <img
                  className=" img-fluid" data-aos="fade-up"
                  src={heroImage1}
                  alt="hero Image 1"
                />
              </div> 
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <div className="heroRightBox">
                <img
                  className=" img-fluid"
                  data-aos="fade-down"
                  src={heroImage2}
                  alt="hero Image 2"
                />
                <p className="mb-0" data-aos="fade-up" data-aos-delay="500">
                  Crafting interiors that showcase your individuality, elevate
                  your lifestyle, and infuse timeless beauty into every space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className=" section-title-box">
            <div className="section-icon"></div>
            <div className="section-title">About us</div>
            <div className="liner-box"></div>
          </div>
          <div className="about-box about-inner-box">
            <h2 className=" aboutDesc">
              In 2010, a passionate team of designers founded Aurelo with a
              simple mission to transform bold visions into timeless
              interiors.We’re known for more than just designing spaces. we
              craft experiences that inspire, comfort, and endure."
            </h2>

            <div>
              <NavLink to="/quote" className="secondry-button aboutBtn">
                Book Appoinment
              </NavLink>
            </div>

            <div className="row g-5">
              <div className="col-lg-5">
                <div className="counterBox">
                  <div className="counterInnerBox">
                    <h2>60M+</h2>
                    <span>Savings Money</span>
                  </div>
                  <div className=" InnercounterBox">
                    <div className="counterInnerBox">
                      <h2>10k+</h2>
                      <span>Global Clients</span>
                    </div>
                    <div className="counterInnerBox">
                      <h2>98%</h2>
                      <span>Clients statisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="counterSideImg">
                  <img className=" img-fluid" src={counterSideImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="section">
        <div className="container">
          <div className=" section-title-box">
            <div className="section-icon"></div>
            <div className="section-title">Our service</div>
            <div className="liner-box"></div>
          </div>

          <div className="serviceHeader">
            <div className="serviceHeadingBox">
              <h1>Discover our interior design solutions.</h1>
            </div>
            <div className=" serviceBtnBox">
              <NavLink to="/quote" className="secondry-button">
                Book Appoinment
              </NavLink>
            </div>
          </div>

          {serviceCard.map((service) => (
            <div className="row g-5 serviceBox">
              <div className="col-lg-5">
                <div>
                  <img className=" img-fluid" src={service.img} alt="" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="serviceCardContentBox">
                  <span className="serviceNumber">{service.number}</span>
                  <h2 className="serviceHeading">{service.heading}</h2>
                  <p className="serviceDetails">{service.desc}</p>
                  <div className="serviceBtnBox">
                    <NavLink to="/quote" className="secondry-button serviceBtn">
                      Book Appoinment
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="project" className="section">
        <div className="container">
          <div className=" section-title-box">
            <div className="section-icon"></div>
            <div className="section-title">recent projects</div>
            <div className="liner-box"></div>
          </div>

          <div className="serviceHeader">
            <div className="serviceHeadingBox">
              <h1>A showcase of timeless interiors.</h1>
            </div>
            <div className=" serviceBtnBox">
              <NavLink to="/quote" className="secondry-button">
                Book Appoinment
              </NavLink>
            </div>
          </div>

          <div className="projectSlidesBox">
            {projectSlides.map((slide, index) => (
              <div
                className="projectSlide"
                key={slide.id}
                style={{ zIndex: index + 1 }}
              >
                <div className="projectSlideContentBox">
                  <img className=" img-fluid" src={slide.img} alt={slide.alt} />
                  <div className="slideContent">
                    <h2 className=" slideHeading">{slide.heading}</h2>
                    <div className="slideDetails">
                      <span className="slideCount">{slide.count}</span>
                      <span className="slideText">{slide.text}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section">
        <div className="container">
          <div className=" section-title-box">
            <div className="section-icon"></div>
            <div className="section-title">Our Working Process</div>
            <div className="liner-box"></div>
          </div>

          <div className="serviceHeader">
            <div className="serviceHeadingBox">
              <h1>Where your vision and our expertise come together.</h1>
            </div>
            <div className=" serviceBtnBox">
              <NavLink to="/quote" className="secondry-button">
                Book Appoinment
              </NavLink>
            </div>
          </div>

          <div className="row g-0 processBoxWrapper">
            {processData.map((process) => (
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className=" processBox">
                  <img
                    className=" img-fluid"
                    src={process.img}
                    alt="processImg"
                  />
                  <div className="processBoxContent">
                    <h4 className="processBoxHeading">{process.heading}</h4>
                    <p className="processBoxDesc">{process.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section">
        <div className="container">
          <div className=" section-title-box">
            <div className="section-icon"></div>
            <div className="section-title">Testimonials</div>
            <div className="liner-box"></div>
          </div>

          <div className="serviceHeader">
            <div className="serviceHeadingBox">
              <h1>What our customers say.</h1>
            </div>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <section id="offers" className="section">
        <div className="container-fluid gx-0">
          <div className="offerBox">
            <div className="container offerBoxText">
              <h1>Ready to redefine your space? let’s talk</h1>
              <div className=" serviceBtnBox">
              <NavLink to="/quote" className="secondry-button offerBoxBtn">
                Book Appoinment
              </NavLink>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
