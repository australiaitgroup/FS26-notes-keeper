import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import Alert from '@mui/material/Alert';

const CreateNote = ({addNote}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [newNote, setNewNote] = useState({title:"",content:""})
  const [errorMessage, setErrorMessage] = useState('')
  
  const submitNote = (event)=> {
    event.preventDefault()

    if (!newNote.title){
      setErrorMessage("Please enter a title")
      return 
    }
    if (!newNote.content){
      setErrorMessage("Please enter a content")
      return
    }

    addNote({...newNote,id:new Date()})
    setNewNote({title:"",content:""})
    setIsExpanded(false)
    setErrorMessage("")
  }

  const handleChange =(e)=> {
    const {name,value} = e.target;
    setNewNote({...newNote, [name]:value})

    if (errorMessage && value){
      setErrorMessage("")
    }
  }

  return (
    <div className="create-area">
      <form className="create-note">
          {isExpanded && (
            <input 
            className={`title ${!newNote.title && errorMessage ? 'error' : ""}`}
            type="text" 
            name="title" 
            onChange={handleChange}
            value={newNote.title}
            placeholder="Title"/>
            )}
      
            <textarea 
              className={`textarea ${!newNote.content && errorMessage ? 'error' : ''}`}
              name="content" 
              value={newNote.content}
              onChange={handleChange}
              onClick={()=>setIsExpanded(true)}
              placeholder="Take a note"
              rows={isExpanded ? 3:1}
            />
            <Zoom in={isExpanded}>
              <Fab onClick={submitNote}>
                <AddIcon/>
              </Fab>
            </Zoom>
      </form>

      {errorMessage && (
        <Alert severity="error" sx={{mt: 2}}>
          {errorMessage}
        </Alert>
      )}
    </div>
  );
}

export default CreateNote;