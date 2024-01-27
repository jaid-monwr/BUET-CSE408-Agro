import React from "react";

const SellerDetails = () => {
  return (
    <div>
      <div className="px-2 lg:px-7 pt-5 ">
        <div className="w-full p-4 bg-[#ededed] rounded-md border border-slate-100">
          <div className="w-full flex flex-wrap text-[#6d6c6c]">
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
                <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md">
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
                    <span></span>
                  </div>
                  <div className="flex gap-2">
                    <span>Name : </span>
                    <span>Sheikh Farid</span>
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

export default SellerDetails;
