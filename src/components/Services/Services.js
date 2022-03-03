import React from 'react'
import './Services.css'
import Navbar from '../Navbar/Navbar'
import Testimonial from '../LandingPage/Testimonial'
import Partners from '../LandingPage/Partners'
import Footer from '../LandingPage/Footer'

const Services = () => {
  return (
    <div>
          <div class='container-fluid'>
        <Navbar/>

    {/* header */}
        <div class='row'>
            <div class='col-md-12 about-us-header align-items-center justify-content-center'>
                <div class='about-img'>
                    <h2 class='display-5  text-bold font-bold text-center mt-5'>Services we offer in Africa</h2>
                    <p class='mt-3 text-center'>We came from frustration with excessive bank charges (for inconsistent services), now we’re here.</p>
                 </div>
            </div>            
        </div>
        {/* end of header */}

        {/* section */}
        {/* <div class='row mt-5 p-5'>
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
        </div> */}

        {/* end of section */}

        {/* team */}
        <div class='row mb-5'>
            <div class='col-md-12 '>
                <h2 class='display-5 mt-5 text-bold font-bold text-center'>Our Services</h2>
                <p class='mt-3 mb-5 text-center'>The brain behind our success.</p>
                
                    <div class='row justify-content-between p-5'>
                        <div class='col-md-3 rounded m-3 shadow p-4 mt-2'>
                                <h3 class='grad'>Instant Payment</h3>
                                <p class='mt-4 text-dark'>Paystack is the fastest, simplest way to start accepting online payments in Nigeria. From signup to receiving real payments can take under 15 minutes. Seriously.</p>
                        </div>
                        <div class='col-md-3 rounded m-3 shadow p-4 mt-2'>
                                <h3 class='red-grad'>User Authentication</h3>
                                <p class='mt-4'>Our user authentication is the fastest, simplest way to start accepting online payments in Nigeria. From signup to receiving real payments can take under 15 minutes. Seriously.</p>
                        </div>
                        <div class='col-md-3 rounded m-3 shadow p-4 mt-2'>
                                <h3 class='green-grad'>ATM Card</h3>
                                <p class='mt-4 text-dark'>Getting the ATM Card is no stress, simplest way to start accepting online payments in Nigeria. From signup to receiving real payments can take under 15 minutes. Seriously.</p>
                        </div>
                        <div class='col-md-3 rounded m-3 shadow p-4 mt-2'>
                                <h3 class='grad'>Instant Payment</h3>
                                <p class='mt-4 text-dark'>Paystack is the fastest, simplest way to start accepting online payments in Nigeria. From signup to receiving real payments can take under 15 minutes. Seriously.</p>
                        </div>
                        <div class='col-md-3 rounded m-3 shadow p-4 mt-2'>
                                <h3 class='red-grad'>User Authentication</h3>
                                <p class='mt-4'>Our user authentication is the fastest, simplest way to start accepting online payments in Nigeria. From signup to receiving real payments can take under 15 minutes. Seriously.</p>
                        </div>
                        <div class='col-md-3 rounded m-3 shadow p-4 mt-2'>
                                <h3 class='green-grad'>ATM Card</h3>
                                <p class='mt-4 text-dark'>Getting the ATM Card is no stress, simplest way to start accepting online payments in Nigeria. From signup to receiving real payments can take under 15 minutes. Seriously.</p>
                        </div>
                        <div class='col-md-3 rounded m-3 shadow p-4 mt-2'>
                                <h3 class='red-grad'>User Authentication</h3>
                                <p class='mt-4'>Our user authentication is the fastest, simplest way to start accepting online payments in Nigeria. From signup to receiving real payments can take under 15 minutes. Seriously.</p>
                        </div>
                        <div class='col-md-3 rounded m-3 shadow p-4 mt-2'>
                                <h3 class='green-grad'>ATM Card</h3>
                                <p class='mt-4 text-dark'>Getting the ATM Card is no stress, simplest way to start accepting online payments in Nigeria. From signup to receiving real payments can take under 15 minutes. Seriously.</p>
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

export default Services