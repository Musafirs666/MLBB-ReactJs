import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useFormik } from "formik";
import * as yup from "yup";

const MainLogin = () => {
  const authContext = useContext(AuthContext);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      );
      authContext.setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/admin";
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: handleSubmit,
    validationSchema: yup.object().shape({
      email: yup.string().required("Email format is not valid").email(),
      password: yup
        .string()
        .required("Password is required")
        .matches(
          /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
          "Password must contain at least one letter and one number"
        )
        .min(8, "Password must be at least 8 characters long")
    })
  });

  const logout = async () => {
    await signOut(auth);
  };

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
          <form className="w-full flex flex-col" onSubmit={formik.handleSubmit}>
            <div className={`w-full mb-6 mt-10`}>
              <input
                className={`w-full h-[50px] py-1 px-2 focus:outline-none rounded-sm text-neutral-800 ${
                  formik.errors.email && formik.touched.email
                    ? "border border-red-500"
                    : "border"
                }`}
                type="text"
                placeholder="your email"
                {...formik.getFieldProps("email")}
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>
            <div className="w-full mb-6">
              <input
                className={`w-full h-[50px] py-1 px-2 focus:outline-none rounded-sm text-neutral-800 ${
                  formik.errors.password && formik.touched.password
                    ? "border border-red-500"
                    : "border"
                }`}
                type="text"
                placeholder="your password"
                {...formik.getFieldProps("password")}
              />
              {formik.errors.password && formik.touched.password && (
                <p className="text-red-500 text-sm">{formik.errors.password}</p>
              )}
            </div>
            <div className="flex items-center justify-center w-[165px] h-[65px] border-red-500 border border-opacity-60">
              <button
                className="rounded-sm w-[150px] h-[50px] bg-red-500 text-lg text-[#ffffff]"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
