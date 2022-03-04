import React from 'react'
import Testimonial from '../LandingPage/Testimonial'
import Partners from '../LandingPage/Partners'
import Footer from '../LandingPage/Footer'
import Navbar from '../Navbar/Navbar'
import './Contact.css'


const Contact = () => {
  return (
    <div>
          <div class='container-fluid'>
        <Navbar/>

    {/* header */}
        <div class='row'>
            <div class='col-md-12 about-us-header align-items-center justify-content-center'>
                <div class='about-img'>
                    <h2 class='display-5  text-bold font-bold text-center mt-5'>Contact Us</h2>
                    <p class='mt-3 text-center'>We came from frustration with excessive bank charges (for inconsistent services), now we’re here.</p>
                 </div>
            </div>            
        </div>
        {/* end of header */}

        {/* section */}
        <div class='row mt-5 p-5'>
            <div class='col-md-6 col-sm-12'>
                <img src='' alt='' class='img-responsive img-fluid'/>
            </div>
            <div class='col-md-6 col-sm-12 p-5'>
                <h3 class='display-5 text-bold font-bold text-center'>A growth engine for modern businesses in Africa</h3>
                <form>
                    <div class='input-group'>
                        <label for='Name'>Name</label>
                        <input class='contact-input' placeholder='Tell us your Name' type='text' required/>
                    </div>
                    <div class='input-group'>
                        <label for='Email'>Email: &nbsp;</label>
                        <input class='contact-input' placeholder='Enter your mail' type='text' required/>
                    </div>
                    <div class='input-group'>
                        <label for='Email'>Message: &nbsp;</label>
                        <textarea row='5' col='5' class='contact-input' placeholder='Enter your message' type='text' required/>
                    </div>
                    <input type='submit' class='btn-lg btn-grad'/>
                </form>
            </div>            
        </div>

        {/* end of section */}

        {/* team */}
        <div class='row mb-5'>
            <div class='col-md-12 '>
                <h2 class='display-5 mt-5 text-bold font-bold text-center'>The Team</h2>
                <p class='mt-3 mb-5 text-center'>The brain behind our success.</p>
                <div class='row justify-content-between p-2'>
                    
                </div>
            </div>            
        </div>

        {/* end of team */}
       
    </div>
   
        <Partners/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Contact