import React, {useState} from 'react'
import Note from './Note'
import styles from './Notes.module.css'
import uniqid from 'uniqid'

const Notes = () => {

    const [fields, setFields] = useState({
      title: "New Note",
      main: ""
    })

    const [notes, setNotes] = useState([])

    const changeHandler = (event) => {
      setFields(prevFields => {
         return {
          ...prevFields,
        [event.target.name] : event.target.value
         }
      })
    }

    const addNote = () => {
      setNotes(prevNotes => {
        console.log(notes)
        return [
          ...prevNotes,
          {...fields, id: uniqid()}
        ]
      })
      setFields({
        title: "New Note",
        main: ""
      })
    }

    const deleteNote = (id) => {
      setNotes(prevNotes => {
       return prevNotes.filter(note => note.id !== id) 
      })
    }

  return (
    <div className={styles.container}>
        <div className={styles.noteCard}>
            <input type="text" value={fields.title} name="title" onChange={changeHandler} onClick={() => {
              if(fields.title === "New Note"){
                setFields(prevFields => {
                  return {
                    ...prevFields,
                    title: ""
                  }
                })
              }
            }}
            onBlur={() => {
              if(fields.title === ""){
                setFields(prevFields => {
                  return {
                    ...prevFields,
                    title: "New Note"
                  }
                })
              }
            }}
      />
            <textarea value={fields.main} name="main" onChange={changeHandler}/>
            <button onClick={addNote}>save</button>
        </div>
        {notes.map(note => <Note key={note.id} note={note} deleteNote={deleteNote}/>)}
    </div>
  )
}

export default Notes