import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from '@mui/material';

const AddNote = (props) => {
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

    const [isExpanded, setIsExpanded] = useState(false);

  function handleAddNote(event) {
    event.preventDefault(); // prevent form reload
    props.onAdd(note); // call the onAdd function passed from parent

    // Optionally clear inputs after adding
    setNote({ title: '', content: '' });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function expand() {
    setIsExpanded(true);
  }

  return (
    <div className="relative">
      <form className='relative w-full max-w-xl p-6 mx-auto mt-16 bg-white shadow-lg rounded-xl'>
          {isExpanded && (
            <input
            name="title"
            placeholder="Title"
            type="text"
            value={note.title}
            onChange={handleChange}
            className="w-full p-2 mb-3 text-xl text-gray-700 bg-transparent border-0 outline-none"
          />
          )}
          <textarea
            name="content"
            placeholder="Take a note..."
            type="text"
            value={note.content}
            onChange={handleChange}
            onClick={expand}
            rows={isExpanded ? 3 : 1}
            className="w-full p-2 mb-3 text-xl text-gray-700 bg-transparent border-0 outline-none"
          />
        <Zoom in={isExpanded}>
          <button
            onClick={handleAddNote}
            className='absolute flex items-center justify-center w-12 h-12 text-3xl font-bold text-white bg-yellow-500 border-none rounded-full shadow-md outline-none right-5 -bottom-6'
          >
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
};

export default AddNote;