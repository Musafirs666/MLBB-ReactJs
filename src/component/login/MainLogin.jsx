import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const MainLogin = () => {
  const authContext = useContext(AuthContext);

  return (
    <div
      className="bg-neutral-800 mt-[75px] min-w-screen flex overflow-hidden font-bebasNeue relative p-3"
      style={{ height: "calc(100vh - 75px)" }}
    >
      <div></div>
      <div
        className="w-full h-full relative"
        style={{
          backgroundImage: `url('/img/background-login.jpg')`,
          backgroundSize: "cover"
        }}
      >
        <div className="absolute z-10 bg-[#ece8e1] w-6 h-full right-6"></div>
        <div className="absolute z-10 bg-[#000000] w-72 h-24 left-7 bottom-7 bg-opacity-40 p-2">
          <p className="text-[#ece8e1] font-aoboshi text-xs">
            Halaman login admin CRUD Mobile Legends adalah halaman otentikasi
            untuk administrator yang memberikan akses CRUD terhadap data Mobile
            Legends, termasuk hero, item, skill, dan pengguna.
          </p>
        </div>
      </div>
      <div className="w-full h-full bg-[#ece8e1] flex flex-col justify-center">
        <div className='"w-full h-full px-[125px]'>
          <div className="flex flex-col items-center py-9">
            <img
              className="w-[40%]"
              src="/public/img/loginml.png"
              alt="Mobile Legends Admin"
            />
          </div>
          <p className="text-5xl font-semibold mt-16">Sign In</p>
          <div className="w-full flex flex-col">
            <div className="w-full mb-6 mt-10">
              <input
                className="w-full h-[50px] py-1 px-2 focus:outline-none rounded-sm text-neutral-800"
                type="text"
                placeholder="your email"
                onChange={event => {
                  authContext.setEmail(event.target.value.toLowerCase());
                }}
              />
            </div>
            <div className="w-full mb-6">
              <input
                className="w-full h-[50px] py-1 px-2 focus:outline-none rounded-sm text-neutral-800"
                type="text"
                placeholder="your password"
                onChange={event => {
                  authContext.setPassword(event.target.value.toLowerCase());
                }}
              />
            </div>
            <div className="flex items-center justify-center w-[165px] h-[65px] border-red-500 border border-opacity-60">
              <button
                className="rounded-sm w-[150px] h-[50px] bg-red-500 text-lg text-[#ffffff]"
                onClick={authContext.login}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
