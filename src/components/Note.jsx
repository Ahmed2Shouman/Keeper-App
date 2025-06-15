import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props) {

    function handleDelete() {
        props.onDelete(props.id);
    }

    return (
        <div className="float-left p-5 m-4 bg-white rounded-lg shadow-md w-60">
            <h1 className="mb-1 text-lg font-bold">{props.title}</h1>
            <p className="mb-2 text-base font-thin break-words whitespace-pre-wrap">{props.content}</p>
            <button onClick={handleDelete} className="float-right px-2 py-2 text-red-600 bg-gray-100 rounded-full">
                <DeleteIcon />
            </button>
        </div>
    );
}