import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { admin_login } from "../../store/Reducers/authReducer";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#faf1e6] flex justify-center items-center">
      <div className="w-[350px] text-[#064420] p-2">
        <div className="bg-[#FDFAF6] p-4 rounded-md border border-gray-200">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[50px]">
              <img
                className="w-full h-full object-contain"
                src="http://localhost:3000/images/agro-logo.png"
                alt="image"
              />
            </div>
          </div>
          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={inputHandle}
                value={state.email}
                type="email"
                name="email"
                placeholder="email"
                id="email"
                required
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#064420] focus:border-green-800 overflow-hidden"
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-5">
              <label htmlFor="password">Password</label>
              <input
                onChange={inputHandle}
                value={state.password}
                type="password"
                name="password"
                placeholder="password"
                id="password"
                required
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#064420] focus:border-green-800 overflow-hidden"
              />
            </div>

            <button className="bg-[#064420] w-full hover:shadow-green-950/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
