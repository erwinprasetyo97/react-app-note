import React from 'react';

const NoteSearch = ({searchTitle, onSearchChange}) => {
  return (
    <div className='note-search'>
      <input type='text' value={searchTitle}
      onChange={(event)=> onSearchChange(event)} 
      placeholder='Cari catatan ...'/>
    </div>
  );
}

export default NoteSearch;
