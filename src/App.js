import React from 'react';
import Header from './components/LandingPage/Header';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import About from './components/LandingPage/About';
import Services from './components/LandingPage/Services';
import Partners from './components/LandingPage/Partners';
import Testimonial from './components/LandingPage/Testimonial';
import Footer from './components/LandingPage/Footer';
// import "swiper/css/bundle";

const App = () => {


  return (
    <div className="">     
    
        <Navbar />
        <Header/>
        <About/>
        <Services/>
        <Partners/>
        <Testimonial/>
        <Footer/>
        
      
      {/* <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route exact path='/Details' element={<Details/>}/>
        <Route exact path='/Order' element={<Order/>}/>
        <Route exact path='/Message' element={<Details/>}/>
        <Route exact path='/Ticket' element={<Order/>}/>
        <Route exact path='/Pending-reviews' element={<Details/>}/>
        <Route exact path='/Address-book' element={<Address/>}/>
        <Route exact path='/Change-password' element={<Password/>}/>
        <Route exact path='/Logout' element={<Order/>}/>
      </Routes> */}     
    </div>
  );
}

export default App;
