import React, { useState } from 'react'
import ProfileInfo  from './Cards/ProfileInfo'
import SearchBar from './SearchBar/SearchBar'
// import { useNavigate } from 'react-router-dom'

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {

  const [searchQuery, setSearchQuert]=useState("");

  // const navigate = useNavigate()

  // const onLogout = () =>{
  //   navigate("/login");
  // }
  const handleSearch = ()=>{
    if(searchQuery){
      onSearchNote(searchQuery)
    }
  }

  const onClearSearch = () =>{
    setSearchQuert("")
    handleClearSearch();
  }

  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
      <h2 className='text-xl font:medium text-black py-2'>Notes</h2>

       <SearchBar value={searchQuery}
       onChange={({ target }) =>{
        setSearchQuert(target.value)
       }}
       handleSearch={handleSearch}
       onClearSearch={onClearSearch}
       />

      <ProfileInfo userInfo={userInfo}/>
    </div>
  )
}

export default Navbar
