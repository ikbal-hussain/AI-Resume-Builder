import Header from '@/components/custom/Header'
import React from 'react'

import './Home.css' 
import { Section_1 } from './section_1'
import { Footer } from './footer'
import { Section_2 } from './section_2'
import { Ratting } from './rating'
import { Faq } from './faq'
import { Rating_carosal } from './ratting'


const Home=()=> {
  return (
   
    <>
      <Header/>
     <Section_1/>
     <Section_2/>

      {/*--------------------------- footer section here ------------------------------------------------------------*/}
      {/* <Ratting/> */}
      {/* <Rating_carosal/> */}
      <Faq/>
      <Footer/>
</>

    // </div>
    
  )
}

export default Home




{/* <Header />
      <div className="hero-section">
        <h1 className="hero-title"><b>ResumeFlow</b></h1>
        <h3 className="hero-title">Build Your Perfect Resume</h3>
        <p className="hero-subtitle">Create a professional resume quickly and easily with our intuitive builder.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="features-section">
        <div className="feature flex flex-col place-items-center gap-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJyoDlSfdttoHObeCQVUYTPqj7u-2L2Z8Pw&s" alt="Feature 1" />
          <h3>Easy to Use</h3>
          <p>Simple and intuitive interface to build your resume effortlessly.</p>
        </div>
        <div className="feature flex flex-col place-items-center gap-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3oyupFc_6fjrMPIKgqAjfZNdmML5cP-BjpKP9qDMvNaG9CbYsetAtSogVI7H0TAkjzOQ&usqp=CAU" alt="Feature 2" />
          <h3>Professional Templates</h3>
          <p>Choose from a variety of professionally designed templates.</p>
        </div>
        <div className="feature flex flex-col place-items-center gap-3">
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-download-icon-in-svg-png-gif-file-formats--downloading-down-arrow-user-interface-pack-icons-1502372.png?f=webp&w=256" alt="Feature 3" />
          <h3>Instant Downloads</h3>
          <p>Download your resume in multiple formats instantly.</p>
        </div>
      </div>
      <div className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"The easiest resume builder I’ve used. Highly recommend!"</p>
          <span><b>- Alex J.</b></span>
        </div>
        <div className="testimonial">
          <p>"A professional resume in minutes. Love it!"</p>
          <span><b>- Jamie L.</b></span>
        </div>
      </div> */}