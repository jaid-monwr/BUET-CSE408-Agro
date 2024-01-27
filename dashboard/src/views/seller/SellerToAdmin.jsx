import React, { useState } from "react";

const SellerToAdmin = () => {
  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full bg-[#ededed] px-4 py-4 rounded-md h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          <div className="w-full md:pl-4">
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <div className="relative">
                  <img
                    className="w-[42px] h-[42px] border-green-500 border-2 max-w-[42px] p-[2px] rounded-full"
                    src="http://localhost:3000/images/admin.jpg"
                    alt=""
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>
                <h2 className="text-base font-semibold">Support</h2>
              </div>
            </div>
            <div className="py-4 ">
              <div className="bg-white h-[calc(100vh-290px)] rounded-md p-3 overdlow-y-auto">
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div>
                      <img
                        className="w-[42px] h-[42px] border-green-500 border-2 max-w-[42px] p-[2px] rounded-full"
                        src="http://localhost:3000/images/admin.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-start flex-col w-full bg-[#4e5447] shadow-lg shadow-[#4e5447] py-1 px-2 rounded-md text-[#ffffff]">
                      <span>How are you?</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div className="flex justify-center items-start flex-col w-full bg-[#dbdfaa] shadow-lg shadow-[#dbdfaa] py-1 px-2 rounded-md">
                      <span>How are you?</span>
                    </div>
                    <div>
                      <img
                        className="w-[42px] h-[42px] border-green-500 border-2 max-w-[42px] p-[2px] rounded-full"
                        src="http://localhost:3000/images/admin.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div>
                      <img
                        className="w-[42px] h-[42px] border-green-500 border-2 max-w-[42px] p-[2px] rounded-full"
                        src="http://localhost:3000/images/admin.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-start flex-col w-full bg-[#4e5447] shadow-lg shadow-[#4e5447] py-1 px-2 rounded-md text-[#ffffff]">
                      <span>How are you?</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="flex gap-3" action="">
              <input
                className="w-full flex justify-between px-2 border border-slate-400 items-center py-[5px] focus:border-green-700 rounded-md outline-none bg-transparent text-[#3c3840]"
                type="text"
                placeholder="input your message"
              />
              <button className="bg-[#4e5447] shadow-lg hover:shadow-[#4e5447] text-semibold w-[75px] h-[35px] rounded-md text-white flex justify-center items-center">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerToAdmin;
