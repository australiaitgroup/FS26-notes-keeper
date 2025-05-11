import './App.css'
import { useState } from 'react'
import Note from './component/Note'
import Header from './component/Header'
import CreateNote from './component/CreateNote'


function App() {
  const [notes, setNotes] = useState([{id: new Date(), title: 'test Title', content: 'test Content'}])
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, itemToDeleteId) => {
        return itemToDeleteId !== id
      })
    })
  }
  const addNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  return (
    <>
      <Header />
      <CreateNote />
      <CreateNote addNote={addNote} />
      {notes.map((noteItem) => {
        return (
          <Note key={noteItem.id} noteItem={noteItem} deleteNote={deleteNote}/>
        )
      })}


    </>
  )
}

export default App
