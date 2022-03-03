import React from 'react'
import './style.css'
import img from '../../assets/learn-img.jpg'

const About = () => {
  return (
    <div class='container-fluid mt-5'>
        <div class='row p-5'>
            <div class='col-md-6 col-sm-12 about-bg'>
                <img class='img-fluid img-responsive' src={img} alt=' ' />
            </div>
            <div class='col-md-6 col-sm-12 p-5'>
                <h3 class='font-bold text-bold dispaly-6'>We focus on ergonomics and meeting you where you work.</h3>
                <p class='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est ipsum, semper a imperdiet et, egestas at quam. Donec ultrices justo vel ex tincidunt finibus.</p>
                <button class='btn btn-grad rounded-pill'>Learn more</button>
            </div>
        </div>
    </div>
  )
}

export default About