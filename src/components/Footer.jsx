import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="absolute text-center bottom-0 w-full h-10">
            <p className="text-gray-300">Copyright ⓒ {year}</p>
        </footer>
    );
}