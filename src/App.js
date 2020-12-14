import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import TeamPage from './TeamPage'
import SearchSingleTeam from './SearchSingleTeam'
import SearchSinglePlayer from './SearchSinglePlayer'
import PlayerPage from './PlayerPage'
import About from './About'
import Contact from './Contact'
import Error from './Error'
function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Submenu/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/team' component={TeamPage} />
        <Route exact path='/team/:id' component={SearchSingleTeam} />
        <Route exact path='/player' component={PlayerPage} />
        <Route exact path='/player/:id' component={SearchSinglePlayer} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route path='*' component={Error} />
      </Switch>
    </Router>
  )
}

export default App
