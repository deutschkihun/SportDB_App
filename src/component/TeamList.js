import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import SingleTeam from './SingleTeam'

function TeamList() {

    const {loading,Team} = useGlobalContext();


    if(loading) {
        return ( 
            <Loading/>
        )
    }

    if(Team.length < 1) {
        return (
            <h2>no team matched your search criteria</h2>
        )
    }

    return (
        <div>
            <section className='list'>
                <h2 className='list-title'>
                    Teams
                </h2>
                <div className='list-center'>
                    {Team.map((singleTeam) => {
                        return (
                            <SingleTeam key={singleTeam.id} {...singleTeam}/>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default TeamList
