import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title : '',
            body : '',
        };

        //binding this context tho event handler
        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        this.setState(()=> {
            return {
                title : event.target.value,
            }
        });
    }

    onBodyChangeHandler(event) {
        this.setState(()=> {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        //Stop Default Action from submit button
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return(
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <h3>Buat Catatan</h3>
                <p className='note-input__title__char-limit'>Sisa Karakter : </p>
                <input className='note-input__title' type="text" value={this.state.title} onChange={this.onTitleChangeHandler} placeholder='Masukan Judul ...' required />
                <textarea className='note-input__body' type="text" value={this.state.body} onChange={this.onBodyChangeHandler} placeholder='Tulis catatanmu di sini ....'  required/>
                <button type="submit">Simpan</button>
            </form>
        )
    }
}
export default NoteInput;
