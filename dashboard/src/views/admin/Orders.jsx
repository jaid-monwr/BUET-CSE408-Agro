import React, { useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { MdKeyboardArrowDown } from "react-icons/md";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setsearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7 pt-5 ">
      <div className="w-full p-4 bg-[#4e5447] rounded-md">
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => setPerPage(parseInt(e.target.value))}
            className="px-4 py-2 focus:border-slate-200 outline-none bg-[#4e5447] border border-slate-500 rounded-md text-white"
          >
            <option value="5">5</option>
            <option value="5">15</option>
            <option value="5">25</option>
          </select>
          <input
            className="px-4 py-2 focus:border-slate-200 outline-none bg-[#4e5447] border border-slate-500 rounded-md text-white"
            type="text"
            placeholder="search"
          />
        </div>
        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left text-white">
            <div className="text-sm text-white uppercase border-b border-slate-200">
              <div className="flex justify-between items-start ">
                <div className="py-3 w-[25%]">Order ID</div>
                <div className="py-3 w-[13%]">Price</div>
                <div className="py-3 w-[18%]">Payment Status</div>
                <div className="py-3 w-[18%]">Order Status</div>
                <div className="py-3 w-[18%]">Action</div>
                <div className="py-3 w-[8%]">
                  {/* <BsArrowDown /> */}
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
            <div className="text-white">
              <div className="flex justify-between items-start border-b border-slate-200">
                <div className="py-4 w-[25%] font-medium whitespace-nowrap ">
                  3647632483904
                </div>
                <div className="py-4 w-[13%]">Tk 560</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">
                  <Link>view</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-4 cursor-pointer w-[8%]"
                >
                  {/* <BsArrowDown /> */}
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <div
                className={
                  show
                    ? "block border-b border-slate-200 bg-[#363a31]"
                    : "hidden"
                }
              >
                <div>
                  <div className="flex justify-start items-start border-b border-slate-200">
                    <div className="pl-3 py-4 w-[25%] font-medium whitespace-nowrap ">
                      3647632483904
                    </div>
                    <div className="py-4 w-[13%]">Tk 560</div>
                    <div className="py-4 w-[18%]">pending</div>
                    <div className="py-4 w-[18%]">pending</div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-start items-start border-b border-slate-200">
                    <div className="pl-3 py-4 w-[25%] font-medium whitespace-nowrap ">
                      3647632483904
                    </div>
                    <div className="py-4 w-[13%]">Tk 560</div>
                    <div className="py-4 w-[18%]">pending</div>
                    <div className="py-4 w-[18%]">pending</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white">
              <div className="flex justify-between items-start border-b border-slate-200">
                <div className="py-4 w-[25%] font-medium whitespace-nowrap ">
                  3647632483904
                </div>
                <div className="py-4 w-[13%]">Tk 560</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">
                  <Link>view</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-4 cursor-pointer w-[8%]"
                >
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <div
                className={
                  show
                    ? "block border-b border-slate-200 bg-[#363a31]"
                    : "hidden"
                }
              >
                <div>
                  <div className="flex justify-start items-start border-b border-slate-200">
                    <div className="pl-3 py-4 w-[25%] font-medium whitespace-nowrap ">
                      3647632483904
                    </div>
                    <div className="py-4 w-[13%]">Tk 560</div>
                    <div className="py-4 w-[18%]">pending</div>
                    <div className="py-4 w-[18%]">pending</div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-start items-start border-b border-slate-200">
                    <div className="pl-3 py-4 w-[25%] font-medium whitespace-nowrap ">
                      3647632483904
                    </div>
                    <div className="py-4 w-[13%]">Tk 560</div>
                    <div className="py-4 w-[18%]">pending</div>
                    <div className="py-4 w-[18%]">pending</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white">
              <div className="flex justify-between items-start border-b border-slate-200">
                <div className="py-4 w-[25%] font-medium whitespace-nowrap ">
                  3647632483904
                </div>
                <div className="py-4 w-[13%]">Tk 560</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">
                  <Link>view</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-4 cursor-pointer w-[8%]"
                >
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <div
                className={
                  show
                    ? "block border-b border-slate-200 bg-[#363a31]"
                    : "hidden"
                }
              >
                <div>
                  <div className="flex justify-start items-start border-b border-slate-200">
                    <div className="pl-3 py-4 w-[25%] font-medium whitespace-nowrap ">
                      3647632483904
                    </div>
                    <div className="py-4 w-[13%]">Tk 560</div>
                    <div className="py-4 w-[18%]">pending</div>
                    <div className="py-4 w-[18%]">pending</div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-start items-start border-b border-slate-200">
                    <div className="pl-3 py-4 w-[25%] font-medium whitespace-nowrap ">
                      3647632483904
                    </div>
                    <div className="py-4 w-[13%]">Tk 560</div>
                    <div className="py-4 w-[18%]">pending</div>
                    <div className="py-4 w-[18%]">pending</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={3}
            perPage={perPage}
            showItem={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
