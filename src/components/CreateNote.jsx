import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Zoom, Fab } from "@mui/material";

function CreateNote({ addNote }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [newNote, setNewNote] = React.useState({
    title: "",
    content: "",
  });
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newNote.title || !newNote.content) {
      setErrorMessage("Please fill in all fields.");
    } else {
      addNote({ ...newNote, id: new Date() });
      setNewNote({ title: "", content: "" });
      setErrorMessage("");
      setIsExpanded(false);
    }
  };

  const handleNoteChange = (e) => {
    const { name, value } = e.target;
    setNewNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  return (
    <div className="create-area">
      <form className="create-note" onSubmit={handleSubmit}>
        {isExpanded && (
          <input
            className="title"
            type="text"
            name="title"
            value={newNote.title}
            placeholder="Title"
            onChange={handleNoteChange}
          />
        )}
        <textarea
          className="textarea"
          name="content"
          onClick={() => setIsExpanded(true)}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={newNote.content}
          onChange={handleNoteChange}
        ></textarea>
        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
      {errorMessage && <p className="error alert">{errorMessage}</p>}
    </div>
  );
}

export default CreateNote;
