import React from 'react';
import './bio-style.css';
import gradPic from './images/mewithbox.png'




const bioText = "My name is Dorothy Gilchrist and I was born/raised in Atlanta, Georgia which is where I still currently reside. I have a bachelors degree in Electrical & Electronics Engineering & a recently acquired Certificate in Fullstack Development(MERN)! I'm a tech enthusiast who loves to learn about new things leverage them to solve real-life problems. I'm currently into Web Development and I have projects particularly in Javascript, Node.js, React, and more."



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