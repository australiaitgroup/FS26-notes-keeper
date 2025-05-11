import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom'
import Fab from '@mui/material/Fab'


const CreateNote = ({addNote}) => {
const [isExpanded, setIsExpanded] = useState(false);
const [newNote, setNewNote] = useState({ title: '', content: '' });
const [errorMessage,setErrorMessage] = useState('')
const submitNote=(event)=>{

    if(!newNote.title || !newNote.content){
        setErrorMessage('title and content are required!')
    }

    else{
        addNote({...newNote,id:new Date()})
        setNewNote({title:'', content:''})
        setIsExpanded(false)
        
    }
    event.preventDefault()
}

const handleChange = (e) => {

    const {name, value} = e.target;
    setNewNote({...newNote, [name]:value})

    if(errorMessage){
        setErrorMessage('')
    }

}

return (
    <div className="create-area">
    <form className="create-note">
        {isExpanded && (
        <input
            type="text"
            name="title"
            
            onChange={handleChange}
            value = {newNote.title}
            placeholder="Title"
        />
        )}
        <textarea
        
        value ={newNote.content}
        onChange = {handleChange}
        name="content"
        onClick={() => setIsExpanded(true)}
        placeholder='Take a note '
        rows={isExpanded?3:1}
        ></textarea>


        <Zoom in = {isExpanded}>
            <Fab onClick={submitNote}>
                <AddIcon/>
            </Fab>

        </Zoom>

    </form>
    <p className="center-message" >{errorMessage}</p>
    </div>
);
};

export default CreateNote;
