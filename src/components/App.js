import React, { useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./Home"
import About from "./About"
import Favorites from "./Favorites"
import NavBar from "./NavBar"


const App = () => {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/songs')
    .then(res => res.json())
    .then(data => setSongs(data))
  },[])

  return (
    <div>
       <NavBar />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/favorites">
            <Favorites songs={songs} setSongs={setSongs} />
          </Route>
          <Route exact path="/">
            <Home songs={songs} setSongs={setSongs} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
