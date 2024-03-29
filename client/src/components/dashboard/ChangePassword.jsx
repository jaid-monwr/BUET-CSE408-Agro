import React from "react";

const ChangePassword = () => {
  return (
    <div className="p-4 bg-white">
      <h2 className="text-xl text-slate-600 pb-5">Change Password</h2>
      <form>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="old_password">Old Password</label>
          <input
            className="outline-none px-3 py-1 border rounded-md text-slate-600"
            type="password"
            id="old_password"
            name="old_password"
            placeholder="old password"
          />
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="new_password">New Password</label>
          <input
            className="outline-none px-3 py-1 border rounded-md text-slate-600"
            type="password"
            id="new_password"
            name="new_password"
            placeholder="new password"
          />
        </div>
        <div>
          <button className="px-8 py-2 bg-violet-700 shadow-lg hover:shadow-violet-700/30 text-white rounded-md">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
  