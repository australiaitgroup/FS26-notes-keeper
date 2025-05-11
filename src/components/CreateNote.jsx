import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { useState } from "react";

function CreateNote({ addNote }) {
  const [isExpand, setIsExpand] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const submitNote = () => {
    if (!newNote.title || !newNote.content) {
      setErrorMessage("title and content are required!");
    } else {
      addNote({ ...newNote, id: new Date() });
      setNewNote({ title: "", content: "" });
      setIsExpand(false);
    }
    event.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNote({ ...newNote, [name]: value });
  };
  return (
    <div className="create-area">
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
