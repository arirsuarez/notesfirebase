import React, {Component} from 'react';
import './App.css';
import Note from './Components/Note/Note';
import NoteForm from './Components/AddNote/NoteForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {noteId: 1, noteContent: 'Note 1'},
        {noteId: 2, noteContent: 'Note 2'}
      ]
    };
    this.addNote = this.addNote.bind(this);
  }

  removeNote(){

  }

  addNote(note) {
    let {notes} = this.state;
    notes.push({
      noteId: notes.length + 1,
      noteContent: note
    });
    this.setState({ notes });
  }


  render() {
    return (
      <div className="notesContainer">
        <div className='notesHeader'>
          <h1>Notes App</h1>
        </div>
  
        <div className='notesBody'>
          <ul>
            {
              this.state.notes.map(note => {
                return (
                  <Note 
                    noteContent={note.noteContent}
                    noteId={note.noteId}
                    key={note.noteId} 
                  />
                )
              })
            }
          </ul>
        </div>
  
        <div className='notesFooter'>
            <NoteForm 
              addNote={this.addNote}
            />
        </div>
  
      </div>
    );
  }
}

  
  

export default App;
