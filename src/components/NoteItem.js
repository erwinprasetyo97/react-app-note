import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

const NoteItem = ({title, createdAt, body, id, onDelete, onArchive}) => {
  return (
    <div className='note-item'>
        <NoteItemContent title={title} createdAt={createdAt} body={body}/>
        <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export default NoteItem;
