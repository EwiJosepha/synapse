import UserSlideBar from '@/core/components/organisms/users-sidebar';
import React, { ReactNode } from 'react';

interface UserProfileLayoutProps {
  children: ReactNode;
}
const UserProfileLayout: React.FC<UserProfileLayoutProps> = ({ children }) => {

  return (
    <div className="flex  w-96 bg-gradient-to-r from-blue-500 via-pink-500 to-violet-500">
      <UserSlideBar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default UserProfileLayout;