import UserSlideBar from '@/core/components/organisms/users-sidebar';
import React, { ReactNode } from 'react';

interface UserProfileLayoutProps {
  children: ReactNode;
}
const UserProfileLayout: React.FC<UserProfileLayoutProps> = ({ children }) => {

  return (
    <div className=' w-[90%] md:w-[40%] xl:w-[30%]'>
      <div className="grid grid-cols-2  bg-purple-500 rounded-lg ">
        <UserSlideBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default UserProfileLayout;