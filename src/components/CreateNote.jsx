import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Zoom  from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
export default function CreateNote({addNote}) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [newNote, setNewNote] = useState({
        title: '',
        content: ''
    })
    const [errowMessage, setErrowMessage] = useState('')
    const submitNote = (e) =>{
        e.preventDefault()
        if(!newNote.title || !newNote.content){
            setErrowMessage('Please fill all the fields')
        } else {
        addNote({...newNote, id:new Date()})
        setNewNote({title: '', content: ''})
        setIsExpanded(false)
        setErrowMessage('')
        }
        console.log(newNote)
    }
    const handleChange = (e) => {
        const {name, value} = e.target
        setNewNote({...newNote, [name]: value})
    }

    const errorstate = () =>{
        if(errowMessage){
            return <p className='error'>{errowMessage}</p>
        }
    }
  return (
    <div className = 'create-area'>
        <form className = 'create-note'>
            {isExpanded && (
                <input 
                className = 'title' 
                type = 'text'
                name = 'title'
                onChange={handleChange}
                value = {newNote.title}
                placeholder='Title'
                />
            )}
            <textarea 
            className = 'textarea' 
            name = 'content' 
            value = {newNote.content}
            onChange={handleChange}
            onClick = {()=>setIsExpanded(true)}
            placeholder='Take a note...'
            rows={isExpanded ? 3 : 1}
            />
            <Zoom in = {isExpanded}>
                <Fab onClick={submitNote} >
                    <AddIcon />
                </Fab>
            </Zoom>
            
        </form> 
        {errorstate()}
    </div>
  )
}
