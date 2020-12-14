import React from 'react'
import { useGlobalContext } from './context'
import SearchTeam from './component/SearchTeam'
import TeamList  from './component/TeamList'

function TeamPage() {
    const {closeSubmenu} = useGlobalContext();
    return (
        <section className='hero' onMouseOver={closeSubmenu}>
            <article className='hero-item'>
                <h2>
                    Find team on the search box below
                </h2>
                <SearchTeam/>
                <TeamList/>
            </article>
        </section>
    )
}

export default TeamPage
