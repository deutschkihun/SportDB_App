import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import SinglePlayer  from './SinglePlayer'

function PlayerList() {

    const {loading,Player} = useGlobalContext();


    if(loading) {
        return ( 
            <Loading/>
        )
    }

    if(Player.length < 1) {
        return (
            <h2>no player matched your search criteria</h2>
        )
    }

    return (
        <div>
            <section className='list'>
                <h2 className='list-title'>
                    Player
                </h2>
                <div className='list-center'>
                    {Player.map((singlePlayer) => {
                        return (
                            <SinglePlayer key={singlePlayer.id} {...singlePlayer}/>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default PlayerList
