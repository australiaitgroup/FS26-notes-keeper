import React from 'react'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Fab, Zoom } from '@mui/material'
import Note from './Note'
import { NestCamWiredStandTwoTone } from '@mui/icons-material'


const CreateNote = ({ addNote }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [newNote, setNewNote] = useState({ title: '', content: '' })
  const [errorMessage, setErrorMessage] = useState('')
  const submitNote = (event) => {
    console.debug("Clicked on add button")
    if (!newNote.title || !newNote.content) {
      setErrorMessage('title and content are required')
    } else {
      addNote({...newNote,id:new Date()})
      setNewNote ({title:'',content:''})
      setIsExpanded(false)
      console.debug("call add Note")
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
      </form>
    </div>
  )
}

export default CreateNote