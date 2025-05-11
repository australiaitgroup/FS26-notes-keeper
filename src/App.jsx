import { useState } from "react";
import "./App.css";
import Note from "./components/Note";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";

function App() {
  const [notes, setNotes] = useState([
    { id: new Date(), title: "test title", content: "test content" },
  ]);

  const deleteNote = (itemToDeleteId) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem) => {
        return noteItem.id !== itemToDeleteId;
      });
    });
  };

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  return (
    <>
      <Header />
      <CreateNote addNote={addNote} />
      {notes.map((noteItem) => (
        <Note key={noteItem.id} noteItem={noteItem} deleteNote={deleteNote} />
      ))}
    </>
  );
}

export default App;
