import React, {useState} from "react";

import './nav-style.css';




function Navbar() {

    let  [toggle, setToggle] = useState(false)



  // This is a handler that we will reference in our `onClick` attribute later
  const handleToggle = () => {
     setToggle(!toggle)
    console.log(`click`);
  };


    return ( 
      

        <nav className='navbar'>
            <h1>DOROTHY GILCHRIST</h1>
            <ul className= 'navList' id={toggle ? 'active' : ''} >
                <li className='list-item'>
                     <a href="#welcome">Home</a>
                </li>
                <li className='list-item'>
                    <a href="#bio">About</a>
                </li>

                <li className='list-item'>
                    <a href="#experience">Experience</a>
                </li>
                
                
                <li className='list-item'>
                    <a  href="#contact">Contact</a>
                </li>
               
                
            
            </ul>

            <div className='menu' onClick={handleToggle} >
                <div className='menu-line'></div>
                <div className='menu-line'></div>
                <div className='menu-line'></div>
            </div>
        </nav>
 
        
    );

}

export default Navbar;

// {toggle ? "navList" : "hide"}