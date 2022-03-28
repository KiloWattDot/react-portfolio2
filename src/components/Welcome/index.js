import React from 'react';
import './welcome-style.css';
import yellowbg from './images/Me(yellowbg).png'
import resume from './images/Dorothy Gilchrist - Apex Resume.docx'




function Welcome() {
    return (

    
            
        <div className='WelcomeArea'>
           <div className='container' id='welcome'>
                <div className='row'>
                    <div className='col-xs-5 greetingSide'>
                        <div className='greeting'>
                          {/* Add welcome statement */}
                          <div className='greetingTitle'> 
                              <h2 id='Hello'>Hello, I am</h2>
                              <h2 id='Dorothy'>Dorothy</h2>
                              <h2 id='Welcome'>Welcome to my portfolio </h2>
                          </div>
                            {/* Add buttons w/ links */}
  
                            <a id='hireBtn' className='btn' href='mailto:Doro.Gilchrist@gmail.com'>
                                Contact Me!
                            </a>
                            
                            <a className='btn' id="resumeBtn" href={resume}>
                                Resume
                            </a>

                        </div>
                    </div>

                    <div className='col-xs-5'>
                        <div className='profile'>
                            
                            <img src={yellowbg} className='yellowBG' alt='Me with a yellow background.'></img>
                        </div>
                    </div>
                </div>

            </div>


        </div>


   

    )
}

export default Welcome;