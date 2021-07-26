import React, { useState, useEffect } from "react"

import Search from "./Search"
import NewSongForm from "./NewSongForm"
import SongList from "./SongList"

const SongContainer = () => {
    const [search, setSearch] = useState("")
    const [songs, setSongs] = useState([])

    useEffect(() => {
        fetch('http://localhost:6001/songs')
        .then(res => res.json())
        .then(data => setSongs(data))
      },[])

      const filteredSongs = songs.filter((song) => (
          song.title.toLowerCase().includes(search.toLowerCase())
      ))
      
      console.log(filteredSongs)

      return (
          <main>
              <NewSongForm songs={songs} setSongs={setSongs}/>
              <Search search={search} setSearch={setSearch}/>
              <SongList songs={filteredSongs}/>
          </main>
      )
}

export default SongContainer