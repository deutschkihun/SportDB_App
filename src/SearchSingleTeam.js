import React,{useState,useEffect} from 'react'
import Loading from './component/Loading'
import { useParams } from 'react-router-dom'
import {useGlobalContext} from './context'
const url = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id='


const SearchSingleTeam = () => {
    const {closeSubmenu} = useGlobalContext();
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [team, setTeam] = useState(null)


    useEffect(() => {
        setLoading(true)
        async function getSingleTeam() {
            try{
                const response = await fetch(`${url}${id}`)
                const data = await response.json()
                const {teams} = data
                if(teams){
                    const {
                        strTeam:name,
                        strSport:sport,
                        strLeague:league,
                        strStadium:stadium,
                        strCountry:country,
                        strDescriptionEN:desc,
                        strTeamBadge:badge,
                    } = data.teams[0]
                    const newTeam = {
                        name,
                        sport,
                        league,
                        stadium,
                        country,
                        desc,
                        badge
                    }
                    setTeam(newTeam)
                }else {
                    setTeam(null)
                }
                setLoading(false)
            }catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        getSingleTeam()
    }, [id])

    if(loading){
        return (
            <Loading/>
        )
    }

    if(!team){
        return (
            <h2>team not found</h2>
        )
    }


    const {name,sport,league,stadium,country,desc,badge} = team   
    return (
        <>
         <section className='hero' onMouseOver={closeSubmenu}>
            <div className='hero-center'></div>
            <section className='single-section'>
                <h2 className='single-title'>{name}</h2>
                <div className='single-team'>
                    <img src={badge} alt="sorry it will be updated soon"/>
                    <div className='single-team-info'>
                        <p>
                            <span className='single-team-data'>name: </span>{name}
                        </p>

                        <p>
                            <span className='single-team-data'>sport: </span>{sport}
                        </p>

                        <p>
                            <span className='single-team-data'>league: </span>{league}
                        </p>

                        <p>
                            <span className='single-team-data'>stadium: </span>{stadium}
                        </p>

                        <p>
                            <span className='single-team-data'>country: </span>{country}
                        </p>
                    </div>
                </div>
                <br/><br/>
                <h2 className='single-title'>About {name}
                <p className='about'>{desc}</p>
                </h2>
            </section>
        </section>
            </>
    )
}

export default SearchSingleTeam