import React, { useState, useEffect } from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Discover from './Discover'
import Favorites from './Favorites'
import NavBar from './NavBar'

const App = () => {
  const [songs, setSongs] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/songs')
      .then(res => res.json())
      .then(data => setSongs(data))
  }, [])

  const filteredSongs = songs.filter((song) => (
    song.favorited && song.title.toLowerCase().includes(search.toLowerCase())
  ))

  return (
    <div>
       <NavBar />
        <Switch>
          <Route exact path="/videos">
            <Discover />
          </Route>
          <Route exact path="/favorites">
            <Favorites
            songs={filteredSongs}
            setSongs={setSongs}
            search={search}
            setSearch={setSearch}
            />
          </Route>
          <Route exact path="/">
            <Home
            songs={songs}
            setSongs={setSongs}
            />
          </Route>
        </Switch>
    </div>
  )
}

export default App
