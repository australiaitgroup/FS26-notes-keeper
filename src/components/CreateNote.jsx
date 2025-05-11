import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

const CreateNote = ({ addNote }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const submitNote = (e) => {
    e.preventDefault(); 

    if (!newNote.title.trim() || !newNote.content.trim()) {
      setErrorMessage('please enter both title and content'); 
    } else {
      addNote({ ...newNote, id: new Date().getTime() });
      setNewNote({ title: '', content: '' });
      setIsExpanded(false);
      setErrorMessage(''); 
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNote({ ...newNote, [name]: value });
    setErrorMessage(''); 
  };

  return (
    <div className="create-area">
      <form className="create-note" onSubmit={submitNote}>
        {isExpanded && (
          <input
            className="title"
            type="text"
            name="title"
            value={newNote.title}
            onChange={handleChange}
            placeholder="Title"
          />
        )}

        <textarea
          className="textarea"
          name="content"
          value={newNote.content}
          onClick={() => setIsExpanded(true)}
          onChange={handleChange}
          placeholder="Take a note"
          rows={isExpanded ? 3 : 1}
        />

        {errorMessage && (
          <p style={{ color: 'red', margin: '2px 4px' }}>{errorMessage}</p>
        )}

        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateNote;
