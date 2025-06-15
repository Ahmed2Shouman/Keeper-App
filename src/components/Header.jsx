import React from 'react';
import Highlighticon from '@mui/icons-material/Highlight';

export default function Header() {
    return (
        <header className='px-8 py-4 my-auto -mx-4 bg-yellow-400 shadow-lg'>
            <h1 className='text-4xl text-white font-mclaren font-extralight'>
                <Highlighticon className='inline-block mr-2' />
                Keeper
            </h1>
        </header>
    );
}