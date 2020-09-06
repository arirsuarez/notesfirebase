import React, {useState} from 'react';
import './NoteForm.css';

const NoteForm = (props) => {

    const initialStateValues = {
        note: ''
    };

    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();        
        props.addNote(values);
        setValues({...initialStateValues});
        
    }
    return (
        
        <form onSubmit={handleSubmit}>
            <div className='notesFooter'>
            <div className='noteForm'>                
                <input
                    name="note"
                    value={values.note}
                    onChange={handleInputChange}
                    onSubmit={handleSubmit}
                    type="text"
                    placeholder='Write your Note'
                />
                <button onSubmit={handleSubmit}>
                    Add Note
                </button>
            </div>
            </div>
        </form>
        
    )
}

export default NoteForm;