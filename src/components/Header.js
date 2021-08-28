import React from 'react';
import logo from '../assets/images/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{height: '60px'}}>
         <div className="left" >
            <Link to="/"><img src={logo} alt="logo" style={{height: '50px'}}/></Link>
        </div>
       
            <h2 className="ett">Trash Tracker</h2>
        
    </header>
  );
}

export default Header;
