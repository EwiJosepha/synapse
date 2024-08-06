import UserSlideBar from '@/core/components/organisms/users-sidebar';
import React, { ReactNode } from 'react';

interface UserProfileLayoutProps {
  children: ReactNode;
}
const UserProfileLayout: React.FC<UserProfileLayoutProps> = ({ children }) => {

  return (
    <div className='w-[100%]'>
      <div className="flex  w-[25%] bg-purple-500 rounded-lg ">
        <UserSlideBar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default UserProfileLayout;