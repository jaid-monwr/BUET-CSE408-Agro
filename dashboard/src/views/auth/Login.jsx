import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineGooglePlus, AiOutlineGithub } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";

const Login = () => {
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
    console.log(state);
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#faf1e6] flex justify-center items-center">
      <div className="w-[350px] text-[#064420] p-2">
        <div className="bg-[#FDFAF6] p-4 rounded-md border border-gray-200">
          <h2 className="text-xl mb-3">Welcome to Agro</h2>
          <p className="text-sm mb-3">Please signin to your account</p>
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
              Sign In
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already have an account? <Link to="/register">Signup Here</Link>
              </p>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="w-[35px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <AiOutlineGooglePlus />
                </span>
              </div>
              <div className="w-[35px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FiFacebook />
                </span>
              </div>
              <div className="w-[35px] h-[35px] flex rounded-md bg-cyan-700 shadow-lg hover:shadow-cyan-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <CiTwitter />
                </span>
              </div>
              <div className="w-[35px] h-[35px] flex rounded-md bg-purple-700 shadow-lg hover:shadow-purple-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <AiOutlineGithub />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
