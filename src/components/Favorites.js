import React from "react"

import { Layout } from "playbook-ui"

import Search from "./Search"

const Favorites = ({ songs, search, setSearch }) => {
       console.log(songs)
    return (
        <Layout
            layout="collection"
            {...songs}
        >
            <header>
            <Search search={search} setSearch={setSearch} />
            </header>
            <Layout.Body>
                
            </Layout.Body>
        </Layout>    
    )
}

export default Favorites