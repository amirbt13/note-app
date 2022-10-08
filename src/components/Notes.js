import React, {useState} from 'react'
import styles from './Notes.module.css'

const Notes = () => {

    const [notes, setNotes] = useState([])

  return (
    <div className={styles.container}>
        <div className={styles.noteCard}>
            <input type="text" value="New Note" />
            <textarea />
            <button>save</button>
        </div>
    </div>
  )
}

export default Notes