import React from 'react';
import './bio-style.css';
import gradPic from './images/mewithbox.png'


const bioText = ' My name is Dorothy Gilchrist and I am from Atlanta, Georgia. I have a bachelors degree in Electrical & Electronics Engineering from the University of Georgia. Go Bulldogs! I am one the first black females to graduate from UGA with an EEE degree. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  magna aliqua. '

function Bio() {
    return (

        <div className='container ' id='bio'>
            <article className='bio_item'>
                <div className='bio_image'>
                    <img src={gradPic} className='bioPic' alt="My Graduation pic"></img>
                </div>
                <h3 id='bioTitle'>About Me</h3>
                <p id="AboutMeText"> {bioText} </p>
            </article>
        </div>
    )

}

export default Bio;