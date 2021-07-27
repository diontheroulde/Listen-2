import React, { useState } from "react"



const NewSongForm = ({ songs, setSongs }) => {
    const [formData, setFormData] = useState({
        title:"",
        image:"",
        artist:""
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    const handleClick = (event) => {
        event.preventDefault()
        const newSongObj= {
            "title": formData.title,
            "image": formData.image,
            "artist": formData.artist
    }

    fetch("http://localhost:6001/songs", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newSongObj)
    },[])
    .then(res => res.json())
    .then(data => setSongs([...songs, data])
      )
      setFormData({
        title:"",
        image:"",
        artist:""
      })
    }


    return (
        <div className="new-song-form">
          <h2> Add New Song</h2>
          <form>
            <input 
            type="text" 
            name="title" 
            placeholder="🎼 Song Title"
            value={formData.title}
            onChange={handleChange}
            />
            <input 
            type="text" 
            name="image" 
            placeholder="🎼 Image URL" 
            value={formData.image}
            onChange={handleChange}
            />
            <input 
            type="text" 
            name="artist" 
            placeholder="🎼 Artist" 
            value={formData.artist}
            onChange={handleChange}
            />
            <button className="add-new-song" type="submit" onClick={handleClick} >+ Add Song</button>
          </form>
        </div>
      );
}

export default NewSongForm