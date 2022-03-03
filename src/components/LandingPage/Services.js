import React from 'react'
// import 'pattern.css'
import './style.css'
import {Link} from 'react-router-dom'

const Services = () => {
  return (
    <div class='container-fluid mt-5'>
        <div class='row p-5 '>
            <div class='col-md-4 col-sm-12 p-5'>
                <h3 class='font-bold text-bold dispaly-6'>Explore the services we have for you.</h3>
                <p class='mt-4 text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est ipsum, semper a imperdiet et, egestas at quam. Donec ultrices justo vel ex tincidunt finibus.</p>
                <Link  to='services' class='btn btn-grad rounded-pill'>All services</Link>
            </div>
            <div class='col-md-8 col-sm-12 p-5 service-bg'>
                <div class='row justify-content-between'>
                    <div class='col-md-3 rounded shadow p-4 mt-2'>
                            <h3 class='grad'>Instant Payment</h3>
                            <p class='mt-4 text-dark'>Paystack is the fastest, simplest way to start accepting online payments in Nigeria. From signup to receiving real payments can take under 15 minutes. Seriously.</p>
                    </div>
                    <div class='col-md-3 rounded shadow p-4 mt-2'>
                            <h3 class='red-grad'>User Authentication</h3>
                            <p class='mt-4'>Our user authentication is the fastest, simplest way to start accepting online payments in Nigeria. From signup to receiving real payments can take under 15 minutes. Seriously.</p>
                    </div>
                    <div class='col-md-3 rounded shadow p-4 mt-2'>
                             <h3 class='green-grad'>ATM Card</h3>
                            <p class='mt-4 text-dark'>Getting the ATM Card is no stress, simplest way to start accepting online payments in Nigeria. From signup to receiving real payments can take under 15 minutes. Seriously.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services