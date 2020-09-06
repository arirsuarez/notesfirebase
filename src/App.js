import React from 'react';
import './App.css';

import Note from './Components/Note/Note';


function App () {
    return (
      <>
      <Note />
      {/* 
        
  
        
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
      </div> */}
      </>
    );
  }

export default App;
