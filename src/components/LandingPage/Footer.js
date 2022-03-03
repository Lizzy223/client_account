import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Footer = () => {
  return (
    <div class='container-fluid p-5 footer-img '>
        <div class='row align-items-center justify-content-center'>
            <div class='col-md-3 col-sm-6'>
                <ul>
                    <li>
                        <p class='text-bold'>Fingertips</p>
                    </li>
                    <li>
                        <Link class='' style={{color:'#000'}} to=''>Home</Link>
                    </li>
                    <li>
                        <Link class='' style={{color:'#000'}} to=''>Example</Link>
                    </li>
                    <li>
                        <Link class='' style={{color:'#000'}} to=''>Pricing</Link>
                    </li>
                    <li> 
                        <Link class='' style={{color:'#000'}} to=''>Upgrade</Link>
                    </li>
                </ul>
            </div>
            <div class='col-md-3 col-sm-6'>
                <ul>
                    <li>
                        <p class='text-bold'>Resources</p>
                    </li>
                    <li>
                        <Link class='' style={{color:'#000'}} to=''>Services</Link>
                    </li>
                    <li>
                        <Link class='' style={{color:'#000'}} to=''>Example</Link>
                    </li>
                    <li>
                        <Link class='' style={{color:'#000'}} to=''>Pricing</Link>
                    </li>
                    <li>
                        <Link class='' style={{color:'#000'}} to=''>Upgrade</Link>
                    </li>
                </ul>
            </div>
            <div class='col-md-3 col-sm-6'>
                
                <ul>
                    <li>
                        <p class='text-bold'>About</p>
                    </li>
                    <li>
                        <Link class='' style={{color:'#000'}} to=''>About</Link>
                    </li>
                    <li>
                        <Link class='' style={{color:'#000'}} to=''>Example</Link>
                    </li>
                    <li>
                        <Link class='' style={{color:'#000'}} to=''>Pricing</Link>
                    </li>
                    <li>
                        <Link class='' style={{color:'#000'}} to=''>Upgrade</Link>
                    </li>
                </ul>
            </div>
            <div class='col-md-3 col-sm-6'>
                
                <ul>
                    <li>
                        <p class='text-bold'>Contact</p>
                    </li>
                    <li>
                        <Link class='' style={{color:'#000'}} to=''><i class='la la-instagram' /></Link>
                    </li>
                    <li>
                        <Link class='' style={{color:'#000'}} to=''><i class='la la-facebook' /></Link>
                    </li>
                    <li>
                        <Link class='' style={{color:'#000'}} to=''><i class='la la-twitter' /></Link>
                    </li>
                    <li>
                       <p> Mail us at: <Link class='' style={{color:'#000'}} to=''>mail@fintech.com</Link></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer