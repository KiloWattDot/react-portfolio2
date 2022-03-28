import React, { useState} from 'react';
import './foot-style.css';
import linkedin from './icons/linkedin.png'
import github from './icons/github.png'
import twitter from './icons/twitter.png'
import { validateEmail}   from '../../utils/helpers';


function Footer() {
    // Add a local storage function to temporarily hold submissions
    // Also try to make your own alert pop up w/o 
    const [contactEmail, setContactEmail] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactMessage, setContactMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    // var newName = localStorage.getItem("name");

    const handleInput = (e) => {
        const {target} = e;
        const inputType = target.name
        const inputValue = target.value



        if (inputType === 'email') {
            setContactEmail(inputValue);
          } else if (inputType === 'name') {
            setContactName(inputValue);
          } else {
            setContactMessage(inputValue);
          }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // function to check valid email

        if (!validateEmail(contactEmail)) {
            setErrorMessage('Email or username is invalid');
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
            // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }

        alert(`Thank you for contacing ${contactName}. I will get back to you shortly...`)


        localStorage.setItem('name', contactName);
        localStorage.setItem('email', contactEmail);
        localStorage.setItem('message', contactMessage);

        // set name, email, message
        // save to local storage

        setContactEmail('')
        setContactName('')
        setContactMessage('')

    };

    return (
        <div className='footerArea' id='contact' >
            <h1 id="title">GET IN TOUCH!</h1>

            <div className='container' >
                <div className='row'>
                    <div className='col-xs-6'>
                        <div className='LeftBox'>
                            <form>
                                <input value={contactName} name='name'  type="text" id='inputName' placeholder='Name' onChange={handleInput}></input>
                                <input  value={contactEmail} name= 'email' type="text" id='inputEmail' placeholder='Email'  onChange={handleInput}></input>
                                <input value={contactMessage} name='message' type="text" id='inputMessage' placeholder='Message'  onChange={handleInput}></input>
                                <button type='Submit' onClick={handleSubmit} className='submitBtn'>Submit</button>

                            </form>
                            {errorMessage && (
                                    <div>
                                    <p className="error-text">{errorMessage}</p>
                                    </div>
                                )}
                        </div>

                    </div>

                    <div className='col-xs-6'>
                        <div className='Rightbox'>
                        <h3 id="infoTitle"> Phone</h3>
                            <p id="info" > (678) 982-8622 </p>
                        <h3 id="infoTitle"> Email </h3>
                            <p id="info" > doro.gilchrist@gmail.com</p>
                        <h3 id="infoTitle"> Location </h3>
                            <p id="info" >Atlanta, Georgia </p> 
                            
                        <h3 id="infoTitle"> Social Media</h3>

                        <a href="https://www.linkedin.com/in/dorogilchrist/" >
                            <img src={linkedin} id='linkedin'alt="Linkedin Icon" />
                        </a>
                        <a href="https://github.com/KiloWattDot">
                            <img src={github} id='github' alt="GitHub Icon" />
                        </a>
                        <a href="https://www.twitter.com/DoroTheDev/" >
                            <img  src={twitter} id='twitter' alt="twitter Icon" />
                        </a>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Footer;