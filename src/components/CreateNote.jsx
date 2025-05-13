import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

const CreateNote = ({ addNote }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = (e) => {
    if (!newNote.title || !newNote.content) {
      setErrorMessage('Title and content are required.');
    } else {
      addNote({ ...newNote, id: Date.now() });
      setNewNote({ title: '', content: '' });
      setIsExpanded(false);
      setErrorMessage('');
    }
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrorMessage('');
    setNewNote((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="create-area">
      <form className="create-note">
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
        {errorMessage && <p className="error">{errorMessage}</p>}
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
