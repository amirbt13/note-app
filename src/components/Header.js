import React from 'react'
import styles from './Header.module.css'

const Header = ({ darkMode, setDarkMode }) => {

  const darkHandler = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className={styles.container}>
        <h1 className={darkMode ? styles.dark : styles.light}>Notes</h1>
        <button onClick={darkHandler}>Toggle Mode</button>
    </div>
  )
}

export default Header