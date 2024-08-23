// components/DashboardLayout.js
import React from 'react';
import Sidebar from "../../core/pages/users-dashboard/dashboard-sidebar"
import Header from '../../core/pages/users-dashboard/hearder';
import Main from '../../core/pages/users-dashboard/main-chat-sec';
import MessageBox from '@/core/components/messageBox';

const DashboardLayout = () => {
    return (
        <div className="flex h-screen">
            <div className="grid lg:grid-cols-[300px, 1fr]">
                <Sidebar />
            </div>
            <div className="flex-1 flex flex-col">
                <Header />
                <MessageBox />
                {/* <Main /> */}
            </div>
        </div>
    );
};

export default DashboardLayout;