
import React from 'react';

const Main = () => {
    return (
        <div className="flex-1 flex flex-col p-4">
            <div className="flex-1 bg-gray-100 p-4 rounded overflow-y-auto">
                {/* Messages will go here */}
                <p>This is where the messaging UI will go.</p>
            </div>
            <div className="mt-4">
                <textarea
                    className="w-full  border border-gray-300 rounded-full  placeholder:p-2 resize-none"
                    rows={2}
                    placeholder="Type your message ..."
                ></textarea>
            </div>
        </div>
    );
};

export default Main;