import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { useRef, useState } from "react";

function CreateNote({ addNote }) {
  const [isExpand, setIsExpand] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const timeoutRef = useRef(null);

  const submitNote = (event) => {
    event.preventDefault();
    if (!newNote.title || !newNote.content) {
      setErrorMessage("Title and Content are required!");

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setErrorMessage("");
        timeoutRef.current = null;
      }, 3000);
    } else {
      addNote({ ...newNote, id: new Date() });
      setNewNote({ title: "", content: "" });
      setIsExpand(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNote({ ...newNote, [name]: value });
  };
  return (
    <div className="create-area">
      {errorMessage && (
        <div className="error">
          {errorMessage}
          <button className="close-btn" onClick={() => setErrorMessage("")}>
            <CloseIcon fontSize="small" />
          </button>
        </div>
      )}
      <form className="create-note">
        {isExpand && (
          <input
            className="title"
            type="text"
            name="title"
            onChange={handleChange}
            value={newNote.title}
            placeholder="Title"
          />
        )}
        <textarea
          className="textarea"
          name="content"
          value={newNote.content}
          onChange={handleChange}
          onClick={() => setIsExpand(true)}
          placeholder="Take a note"
          rows={isExpand ? 3 : 1}
        />
        <Zoom in={isExpand}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
