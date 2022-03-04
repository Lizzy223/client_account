import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router';
import About from './components/About/About'
import Services from './components/Services/Services'
import LandingPage from './components/LandingPage';
import Contact from './components/Contact/Contact'
// import "swiper/css/bundle";

const App = () => {


  return (
    <div className="">     
    
       
        
      
      <Routes>
      <Route exact path='/' element={<LandingPage/>} />
        <Route exact path='/about' element={<About/>} />
         <Route exact path='/services' element={<Services/>}/>         
        <Route exact path='/contact' element={<Contact/>} />
        {/*<Route exact path='/Order' element={<Order/>}/>
        <Route exact path='/Ticket' element={<Order/>}/>
        <Route exact path='/Pending-reviews' element={<Details/>}/>
        <Route exact path='/Address-book' element={<Address/>}/>
        <Route exact path='/Change-password' element={<Password/>}/>
        <Route exact path='/Logout' element={<Order/>}/> */}
      </Routes>     
    </div>
  );
}

export default App;
