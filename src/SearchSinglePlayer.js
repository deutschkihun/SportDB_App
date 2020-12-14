import React,{useState,useEffect} from 'react'
import Loading from './component/Loading'
import { useParams } from 'react-router-dom'
import {useGlobalContext} from './context'
const url = 'https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id='

function SearchSinglePlayer() {

    const {closeSubmenu} = useGlobalContext();
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [player, setPlayer] = useState(null)



    useEffect(() => {
       setLoading(true)
       async function getSinglePlayer(){
           try {
               const response = await fetch(`${url}${id}`)
                const data = await response.json()
                const {players} = data
                if(players){
                    const {
                       strPlayer:name,
                       strTeam:team,
                       strSport:sport,
                       dateBorn:birthday,
                       strBirthLocation:birthlocation,
                       strSigning:transfer_fee,
                       strWage:wage,
                       strNumber:number,
                       strPosition:position,
                       strHeight:height,
                       strWeight:weight,
                       strInstagram:insta,
                       strDescriptionEN:desc,
                       strThumb:profile
                    } = data.players[0]
                    const newPlayer = {
                        name,
                        team,
                        sport,
                        birthday,
                        birthlocation,
                        transfer_fee,
                        wage,
                        number,
                        position,
                        height,
                        weight,
                        insta,
                        desc,
                        profile,
                        
                    }
                     setPlayer(newPlayer)
                }else{
                    setPlayer(null)
                }
               setLoading(false)
           } catch (error) {
               console.log(error)
               setLoading(false)
           }
       }
       getSinglePlayer()
    }, [id])


    if(loading){
        return (
            <Loading/>
        )
    }

    if(!player){
        return(
            <h2>player not found</h2>
        )
    }

    const { name,
            team,
            sport,
            birthday,
            birthlocation,
            transfer_fee,
            wage,
            number,
            position,
            height,
            weight,
            insta,
            desc,
            profile} = player

     return (
        <>
         <section className='hero' onMouseOver={closeSubmenu}>
            <div className='hero-center'></div>
            <section className='single-section'>
                <h2 className='single-title'>{name}</h2>
                <div className='single-team'>
                    <img src={profile} alt="sorry it will be updated soon"/>
                    <div className='single-team-info'>
                        <p>
                            <span className='single-team-data'>name: </span>{name}
                        </p>

                        <p>
                            <span className='single-team-data'>team: </span>{team}
                        </p>

                        <p>
                            <span className='single-team-data'>sport: </span>{sport}
                        </p>

                        <p>
                            <span className='single-team-data'>birthday: </span>{birthday}
                        </p>

                        <p>
                            <span className='single-team-data'>birthlocation: </span>{birthlocation}
                        </p>

                        <p>
                            <span className='single-team-data'>transfer fee: </span>{transfer_fee}
                        </p>

                        <p>
                            <span className='single-team-data'>wage: </span>{wage}
                        </p>

                        <p>
                            <span className='single-team-data'>back number: </span>{number}
                        </p>

                        <p>
                            <span className='single-team-data'>position: </span>{position}
                        </p>

                        <p>
                            <span className='single-team-data'>height: </span>{height}
                        </p>

                        <p>
                            <span className='single-team-data'>weight: </span>{weight}
                        </p>

                        <p>
                            <span className='single-team-data'>insta: </span>{insta}
                        </p>
                    </div>
                </div>
                <br/><br/><br/><br/>
                <h2 className='single-title'>About {name}
                <p className='about'>{desc}</p>
                </h2>
                </section>
            </section>
            </>
    )
}

export default SearchSinglePlayer
