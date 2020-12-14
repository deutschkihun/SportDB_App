import React from 'react'
import { useGlobalContext } from './context';

function Favorite() {

    const {closeSubmenu} = useGlobalContext();
    return (
        <section className='hero' onMouseOver={closeSubmenu}>
            <h2 style={{marginTop:'20rem'}}>Coming soon</h2>
        </section>
    )

}

export default Favorite
