import React from 'react'
import NoteIcon from '@mui/icons-material/Note';
import '../App.css'

const Header = () => {
  return (
    <header className='header' >
      <h1>
        <NoteIcon/> Keeper
      </h1>

    </header>
  )
}

export default Header