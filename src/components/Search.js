import React from "react"

const Search = ({ search, setSearch }) => {
  const handleChange = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }
  return (
        <div className="searchbar">
          <label htmlFor="search">Search Songs:</label>
          <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          value={search}
          onChange={handleChange}
      />
    </div>
    )
}

export default Search