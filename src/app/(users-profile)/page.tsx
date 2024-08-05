import { Edit, Edit2 } from "lucide-react";
import UserProfileLayout from "./usersProfile/layout";
import neww from "../../../public/mew pp.jpg"

export default function UsersProfile() {
  return (
    <UserProfileLayout >
      <div className=" flex flex-col gap-4">
        Profile Page
        <div className="flex flex-col gap-4 border-b border-b-gray-400">
          <div className="rounded-full w-20 h-20">
            <img src="../../../public/mew pp.jpg" alt="profile" />
          </div>
          <div className="p-2 flex flex-col  gap-4 pb-8">
            <div className="flex justify-between items-center cursor-pointer text-white">
              <Edit />
              <p>Josey Ewi</p>
            </div>
            <div className="flex justify-between items-center cursor-pointer text-white">
              <Edit2 />
              <p>655177233</p>
            </div>
          </div>

        </div>
        <div className="  flex flex-col justify-center items-center cursor-pointer gap-4 " >
          <button className="text-red-500 shadow-md px-5 py-1 rounded-md hover:text-black  bg-gray-100 ">
            Logout
          </button>
          <p className="pl-3 ">Chat will be cleared when you logout</p>
        </div>
      </div>

    </UserProfileLayout>

  );
}