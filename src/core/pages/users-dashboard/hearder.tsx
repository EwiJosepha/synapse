import React from 'react';

const Header = () => {
    return (

        <div className="bg-purple-800 text-white p-4 flex justify-between items-center fixed top-0 max-w-full md:w-[calc(100%-200px)]">
            {/* <h1 className="text-2xl md:text-sm sm:text-sm">Chat App</h1> */}
            <img
                src={"/assets/pro.jpg"} //will be changed when user image is made available
                alt={"`${user.name}'s avatar`"}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2 md:mr-3 flex-shrink-0"
            />
            {/* <h3 className="font-semibold text-sm md:text-base truncate">{user.name}</h3> */}

            <div className='flex justify-center'>
                <button className="bg-pink-500 text-2xl mr-8 py-2 rounded sm:px-1 sm:text-sm">Logout</button>
            </div>
        </div>

    );
};

export default Header;