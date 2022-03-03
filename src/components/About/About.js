import React from 'react'
import './About.css'
import img from '../../assets/about.svg'
import Navbar from '../Navbar/Navbar'
import img1 from '../../assets/team1.jpg'
import img2 from '../../assets/team2.jpg'
import img3 from '../../assets/team3.jpg'
import Testimonial from '../LandingPage/Testimonial'
import Partners from '../LandingPage/Partners'
import Footer from '../LandingPage/Footer'

const About = () => {
  return (
      <div>
          <div class='container-fluid'>
        <Navbar/>

    {/* header */}
        <div class='row'>
            <div class='col-md-12 about-us-header align-items-center justify-content-center'>
                <div class='about-img'>
                    <h2 class='display-5  text-bold font-bold text-center mt-5'>Powering a new generation of businesses in Africa</h2>
                    <p class='mt-3 text-center'>We came from frustration with excessive bank charges (for inconsistent services), now we’re here.</p>
                 </div>
            </div>            
        </div>
        {/* end of header */}

        {/* section */}
        <div class='row mt-5 p-5'>
            <div class='col-md-6 col-sm-12'>
                <img src={img} alt='' class='img-responsive img-fluid'/>
            </div>
            <div class='col-md-6 col-sm-12 p-5'>
                <h3 class='display-5 text-bold font-bold text-center'>A growth engine for modern businesses in Africa</h3>
                <p class='mt-4 text-center'>Paystack builds technology to help Africa’s best businesses grow - from new startups, to market leaders launching new business models.
<br/>
We make it easy for businesses to accept secure payments from multiple local and global payment channels, and then we provide tools to help you retain existing customers, and acquire new ones.
<br/>
As makers and business owners ourselves, we’re inspired by a vision of millions of exceptional businesses across the continent who’re profitable, envied, and loved. We believe that in our lifetimes,
 businesses in Africa will routinely go toe to toe with the best companies on the planet, and win. Building that world gives us purpose, every day.</p>
            </div>            
        </div>

        {/* end of section */}

        {/* team */}
        <div class='row mb-5'>
            <div class='col-md-12 '>
                <h2 class='display-5 mt-5 text-bold font-bold text-center'>The Team</h2>
                <p class='mt-3 mb-5 text-center'>The brain behind our success.</p>
                <div class='row justify-content-between p-2'>
                    <div class='col-md-4 col-sm-6'>
                        <img class='img-responsive text-center w-50 h-50 m-auto img-fluid team-img' src={img1} alt=''/>
                        <p class='mt-3 font-bold text-bold text-center'>Wale Eseyin</p>
                        <p class='text-secondary text-center'><small>CEO</small></p>
                    </div>
                    <div class='col-md-4 col-sm-6'>
                        <img class='img-responsive text-center w-50 h-50 m-auto img-fluid team-img' src={img2} alt=''/>
                        <p class='mt-3 font-bold text-bold text-center'>Jennifer Ebe</p>
                        <p class='text-secondary text-center'><small>Head of marketing</small></p>
                    </div>
                    <div class='col-md-4 col-sm-6'>
                        <img class='img-responsive text-center w-50 h-50 m-auto img-fluid team-img' src={img3} alt=''/>
                        <p class='mt-3 font-bold text-bold text-center'>Bolade Emien</p>
                        <p class='text-secondary text-center'><small>Head of IT</small></p>
                    </div>
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

export default About