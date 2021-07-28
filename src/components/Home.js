import React, { useState } from "react"

import NewSongForm from "./NewSongForm"
import SongCard from "./SongCard"


const Home = ({ songs, setSongs }) => {
    const [songIndex, setSongIndex] = useState(0)

    const songComponents = songs
        .slice(songIndex, songIndex + 1)
        .map(song => (
            <SongCard 
            key={song.id}
            song={song}
            songs={songs}
            setSongs={setSongs}
            />
        ))

    const handleClickNext = () => {
        setSongIndex((songIndex) => (songIndex + 1) % songs.length)
    }

    const handleClickBack = () => {
        setSongIndex((songIndex) => (songIndex - 1) % songs.length)
    }

    return (
        <div>
            <h1>Listen 🎧</h1>
            <NewSongForm songs={songs} setSongs={setSongs}/>
            <div className="song-container">
                <button className="left" onClick={handleClickBack}> ❮ </button>
                {songComponents}
                <button className="right" onClick={handleClickNext}> ❯ </button>
            </div>
        </div>
    )
}

export default Home