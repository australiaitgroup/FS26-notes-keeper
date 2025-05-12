import React, { useEffect } from 'react'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Fab, Zoom } from '@mui/material'

const CreateNote = ({ addNote }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [newNote, setNewNote] = useState({ title: '', content: '' })
  const [errorMessage, setErrorMessage] = useState('')
  const submitNote = (event) => {
    if (!newNote.title || !newNote.content) {
      console.log('error')
      setErrorMessage('Title and content are required')
    } else {
      addNote({...newNote,id:new Date()})
      setNewNote ({title:'',content:''})
      setIsExpanded(false)
    }
    event.preventDefault()
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNote({ ...newNote, [name]: value })
  }

  return (
    <div className='create-area'>
      <form className='create-note'>
        {isExpanded && (
          <input
            className='title'
            type="text"
            name='title'
            onChange={handleChange}
            value={newNote.title}
            placeholder='Title'
          />
        )
      }
        <textarea
          className='textarea'
          name='content'
          placeholder='Take a note'
          rows={isExpanded ? 3 : 1}
          onClick={() => setIsExpanded(true)}
          onChange={handleChange}
          value={newNote.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon></AddIcon>
          </Fab>
        </Zoom>
        <ErrorMessage errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
      </form>
    </div>
  )
}

export default CreateNote

const ErrorMessage = ({errorMessage,setErrorMessage})=> {
  const [visible,setVisible] = useState(false);
  useEffect(()=>{
    if(errorMessage){
      setVisible(true);
    }
    setTimeout(()=> {
      setErrorMessage('');
      setVisible(false);
    },3000)
  },[errorMessage]

);



  return(
    <div
    className='error-message'
    style ={{
      display:visible ? "block":"none",
      color:"red",
      backgroundColor:'rgba(0,0,0,0.1)',
      textAlign:'center',
      fontSize:'15px',
      lineHeight:'15px',
      maxWidth:'75ch',
      padding: '5px',
      }}
    >
      {errorMessage}
    </div>
  )
}

