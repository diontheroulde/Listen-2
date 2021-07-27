import React, { useState } from "react"

import { Layout } from "playbook-ui"

import SongCard from "./SongCard"

const Favorites = ({ songs }) => {

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
            <Layout.Body>
                {songGallery}
             </Layout.Body>
        </Layout>    
    )
}

export default Favorites