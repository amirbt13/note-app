import React from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <div className={styles.container}>
        <input type="text" placeholder="Serach.."/>
    </div>
  )
}

export default SearchBar