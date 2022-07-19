import React from 'react';
import NoteSearch from './NoteSearch';

const NoteHeader = ({onSearchChange, searchTitle}) => {
  return (
    <div className='note-app__header'>
      <h1>Notes App</h1>
      <NoteSearch searchTitle={searchTitle} onSearchChange={onSearchChange}/>
    </div>
  );
}

export default NoteHeader;
