import React, { useState, useContext,useEffect,useCallback } from 'react'
import {sublinks} from './data'

const team_url = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t='
const player_url = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Danny%20Welbeckhttps://www.thesportsdb.com/api/v1/json/1/searchplayers.php?&p='
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setisSidebarOpen] = useState(false)
    const [isSubmenuOpen, setisSubmenuOpen] = useState(false)
    const [loading, setloading] = useState(true)
    const [searchTeam, setSearchTeam] = useState('a')
    const [searchPlayer, setSearchPlayer] = useState('ronaldo')
    const [Team, setTeam] = useState([])
    const [Player, setPlayer] = useState([])
    const [location, setLocation] = useState({})
    const [Page, setPage] = useState({page:'', links:[]})
    
    const openSidebar = () => {
        setisSidebarOpen(true)
    }

     const closeSidebar = () => {
        setisSidebarOpen(false)
    }

    const openSubmenu = (text,coordinates) => {
        const page = sublinks.find((link) => link.page === text)
        setPage(page)
        setLocation(coordinates)
        setisSubmenuOpen(true)
    }

     const closeSubmenu = () => {
        setisSubmenuOpen(false)
    }

    const FetchTeam = useCallback(async () => {
        setloading(true)
        try {
           const response = await fetch(`${team_url}${searchTeam}`)
           const team_data = await response.json()
           const {teams} = team_data
           if(teams){
                   const newTeams = teams.map((team) => {
                   const {idTeam,strTeam,strSport,strCountry,strTeamBadge,strLeague} = team
                   return ( 
                        {
                            id:idTeam,
                            name:strTeam,
                            sport:strSport,
                            country:strCountry,
                            image:strTeamBadge,
                            league:strLeague
                        }
                   )
               })
               setTeam(newTeams)
           }else{
               setTeam([])
           }
           setloading(false)
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }, [searchTeam])


    const FetchPlayer = useCallback(async () => {
        setloading(true)
        try {
            const response = await fetch(`${player_url}${searchPlayer}`)
            const player_data = await response.json()
            const {player} = player_data
            if(player){
                    const newPlayer = player.map((person) => {
                    const {idPlayer,strPlayer,strTeam,strSport,strThumb} = person
                    return ( 
                        {
                            id:idPlayer,
                            name:strPlayer,
                            team:strTeam,
                            sport:strSport,
                            image:strThumb,
                        }
                    )
                })
                setPlayer(newPlayer)
            }else{
                setPlayer([])
            }
            setloading(false)
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    },[searchPlayer])

    useEffect(() => {
        FetchTeam()
        FetchPlayer()
    }, [searchTeam,FetchTeam,searchTeam,FetchPlayer])

    return (
        <AppContext.Provider
        value={{
            isSidebarOpen,
            isSubmenuOpen,
            openSidebar,
            closeSidebar,
            openSubmenu,
            closeSubmenu,
            location,
            Page,
            loading,
            Team,
            Player,
            setSearchTeam,
            setSearchPlayer
        }}>
            {children}
        </AppContext.Provider>
    )
}
 
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
