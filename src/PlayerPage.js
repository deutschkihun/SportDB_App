import React from 'react'
import { useGlobalContext } from './context'
import SearchPlayer from './component/SearchPlayer'
import PlayerList from './component/PlayerList'

function PlayerPage() {
    const {closeSubmenu} = useGlobalContext();
    return (
        <section className='hero' onMouseOver={closeSubmenu}>
            <article className='hero-item'>
                <h2>
                    Find player on the search box below
                </h2>
                <SearchPlayer/>
                <PlayerList/>
            </article>
        </section>
    )
}

export default PlayerPage
