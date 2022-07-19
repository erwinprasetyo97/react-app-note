import React from 'react';
import {getInitialData} from '../utils/index';
import NoteBody from './NoteBody';
import NoteHeader from './NoteHeader';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes : getInitialData(),
            searchedNotes : [],
            searchTitle : '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onSearchChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                searchTitle: event.target.value,
            };
        });

        this.onSearchChangeEventHandler(event.target.value);
    }
    
    onSearchEventHandler(searchedTitle) {
        let searchedNotes = this.state.notes.filter((note) =>
            note.title.toLowerCase().includes(searchedTitle.toLowerCase()));
            if(this.state.searchTitle.length >=0) {
                this.setState({searchedNotes: null});
                this.setState({searchedNotes: searchedNotes})
            } else {
                this.setState({searchedNotes: null});
                this.setState({searchedNotes: this.state.notes})
            }
    }


    onAddNoteHandler({title, body}) {
        this.setState((prevState)=> {
            return{
                notes : [
                    ...prevState.notes,
                    {
                        id : +new Date(),
                        title,
                        body,
                    }
                ]
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <NoteHeader onSearchChange={this.onSearchChangeEventHandler} searchTitle={this.state.searchTitle}/>
                <NoteBody addNote={this.onAddNoteHandler} notes={this.state.notes} onDelete={this.onDeleteHandler}/>
            </React.Fragment>
        )
    }
}

export default NoteApp;
