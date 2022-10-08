import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
        <h1>Notes</h1>
        <button>Toggle Mode</button>
    </div>
  )
}

export default Header