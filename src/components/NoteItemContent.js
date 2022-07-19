import React from 'react';
import { showFormattedDate } from '../utils';

const NoteItemContent = ({title, createdAt, body}) => {
  return (
    <div className='note-item__content'>
      <h3 className='note-item__title'>{title}</h3>
      <h6 className='note-item__date'>{showFormattedDate(createdAt)}</h6>
      <p className='note-item__body'>{body}</p>
    </div>
  );
}

export default NoteItemContent;
