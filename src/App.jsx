import "./App.css";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([
    { id: new Date(), title: "test title", content: "test contend" },
  ]);
  const deleteNote = (deletedItemId) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem) => {
        return deletedItemId !== noteItem.id;
      });
    });
  };
  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };
  return (
    <>
      <Header />
      <div>
        <CreateNote addNote={addNote} />
        {notes.map((noteItem, index) => (
          <Note key={noteItem.id} noteItem={noteItem} deleteNote={deleteNote} />
        ))}
      </div>
    </>
  );
}

export default App;
