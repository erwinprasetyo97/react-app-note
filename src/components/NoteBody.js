import React from 'react';
import NotesList from './NotesList';
import NoteInput from './NoteInput';
import { getInitialData } from '../utils';

class NoteBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes : getInitialData(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onAddNoteHandler({title, body}) {
        this.setState((prevState)=> {
            return{
                notes : [
                    ...prevState.notes,
                    {
                        id : +new Date(),
                        title,
                        createdAt: new Date().toISOString(),
                        body,
                    }
                ]
            }
        })
    }

    render() {
        return (
          <div className='note-app__body'>
              <NoteInput addNote={this.onAddNoteHandler}/>
              <h2>Catatan Aktif</h2>
              <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
              <h2>Arsip</h2>
          </div>
        )
    }

}

export default NoteBody;
