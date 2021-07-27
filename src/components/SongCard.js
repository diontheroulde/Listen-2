import React from "react"

const SongCard = ({ song }) => {
    const {title, image, artist} = song

    return (
        <li className="card">
          <img src={image} alt={title} />
          <h4>Song: {title}</h4>
          <p>Artist: {artist}</p>
          <button>♡</button>
        </li>
      );
}

export default SongCard