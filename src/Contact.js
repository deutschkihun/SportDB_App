import React from 'react'
import { useGlobalContext } from './context'
import profile from './images/profile.png';
import {FaGithub,FaMailBulk,FaLinkedin} from 'react-icons/fa'

function Contact() {
    const {closeSubmenu} = useGlobalContext();
    return (
        <section className='hero' onMouseOver={closeSubmenu}>
                 <article className='hero-images'>
                    <img src={profile} alt='profile'/>
                </article>
                <article className='contact'>
                    <br/>
                    <h1>
                        Kihun Kim
                    </h1>
                    <h3>
                        Coding enthusiast
                    </h3>
                    <br/>
                    <a href="https://github.com/deutschkihun" target='_blank' rel="noopener noreferrer">
                        <FaGithub/>
                    </a>
                     <a href="https://www.linkedin.com/in/kihun-kim-b35b73174/"  target='_blank' rel="noopener noreferrer">
                        <FaLinkedin/>
                    </a>

                    <a href="mailto:deutschkihun@gmail.com"  target='_blank' rel="noopener noreferrer">
                        <FaMailBulk/>
                    </a>
                </article>           
        </section>
    )
}

export default Contact
