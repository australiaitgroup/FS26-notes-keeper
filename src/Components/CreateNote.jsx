import React from 'react';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

const CreateNote = ({ addNote }) => {
  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [isExpanded, setIsExpanded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const updateNewNoteValue = (e) => {
    const { name, value } = e.target;
    setNewNote({ ...newNote, [name]: value });
  };

  const submitNote = (e) => {
    e.preventDefault();
    if (!newNote.title || !newNote.content) {
      setErrorMessage('Both title and content are required');
      return;
    }
    setErrorMessage('');
    addNote({ ...newNote, id: new Date() });
    setIsExpanded(false);
    setNewNote({ title: '', content: '' });
  };

  return (
    <div className='create-area'>
      {errorMessage && (
        <div className='alert'>
          <div className='error'>{errorMessage}</div>
        </div>
      )}
      <form className='create-note' onSubmit={submitNote}>
        {isExpanded && (
          <>
            <input
              name='title'
              type='text'
              value={newNote.title}
              onChange={updateNewNoteValue}
              placeholder='name'
            />
          </>
        )}
        <textarea
          name='content'
          type='text'
          value={newNote.content}
          placeholder={
            isExpanded ? 'Please enter note.' : 'Click to write note'
          }
          onChange={updateNewNoteValue}
          onClick={() => {
            setIsExpanded(true);
          }}
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateNote;