import React, { useEffect, useState } from 'react'
import styles from './SearchBar.module.css'

const SearchBar = ({ setNotes }) => {

  const [searchText, setSearchText] = useState("")

  

  useEffect(() => setNotes(prevNotes => {
  
  
    if(searchText !== ""){
  
     return prevNotes.map(note => {
        if(note.main.includes(searchText) || note.title.includes(searchText)){
          return {
            ...note,
          }
        } else {
          return {
            ...note,
            isShown: false
          }
        }
      })
    } else {
      return prevNotes.map(note => {
        return {
          ...note,
          isShown: true
        }
      })
    }
    
  }), [searchText])
    
    
  

  return (
    <div className={styles.container}>
        <input value={searchText} name="searchText" type="text" placeholder="Search.." onChange={(event) => {
          setSearchText(event.target.value)
        }}/>
    </div>
  )
}

export default SearchBar