// components/Header.js
import React from 'react';

const Header = () => {
    return (

        <div className="bg-purple-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl">Chat App</h1>
            <div className='flex gap-4 justify-center items-center'>
                <button className="bg-pink-500 px-4 py-2 rounded">Logout</button>
            </div>
        </div>
    );
};

export default Header;