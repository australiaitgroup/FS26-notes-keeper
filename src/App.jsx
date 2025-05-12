import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Note from './components/Note'
import CreateNote from './components/CreateNote'

function App() {
  const [notes, setNotes] = useState([{id: new Date(), title :'test title', content: 'test content'}])
  const deleteNote = (itemtoDeleteId) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem) =>{
        return itemtoDeleteId !== noteItem.id
      })
    })
  }

  const addNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  return (
    <>
    <Header/>
    <CreateNote  addNote = {addNote}/> 
     {notes.map((noteItem) => {
      return ( 
      <Note key={noteItem.id} noteItem = {noteItem} deleteNote = {deleteNote} />
      )
    })}
    </>
  )
}

export default App
