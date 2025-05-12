import './App.css';
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([
    { id: Date.now(), title: 'test title', content: 'test contend' }
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
        {notes.length === 0 ? (
          <p style={{ textAlign: 'center' }}>No notes yet.</p>
        ) : (
          <div className="note-container"> {/* ✅ 加容器控制布局 */}
            {notes.map((noteItem, index) => (
              <Note
                key={noteItem.id}
                noteItem={noteItem}
                deleteNote={deleteNote}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
