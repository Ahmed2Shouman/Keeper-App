import React from "react";

export default function Note() {
    return (
        <div className="bg-white shadow-md rounded-lg p-5 w-60 m-4 float-left">
            <h1 className="text-lg mb-1 font-bold">This is the note title</h1>
            <p className="text-base mb-2 whitespace-pre-wrap break-words font-thin">This is the note content</p>
        </div>
    );
}