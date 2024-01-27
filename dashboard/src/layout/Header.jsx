import React from "react";
import { FaList } from "react-icons/fa";

const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-white text-[#3c3840] px-5 transition-all">
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-[35px] flex lg:hidden h-[35px] rounded-sm bg-[#4e5447] shadow-lg hover:shadow-green-950/50 justify-center items-center cursor-pointer text-white"
        >
          <span>
            <FaList />
          </span>
        </div>
        <div className="hidden md:block ">
          <input
            className="px-3 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-slate-950/50 focus:border-slate-500 overflow-hidden"
            type="text"
            name="search"
            placeholder="search"
          />
        </div>
        <div className="flex justify-center items-center gap-8 relative">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-3">
              <div className="flex justify-center items-center flex-col text-end">
                <h2 className="text-sm font-bold">Jaid Monwar</h2>
                <span className="text-[14px] w-full font-normal">Admin</span>
              </div>
              <img
                className="w-[45px] h-[45px] rounded-full overflow-hidden"
                src="http://localhost:3000/images/admin.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
