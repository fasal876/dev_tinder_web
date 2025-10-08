import React, { useState } from "react";
import { sumbitForm } from "../utility/submitForm";
import { useDispatch } from "react-redux";
import { addUser } from "../utility/userSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e, path, page) => {
    e.preventDefault();
    const body = { emailId, password, firstName, lastName };
    try {
      const result = await sumbitForm(
        "http://localhost:3000/" + path,
        "POST",
        JSON.stringify(body)
      );
      dispatch(addUser(result?.user));
      navigate(page);
    } catch (err) {
      if (err.status === 400) {
        setErr(err.message);
      }
      console.log(err);
    }
  };

  return (
    <div className="flex w-1/2 mx-auto my-[5%] font-sans">
      <div className="w-1/2 mx-5">
        <img src="./developers.png" alt="developers_img" />
        <h1 className="text-5xl tracking-widest font-medium py-2">DevTinder</h1>
        <p className="text-lg">Where Developers Connect!</p>
      </div>
      <form
        className="w-6/12  rounded-lg shadow shadow-gray-500 px-10 py-10  "
        onSubmit={(e) => {
          isLogin
            ? handleSubmit(e, "login", "/")
            : handleSubmit(e, "signup", "/profile");
        }}
      >
        {!isLogin && (
          <>
            <label className="block mt-3 mb-1" htmlFor="firstName">
              First name:{" "}
            </label>
            <input
              className="w-full border border-gray-700 rounded-lg py-2 px-3"
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <label className="block mt-3 mb-1" htmlFor="lastName">
              Last name:
            </label>
            <input
              className="w-full border border-gray-700 rounded-lg py-2 px-3"
              id="lastName"
              type="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </>
        )}
        <label className="block mt-3 mb-1" htmlFor="email">
          Email:{" "}
        </label>
        <input
          className="w-full border border-gray-700 rounded-lg py-2 px-3"
          id="email"
          type="email"
          value={emailId}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className="block mt-5 mb-1" htmlFor="password">
          Passsword:
        </label>
        <input
          className="w-full border border-gray-700 rounded-lg py-2 px-3"
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {err && <p className="text-red-700 my-2">{err}</p>}
        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded-lg my-10 shadow-md shadow-gray-500 cursor-pointer"
        >
          {isLogin ? "Sign In" : "Sign Up"}
        </button>
        {isLogin ? (
          <p>
            New user{" "}
            <span
              className="cursor-pointer underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              Signup here
            </span>
          </p>
        ) : (
          <p>
            Already have an account{" "}
            <span
              className="cursor-pointer underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              Sign In here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
