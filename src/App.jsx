import './App.css'
import { useState } from 'react'
import Note from './components/Note'
import Header from './components/Header'
import CreateNote from './components/CreateNote'

function App() {
  const [notes, setNotes] = useState([])
  //notes要获取子组件的变化，是子传父，用callback function
  //callback function
  const deleteNote = (itemToDeleteId) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem) => {
        return itemToDeleteId !== noteItem.id
      })
    })
  }

  const addNote = (newNote) => {
    setNotes([...notes, newNote])
  }
  return (
    <>
      <Header />
      <CreateNote addNote={addNote} />

      {notes.map((noteItem) => {
        return (
          //要将在app里的note传进其他三个组件，用props传入
          <Note key={noteItem.id} noteItem={noteItem} deleteNote={deleteNote} />
        )
      })}
    </>
  )
}

export default App
