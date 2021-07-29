import React from 'react'

import { Layout } from 'playbook-ui'

import Search from './Search'
import SongCard from './SongCard'

const Favorites = ({ songs, search, setSearch, setSongs, allSongs }) => {
  console.log(songs)

  const songComponents = songs
    .map(song => (
            <SongCard
            key={song.id}
            song={song}
            songs={allSongs}
            setSongs={setSongs}
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
              {songComponents}
            </Layout.Body>
        </Layout>
  )
}

export default Favorites
