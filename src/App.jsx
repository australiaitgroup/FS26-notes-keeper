import { useState } from "react";
import "./App.css";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([
    { id: new Date(), title: "test title", content: "test content" },
  ]);

  return (
    <>
      <Header />
      <CreateNote />
      {notes.map((noteItem, index) => {
        return <Note />;
      })}
    </>
  );
}

export default App;
