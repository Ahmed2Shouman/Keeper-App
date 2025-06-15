import React, { useState } from 'react'

const AddNote = (props) => {
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

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

  return (
    <div className="relative">
      <form className='relative w-full max-w-xl p-6 mx-auto mt-16 bg-white shadow-lg rounded-xl'>
        <div>
          <input
            name="title"
            placeholder="Title"
            type="text"
            value={note.title}
            onChange={handleChange}
            className="w-full p-2 mb-3 text-xl text-gray-700 bg-transparent border-0 outline-none"
          />
          <input
            name="content"
            placeholder="Take a note..."
            type="text"
            value={note.content}
            onChange={handleChange}
            className="w-full p-2 mb-3 text-xl text-gray-700 bg-transparent border-0 outline-none"
          />
        </div>
        <button
          type="submit"
          onClick={handleAddNote}
          className='absolute flex items-center justify-center w-12 h-12 text-3xl font-bold text-white bg-yellow-500 border-none rounded-full shadow-md outline-none right-5 -bottom-6'
        >
          +
        </button>
      </form>
    </div>
  );
};

export default AddNote;