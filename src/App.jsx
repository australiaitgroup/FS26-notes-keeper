import './App.css'
import { useState } from 'react';
import Note from './components/Note';
import Header from './components/Header';
import CreateNote from './components/CreateNote';

function App() {
  const [notes, setNotes] = useState([{id: new Date(), title: 'test tile', content: 'test content'}]);
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
    <Header/>
    <CreateNote addNote={addNote}/>
     {notes.map((noteItem,index)=>{
      return (
        <Note key={noteItem.id} noteItem = {noteItem} deleteNote = {deleteNote}/>
      )
     })}
    </>
  )
}

export default App
