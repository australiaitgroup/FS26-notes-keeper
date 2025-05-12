import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note({noteItem,deleteNote}) {
  return (
    <div className='note'>
        <h1>{noteItem.title}</h1>
        <p>{noteItem.content}</p>
        <button onClick={()=>deleteNote(noteItem.id)}>
            <DeleteIcon/>
        </button>
        
    </div>
  )
}
