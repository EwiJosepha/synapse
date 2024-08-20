// components/DashboardLayout.js
import React from 'react';
import Sidebar from "../../pages/users-dashboard/dashboard-sidebar"
import Header from '../../pages/users-dashboard/hearder';
import Main from '../../pages/users-dashboard/main-chat-sec';

const DashboardLayout = () => {
    return (
        <div className="flex h-screen">
            <div className="grid lg:grid-cols-[300px, 1fr]">
                <Sidebar />
            </div>
            <div className="flex-1 flex flex-col">
                <Header />
                <Main />
            </div>
        </div>
    );
};

export default DashboardLayout;