import React from 'react'
import { Link } from 'react-router-dom'


function SinglePlayer({id,name,team,sport,image}) {
    return (
        <article className='team'>
            <div className='img-container'>
                <img src={image} alt="sorry it will be updated soon"/>
            </div>
            <div className='team-footer'>
                <h3>{name}</h3>
                <h4>{sport}</h4>
                <p>{team}</p>
            <Link to={`/player/${id}`} className='btn'>
                details
            </Link>
            </div>
        </article>
    )
}

export default SinglePlayer
