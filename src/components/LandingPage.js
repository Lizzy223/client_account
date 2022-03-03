import React from 'react'
import Header from './LandingPage/Header';
import Navbar from './Navbar/Navbar';
import '../App.css'
import About from './LandingPage/About';
import Services from './LandingPage/Services';
import Partners from './LandingPage/Partners';
import Testimonial from './LandingPage/Testimonial';
import Footer from './LandingPage/Footer';

const LandingPage = () => {
  return (
    <div>
         <Navbar />
        <Header/>
        <About/>
        <Services/>
        <Partners/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default LandingPage