import React from "react";

const SellerDetails = () => {
  return (
    <div>
      <div className="px-2 lg:px-7 pt-5 ">
        <div className="w-full p-4 bg-[#4e5447] rounded-md border border-slate-100">
          <div className="w-full flex flex-wrap text-[#ffffff]">
            <div className="w-3/12 flex justify-center items-center py-3">
              <div>
                <img
                  className="w-full h-[230px]"
                  src="http://localhost:3000/images/admin.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-4/12">
              <div className="px-0 md:px-5 py-2">
                <div className="py-2 text-lg">
                  <h2>Basic Info</h2>
                </div>
                <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[#4e5447] rounded-md">
                  <div className="flex gap-2">
                    <span>Name : </span>
                    <span>Sheikh Farid</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Email : </span>
                    <span>farid@gmail.com</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Role : </span>
                    <span>Seller</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Status : </span>
                    <span>Pending</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Payment Account : </span>
                    <span>active</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-4/12">
              <div className="px-0 md:px-5 py-2">
                <div className="py-2 text-lg">
                  <h2>Address</h2>
                </div>
                <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[#4e5447] rounded-md">
                  <div className="flex gap-2">
                    <span>Shop Name : </span>
                    <span>Farid Onions</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Division : </span>
                    <span>Rangpur</span>
                  </div>
                  <div className="flex gap-2">
                    <span>District : </span>
                    <span>Kurigram</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Sub-District : </span>
                    <span>Nageshawri</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form>
              <div className="flex gap-4 py-3">
                <select
                  className="px-4 py-2 focus:border-slate-200 outline-none bg-[#4e5447] border border-slate-300 rounded-md text-[#ffffff]"
                  name=""
                  id=""
                >
                  <option value="">--- Select status ---</option>
                  <option value="active">Active</option>
                  <option value="deactive">Deactive</option>
                </select>
                <button className=" bg-[#dbdfaa] font-semibold hover:bg-[#f5f0bb]  hover:shadow-lg text-[#3c3840] rounded-md px-7 py-2 w-[170px]">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
