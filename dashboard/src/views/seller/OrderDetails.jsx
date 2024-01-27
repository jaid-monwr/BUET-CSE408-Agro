import React from "react";

const OrderDetails = () => {
  return (
    <div className="px-2 lg:px-7 pt-5 ">
      <div className="w-full p-4 bg-[#4e5447] rounded-md">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl text-[#ffffff]">Order Details</h2>
          <select
            name=""
            id=""
            className="px-4 py-2 focus:border-slate-800 outline-none bg-[#ededed] border border-slate-500 rounded-md text-[#3c3840]"
          >
            <option value="">pending</option>
            <option value="">processing</option>
            <option value="">wharehouse</option>
            <option value="">placed</option>
            <option value="">cancelled</option>
          </select>
        </div>
        <div className="p-4 ">
          <div className="flex gap-2 text-lg text-[#ffffff]">
            <h2>#34345465346</h2>
            <span>3 Jan 2024</span>
          </div>
          <div className="flex flex-wrap">
            <div className="w-[32%]">
              <div className="pr-3 text-[#ffffff] text-lg">
                <div className="flex flex-col gap-1">
                  <h2 className="pb-2 font-semibold">Deliver to : Warehouse</h2>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <h2>Payment Status : </h2>
                  <span className="text-base">paid</span>
                </div>
                <span>Price : Tk 450</span>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="text-white">
                    <div className="flex gap-3 text-md">
                      <img
                        className="w-[45px] h-[45px]"
                        src={`http://localhost:3000/images/category/1.jpg`}
                        alt=""
                      />
                      <div>
                        <h2>Onion</h2>
                        <p>
                          <span>Brand : </span>
                          <span>Indian </span>
                          <span className="text-lg">Quantity : 2</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 text-md">
                      <img
                        className="w-[45px] h-[45px]"
                        src={`http://localhost:3000/images/category/1.jpg`}
                        alt=""
                      />
                      <div>
                        <h2>Onion</h2>
                        <p>
                          <span>Brand : </span>
                          <span>Indian </span>
                          <span className="text-lg">Quantity : 2</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 text-md">
                      <img
                        className="w-[45px] h-[45px]"
                        src={`http://localhost:3000/images/category/1.jpg`}
                        alt=""
                      />
                      <div>
                        <h2>Onion</h2>
                        <p>
                          <span>Brand : </span>
                          <span>Indian </span>
                          <span className="text-lg">Quantity : 2</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
