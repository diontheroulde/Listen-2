import React from "react"

import { Layout } from "playbook-ui"

import SongCard from "./SongCard"

const SongList = ({ songs }) => {
    return (
        <Layout
            layout="collection"
            {...songs}
        >
            <h1>To-Do List:</h1>
             <Layout.Body>
                {songs. map(song => (
                    <SongCard 
                    key={song.id}
                    song={song}
                    />
                ))}
            </Layout.Body>
        </Layout>    
    )
}

export default SongList