import { Edit, Edit2 } from "lucide-react";
import pp from "../../../../public/mew pp.jpg"
import Image from "next/image";

export default function General() {
  return (
      <div className=" flex flex-col gap-4 pt-3">
       <h1 className="text-2xl text-center text-white">Profile Page</h1> 
        <div className="flex flex-col gap-4 border-b border-b-gray-400">
          <div className=" w-20 h-20 pl-3">
            <Image src={pp} alt="profile"  width={50} height={50} className="rounded-full"/>
          </div>
          <div className="p-2 flex flex-col  gap-4 pb-8">
            <div className="flex justify-between items-center cursor-pointer text-white">
              <p>Josey Ewi</p>
              <Edit />
            </div>
            <div className="flex justify-between items-center cursor-pointer text-white">
              <p>655177233</p>
              {/* <input placeholder="655177244" /> */}
              <Edit2 />
            </div>
          </div>

        </div>
        <div className=" flex flex-col justify-center items-center cursor-pointer gap-4" >
          <button className="text-white text-xl bg-gradient-to-r from-blue-500 via-pink-500 to-violet-500 shadow-md px-5 py-1 rounded-md hover:text-black  bg-gray-100 ">
            Logout
          </button>
          <p className="pl-3 text-white">Chat will be cleared when you logout</p>
        </div>
      </div>


  );
}