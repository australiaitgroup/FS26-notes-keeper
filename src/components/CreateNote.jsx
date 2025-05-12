import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import Zoom from '@mui/material/Zoom'
import Fab from '@mui/material/Fab'
import { useState } from 'react'

function CreateNote({addNote}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [newNote, setNewNote] = useState({title:'',content:''})
  const [errorMessage, setErrorMessage]=useState({title:'',content:''})
  const submitNote=()=>{
    let error={title:'',content:''}
    if (!newNote.title){
      error.title='Title is required'
    }
    if (!newNote.content){
      error.content='Content is required'
    }
    if(error.title||error.content){
      setErrorMessage(error)
      return
    }
    addNote({...newNote, id:new Date()})
    setNewNote({title:'',content:''})
    setErrorMessage({title:'',content:''})
    setIsExpanded(false)
  }
  const handleChange=(e)=>{
    const {name, value}= e.target
    setNewNote({...newNote, [name]:value})
    setErrorMessage((prev)=>({...prev,[name]:''}))
  }
  return (
    <div className='create-area'>
      <form className='create-note'>
        {
          isExpanded&&(
            <>
              <input className='title' type="text" name='title' onChange={handleChange} value={newNote.title} placeholder='Title'/>
              {errorMessage.title&&(<p className="error-message">{errorMessage.title}</p>)}
            </>
          )
        }
        <textarea className='textarea' name="content" onChange={handleChange} value={newNote.content} onClick={()=>{setIsExpanded(true)}} placeholder='Take a note' rows={isExpanded?3:1}/>
          {errorMessage.content&&(<p className='error-message'>{errorMessage.content}</p>)}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon/>
          </Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default CreateNote