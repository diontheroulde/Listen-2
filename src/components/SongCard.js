import React, { useState } from "react"

const SongCard = ({ song }) => {
    const {title, image, artist} = song
    const [notLiked, setNotLiked] = useState(true)

    
    const handleLikeClick = () => {
      setNotLiked(!notLiked)
    }

  //   const handleSongLike = (id) => {
  //     fetch(`http://localhost:6001/songs/${id}`, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type" : "application/json"
  //   },
  //   body: JSON.stringify({
  //       notLiked: false
  //   }),
  // })
  // .then(res => res.json())
  // .then(data => setSongs([...songs, data])
  //   )
  //               setNotLiked(!notliked)
  // }

    return (
        <li className="card">
          <img src={image} alt={title} />
          <h4>Song: {title}</h4>
          <p>Artist: {artist}</p>
          {notLiked ? ( 
          <button onClick={handleLikeClick}>♡</button> 
          ) : ( 
          <button onClick={handleLikeClick}>♥</button>
          )}
        </li>
      );
  }

export default SongCard