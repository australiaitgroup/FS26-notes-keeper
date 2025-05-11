import { useState } from 'react';
import './App.css';
import Note from './components/Note';
import Header from './components/Header';
import CreateNote from './components/CreateNote';

function App() {
  const [notes, setNotes] = useState([]);

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((prev) => {
        return prev.id !== id;
      });
    });
  };

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <>
      <Header />
      <CreateNote addNote={addNote} />
      {notes.map((noteItem) => {
        return (
          <Note key={noteItem.id} noteItem={noteItem} deleteNote={deleteNote} />
        );
      })}
    </>
  );
}

export default App;
