import React from 'react'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import Fab from '@mui/material/Fab'
import Zoom from '@mui/material/Zoom'
import Alert from '@mui/material/Alert'


const CreateNote = ({ addNote }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [newNote, setNewNote] = useState({ title: '', content: '' })
    const [errorMessage, setErrorMessage] = useState('')
    const [showError, setShowError] = useState(false)
    const submitNote = (event) => {
        event.preventDefault()//阻止默认行为
        if (!newNote.title || !newNote.content) {
            setErrorMessage('title and content are required!')
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 3000)

        } else {
            addNote({ ...newNote, id: new Date() })
            setNewNote({ title: '', content: '' })
            setIsExpanded(false)
            setErrorMessage('');
            setShowError(false);
        }


    }
    const handleChange = (e) => {
        const { name, value } = e.target//是个object，不是array
        setNewNote({ ...newNote, [name]: value })
    }
    return (
        <div className='create-area'>
            <form className='create-note' >
                {isExpanded && (
                    <input className='title'
                        type="text"
                        name='title'
                        onChange={handleChange}
                        value={newNote.title}
                        placeholder='Title' />
                )}
                <textarea
                    className='textarea'
                    name="content"
                    onChange={handleChange}
                    onClick={() => setIsExpanded(true)}
                    placeholder='Take a note'
                    value={newNote.content}
                    rows={isExpanded ? 3 : 1} />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>


            {showError && (
                <Alert severity="error" sx={{ mt: 1, fontSize: '0.9rem' }}>
                    {errorMessage}
                </Alert>
            )}

        </div>
    )
}

export default CreateNote