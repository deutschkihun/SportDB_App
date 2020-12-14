import React from 'react'
import {useGlobalContext} from './context'

function Error() {
    const {closeSubmenu} = useGlobalContext();
    return (
        <section className='hero' onMouseOver={closeSubmenu}>
            <div className='hero-center'></div>
        </section>
    )
}

export default Error
