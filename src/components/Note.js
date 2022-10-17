import React from 'react'
import styles from './Note.module.css'

const Note = ({ note, deleteNote }) => {
  return (
    <div className={styles.noteCard}>
        <h4>{note.title}</h4>
        <p>{note.main}</p>
        <div className={styles.deleteBtn} onClick={() => deleteNote(note.id)}>X</div>
    </div>
  )
}

export default Note