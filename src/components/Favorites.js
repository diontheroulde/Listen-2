import React, { useEffect } from "react"

import { Layout } from "playbook-ui"

import SongCard from "./SongCard"
import Search from "./Search"

const Favorites = ({ songs, search, setSearch }) => {
    
    // const  songsToDisplay =  songs.filter(song => (

    // ))

const songGallery = songs.map(song => (
            <SongCard 
            key={song.id}
            song={song}
            />
        ))

       
    return (
        <Layout
            layout="collection"
            {...songs}
        >
            <header>
            <Search search={search} setSearch={setSearch} />
            </header>
            <Layout.Body>
                
                {songGallery}
             </Layout.Body>
        </Layout>    
    )
}

export default Favorites