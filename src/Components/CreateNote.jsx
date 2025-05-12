import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

const CreateNote = ({ addNote }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = (e) => {

    e.preventDefault();

    if (!newNote.title || !newNote.content) {
      setErrorMessage('Please fill in both title and content');
      setTimeout(()=>setErrorMessage(''),3000)
      
    } else {
      addNote({ ...newNote, id: Date.now() });
      setNewNote({ title: '', content: '' });
      setIsExpanded(false);
      setErrorMessage('');
    }
   
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur =(e)=>{
    if(!newNote.title && !newNote.content &&!e.currentTarget.contains(e.relatedTarget)){
      setIsExpanded(false)
    }
  }


  return (
    <div className="create-area">
      <form className="create-note"
      onBlur = {handleBlur}
      tabIndex ={-1} >
        {isExpanded && (
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={newNote.title}
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note ..."
          onClick={() => setIsExpanded(true)}
          value={newNote.content}
          onChange={handleChange}
          rows={isExpanded ? 3 : 1}
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {isExpanded && (
          <Zoom in={isExpanded}>
            <Fab onClick={handleClick}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
};

export default CreateNote;