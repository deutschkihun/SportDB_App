import React,{useRef,useEffect} from 'react'
import { useGlobalContext } from '../context'

function SearchPlayer() {

    const {setSearchPlayer} = useGlobalContext()
    const searchValue = useRef('')

    useEffect(() => {
        searchValue.current.focus();
    }, [])

    const Submithandler = (e) => {
        e.preventDefault();
    }

    const Changehandler = () => {
        setSearchPlayer(searchValue.current.value)
    }

    return (
        <section className='search-machine'>
            <form className='search-form' onSubmit={Submithandler}>
                <div>
                    <input className='form-control' type="text" id='name' ref={searchValue} onChange={Changehandler}/>
                </div>
            </form>
        </section>
    )
}

export default SearchPlayer
