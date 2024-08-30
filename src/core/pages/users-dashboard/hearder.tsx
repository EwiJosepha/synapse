// components/Header.js
import React from 'react';

const Header = () => {
    return (

        <div className="bg-purple-800 text-white p-4 flex justify-between items-center fixed top-0 w-[1100px]">
            <h1 className="text-2xl">Chat App</h1>
            <div className='flex justify-center items-center'>
                <button className="bg-pink-500 px-4 py-2 rounded">Logout</button>
            </div>
        </div>

        // <div className="bg-purple-800 text-white p-6 flex justify-between items-center fixed top-0 w-fit">
        //             <h1 className="text-4xl">Chat App</h1>
        //         <div className='flex justify-center items-center'>
        //             <button className="bg-pink-500 px-4 py-2 rounded">Logout</button>
        //         </div>
        // </div>

    );
};

export default Header;