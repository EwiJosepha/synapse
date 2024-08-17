import React, { ReactNode } from 'react';
import UserSlideBar from '@/core/components/organisms/users-sidebar';

interface UserProfileLayoutProps {
  children: ReactNode;
}
const UserProfileLayout: React.FC<UserProfileLayoutProps> = ({ children }) => {

  return (
    <div className="flex  w-[500px] bg-gradient-to-r from-blue-500 via-pink-500 to-violet-500">
      <UserSlideBar onRouteClick={function (href: string): void {
        throw new Error('Function not implemented.');
      } } />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default UserProfileLayout;
