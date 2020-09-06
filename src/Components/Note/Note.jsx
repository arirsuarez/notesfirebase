import React from 'react';
import NoteForm from '../AddNote/NoteForm';
import {db} from '../../config/config'

import './Note.css';

const Note = () => {

    const addNote = async (noteObject) => {        
        //debugger;
        //await db.ref('notes').doc().set(noteObject);
        await db.ref('Notes').push().set(noteObject);
        console.log(noteObject)
    }

    return (
        <>
            <div className="notesContainer">
                <div className='notesHeader'>
                    <h1>Notes App</h1>
                </div>
                <div className='notesBody'>
                    <div className='Note'>
                        <span
                        //onClick={() => this.handleRemove(this.noteId)}
                        >&times;</span>
                        <p>Nota</p>
                    </div>
                </div>
            </div>
            <NoteForm 
                addNote={addNote}
            />
        </>
    )
}

export default Note;