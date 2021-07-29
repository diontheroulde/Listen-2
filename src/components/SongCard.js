import React, { useState } from 'react'

const SongCard = ({ song, songs, setSongs }) => {
  const [selectedSong, setSelectedSong] = useState(song)
  const { title, id, image, artist, favorited } = selectedSong

  const handleSongLike = (songId, liked) => {
    fetch(`http://localhost:6001/songs/${songId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        favorited: liked
      })
    })
      .then(res => res.json())
      .then(data => {
        setSelectedSong(data)
        const updatedSongs = songs.map((s) => {
          if (s.id === data.id) {
            s.favorited = liked
          }
          return s
        })
        setSongs(updatedSongs)
      }
      )
  }

  const handleInfoClick = (artist, title) => {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
        <li className="card">
          <img src={image} alt={title} />
          <h4>Song: {title}</h4>
          <p>Artist: {artist}</p>
          {favorited
            ? (
          <button onClick={() => handleSongLike(id, false)}>♥</button>
              )
            : (
          <button onClick={() => handleSongLike(id, true)}>♡</button>
              )}
          <button onClick={handleInfoClick}>+</button>
      </li>
  )
}

export default SongCard
