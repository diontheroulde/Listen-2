// import React, { useState } from "react"

// import { Layout } from "playbook-ui"

// import SongCard from "./SongCard"

// const SongList = ({ songs }) => {
//     const [songIndex, setSongIndex] = useState(0)

//     const songComponents = songs
//         .slice(songIndex, songIndex + 1)
//         .map(song => (
//             <SongCard 
//             key={song.id}
//             song={song}
//             />
//         ))

//     const handleClickNext = () => {
//         setSongIndex((songIndex) => (songIndex + 1) % songs.length)
//     }

//     // const handleClickBack = () => {
//     //     setSongIndex((songIndex) => (songIndex - 1))
//     // }

//     return (
//         <Layout
//             layout="collection"
//             {...songs}
//         >
//             <Layout.Body>
//                 {/* <button onClick={handleClickBack}> ❮ </button> */}
//                 {songComponents}
//                 <button onClick={handleClickNext}> ❯ </button>
//             </Layout.Body>
//         </Layout>    
//     )
// }

// export default SongList