import React from 'react'
import Testimonial from '../LandingPage/Testimonial'
import Partners from '../LandingPage/Partners'
import Footer from '../LandingPage/Footer'
import Navbar from '../Navbar/Navbar'
import img from '../../assets/learn-img.jpg'
import './Contact.css'


const Contact = () => {
  return (
    <div>
          <div class='container-fluid'>
        <Navbar/>

    {/* header */}
        <div class='row mb-5'>
            <div class='col-md-12 about-us-header align-items-center justify-content-center'>
                <div class='about-img'>
                    <h2 class='display-5  text-bold font-bold text-center mt-5'>Contact Us</h2>
                    <p class='mt-3 text-center'>We came from frustration with excessive bank charges (for inconsistent services), now we’re here.</p>
                 </div>
            </div>            
        </div>
        {/* end of header */}

        {/* section */}
        <div class='row  p-5 mb-n5'>
            <div class='col-md-6 col-sm-12 about-bg'>
                <img class='img-fluid img-responsive' src={img} alt=' ' />
            </div>
            <div class='col-md-6 col-sm-12 p-5'>
                <h3 class='display-5 text-bold font-bold text-center'>Let us know what you think.</h3>
                <form>
                    <div class=''>
                        {/* <label for='Name:'>Name</label> */}
                        <input class='contact-input' placeholder='Tell us your Name' type='text' required/>
                    </div>
                    <div class=''>
                        {/* <label for='Email'>Email: &nbsp;</label> */}
                        <input class='contact-input' placeholder='Enter your mail' type='text' required/>
                    </div>
                    <div class=''>
                        {/* <label for='Email'>Message: &nbsp;</label> */}
                        <textarea row='5' col='5' class='contact-input' placeholder='Enter your message' type='text' required/>
                    </div>
                    <input type='submit' class='w-100 border-none no-border btn-grad'/>
                </form>
            </div>            
        </div>

        {/* end of section */}

        {/* team */}
       

        {/* end of team */}
       
    </div>
   
        <Partners/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Contact