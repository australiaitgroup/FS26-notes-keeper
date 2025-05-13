import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({noteItem, deleteNote}) => {
  return (
    <div className='note'>
      <h1>{noteItem.title}</h1>
      <p className="note-content">{noteItem.content}</p>
      <button className="delete-note" onClick={()=>deleteNote(noteItem.id)}>
        <DeleteIcon/>
      </button>
    </div>
  )
}

export default Note