import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'

function About() {
    const {closeSubmenu} = useGlobalContext();
    return (
        <>
            <section className='hero' onMouseOver={closeSubmenu}>
                <div className='about-title'>
                <h2>
                    About SportDB Application
                    <br/>
                </h2>
                <br/>
                <p>
                    Sport db application is the non profit platform that everyone can find
                    sport data by team name or player name. All the database is based on TheSportsDB.com.
                </p>
                <p>
                    Because this platform is depending on TheSportDB.com there are some missing data like image or detail information. 
                    If you have any feedback that I can make this page better. Don't hestiate me to contact. I'm looking forward to see your idea.
                </p>
                <p>
                    In the future new features for example login/out or favorite list will be updated 
                </p>
                <p>
                    Thanks for your visiting sport DB application.
                </p>

                 <p style={{fontWeight:'bold'}}>
                    data copyright : https://www.thesportsdb.com/
                </p>
                <br/><br/>
                <Link to='contact' className='btn'>
                    contact us
                </Link>
                </div>
            </section>
        </>
    )
}
export default About
