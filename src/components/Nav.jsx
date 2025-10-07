import React, { useState } from "react";
import logo from "../assets/Logo";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { handleLogout } from "../utility/handleLogout";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.user);

  return (
    <div className="bg-white text-black font-nav py-3 flex shadow-lg tracking-widest">
      <div className="flex items-center px-10 flex-1 ">
        {logo}
        <h1 className="text-xl font-bold px-3 ">DevTinder</h1>
      </div>
      {user && (
        <div className="mr-10 relative">
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            tabIndex={0}
            className="flex items-center cursor-pointer"
          >
            <img
              src={user?.photoURL}
              alt="profile photo"
              className="w-10 rounded-3xl"
            />
          </button>
          {showMenu && (
            <div className="absolute text-black z-1 bg-white shadow-sm shadow-gray-500 rounded-lg w-56 right-0 mt-1 animate-opacity cursor-pointer ">
              <ul className="px-1 py-3">
                <li className="py-2 w-full rounded-lg px-3 hover:bg-gray-200 text-sm ">
                  <Link to="/profile" className="">
                    Profile
                  </Link>
                </li>
                <li className="py-2 w-full rounded-lg px-3 hover:bg-gray-200 text-sm ">
                  <Link to="/feed" className="">
                    Explore
                  </Link>
                </li>
                <li
                  className="py-2 w-full rounded-lg px-3 hover:bg-gray-200 text-sm  "
                  onClick={() => {
                    handleLogout(dispatch, navigate);
                  }}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
