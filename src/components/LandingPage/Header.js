import React from 'react'
import img from '../../assets/header.svg'
import './style.css'

const Header = () => {
  return (
    <div class='container-fluid'>
        <div class='row p-5'>
            <div class='col-md-6 col-sm-12 p-5'>
                <h2 class='text-bold font-bold display-5 animate__backInLeft'>We Promise to bring the best solution for your buisness.</h2>
                <p class='mt-4 animate__backInLeft'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est ipsum, semper a imperdiet et, egestas at quam. Donec ultrices justo vel ex tincidunt finibus.</p>
                <button class='btn btn-grad rounded-pill animate__backInLeft'>Contact us</button>
            </div>
            <div class='col-md-6 header-bg-img animate__backInRight'>
                <img class='img-responsive img-fluid' src={img} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Header