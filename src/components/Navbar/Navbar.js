import './Navbar.css';
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg nav-sticky navbar-sticky navbar-light nav-fill bg-light">
        <Link class="navbar-brand" to="/">Fintech</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse float-right navbar-collapse justify-content-end " id="navbarTogglerDemo02">
          <ul class="navbar-nav nav-fill justify-content-between  mt-2 ">
            <li class="nav-item active">
              <NavLink class="nav-link"  style={{color:'#000'}} to="/">Home <span class="sr-only">(current)</span></NavLink>
            </li>
            <li class="nav-item">
            <NavLink class="nav-link" style={{color:'#000'}} to="/about">About <span class="sr-only">(current)</span></NavLink>
            </li>
            <li class="nav-item">
            <NavLink class="nav-link" style={{color:'#000'}} to="/services">Services <span class="sr-only">(current)</span></NavLink>
            </li>
            <li class="nav-item">
            <NavLink class="nav-link" style={{color:'#000'}} to="/">Contact <span class="sr-only">(current)</span></NavLink>
            </li>
          </ul>
          <div class='nav-btn-res'>
          <button class='btn btn-secondary rounded-pill'>Login</button>&nbsp;&nbsp;
          <button class='btn btn-secondary rounded-pill'>Sign up</button>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;