import React from 'react'
import { Link } from 'react-router-dom'



const SingleTeam = ({id,name,sport,country,image,league}) => {
    return (
        <article className='team'>
            <div className='img-container'>
                <img src={image} alt="sorry it will be updated soon"/>
            </div>
            <div className='team-footer'>
                <h3>{name}</h3>
                <h4>{sport}</h4>
                <p>{country}</p>
                <p>{league}</p>
            <Link to={`/team/${id}`} className='btn'>
                details
            </Link>
            </div>
        </article>
    )
}

export default SingleTeam
