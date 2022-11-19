import React from 'react'

const Seach = ({searchQuery,setSearchQuery}) => {

  const handleSearchBar=(e)=>{
    setSearchQuery(e.target.value);
  } 
  
  return (
    <div className="search-container flex-container">
            <div className="icon-container flex-container">
                <img src='./src/search.png'></img>
            </div>
            <div className="input-container">
                <input onChange={handleSearchBar} value={searchQuery} placeholder="Search" type="text" />
            </div>
    </div>
  )
}

export default Seach