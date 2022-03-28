import React from 'react'
import './exp-style.css'
import GOFC from './images/Landing page search 1.png'
import Tocents from './images/Logo - ToCents cropped.png'
import Fake1 from './images/ecom.PNG'
import Fake2 from './images/health.PNG'


// See if you can replace this using props
const data = [
    {
        id: 1,
        image: GOFC,
        title: "Guardians Of The Code",
        description: "This an application to assist casual movie-goers in preparing for optimal viewing of the next Marvel film with friends.",
        github: "https://github.com/nsoroma/Guardians-of-the-Code-Galaxy ",
        demo: "https://nsoroma.github.io/Guardians-of-the-Code-Galaxy/ ",
        

    },
    {
        id: 2,
        image: Tocents,
        title: "ToCents",
        description: "This app is a new way to connect with others who have a specific niche of interest & opinions.",
        github: "https://github.com/Marlowchu/Takes",
        demo: "https://to-cents.herokuapp.com/ ",
        style: 'tocents'

    },
    {
        id: 3,
        image: Fake1,
        title: "Ecommerce Site",
        description: "This is an Ecommerce website",
        github: "#",
        demo: "#",
        

    },
    {
        id: 4,
        image: Fake2,
        title: "Online Healthcare",
        description: "This is an app for online healthcare",
        github: "#",
        demo: " #",
    

    },
]

function Experience() {
    
    return (
        

        <section id="experience">
            <h5>My Recent Work</h5>
            <h2>Experience</h2>


            <div className='container exp_container'>
                {
                    data.map(({id, image, title, description,github, demo, style}) => {
                        return (
                            <article key={id} className='exp_item'>
                            <div className='exp_image'>
                                <img src={image} className={style} alt={title}></img>
                            </div>
                            <h3 className='projectTitle'>{title}</h3>
                            <p>{description}</p>
                            <div className='exp_item_links'>
                                <a href={github}  className='btn' id='repo'>Github</a>
                                <a href={demo} className='btn btn-primary'>Live Demo</a>
                            </div>
                         </article>
                         
                        )
        
                    })
                }
                <div className='space'>HELLO </div>
           

            </div>


        </section>

    )

}


export default Experience;