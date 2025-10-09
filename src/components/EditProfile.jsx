import { useState } from "react";
import UserCard from "./UserCard";
import { useDispatch } from "react-redux";
import { BASEURL, GENDER } from "../constants/constants";
import { sumbitForm } from "../utility/submitForm";
import { addUser } from "../utility/userSlice";
import Toast from "./Toast";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [age, setAge] = useState(user?.age || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [about, setAbout] = useState(user?.about || "");
  const [skills, setSkills] = useState(user?.skills || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();

  if (!user) {
    return null;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await sumbitForm(
        BASEURL + "/profile/edit",
        "PATCH",
        JSON.stringify({
          firstName,
          lastName,
          age,
          photoURL,
          about,
          skills,
          gender,
        })
      );
      setUpdate(true);
      dispatch(addUser(updatedUser.data));
      setTimeout(() => {
        setUpdate(false);
      }, 2500);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="w-8/12 h-full  mx-auto flex gap-3 my-5">
      <form
        className="border-3 rounded-lg border-dashed py-8  px-3 flex-2 "
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="firstName">First name:</label>
        <input
          id="firstName"
          className="w-full border py-2 px-2 rounded-lg my-1 border-gray-400"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label htmlFor="lastName">Last name:</label>
        <input
          id="lastName"
          className="w-full border py-2 px-2 rounded-lg my-1 border-gray-400"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label htmlFor="age">Age : </label>
        <input
          id="age"
          type="number"
          className=" ml-1 border py-2 px-2 rounded-lg my-1 border-gray-400"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <label htmlFor="gender" className="ml-3 mr-2">
          Gender :
        </label>
        <select
          id="gender"
          className="border py-2 px-2 rounded-lg my-1 border-gray-400"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          {GENDER.map((gender, i) => (
            <option key={i} value={gender.value}>
              {gender.name}
            </option>
          ))}
        </select>
        <label htmlFor="skills" className="block">
          Skills:
        </label>
        <input
          id="skills"
          className="w-full border py-2 px-2 rounded-lg my-1 border-gray-400  "
          value={skills}
          onChange={(e) => {
            setSkills(e.target.value);
          }}
        />
        <label htmlFor="skills" className="block">
          photoURL
        </label>
        <input
          id="photoURL"
          className="w-full border py-2 px-2 rounded-lg my-1 border-gray-400  "
          value={photoURL}
          onChange={(e) => {
            setPhotoURL(e.target.value);
          }}
        />
        <label htmlFor="about">About</label>
        <textarea
          className="w-full border py-2 px-2 rounded-lg my-1 border-gray-400"
          value={about}
          onChange={(e) => {
            setAbout(e.target.value);
          }}
        />
        <button className="w-full py-2 text-center bg-black text-white rounded-lg my-5 shadow-gray-500 shadow-sm">
          {update ? "updating" : "submit"}
        </button>
      </form>
      <div className="flex-1">
        <UserCard
          user={{ firstName, lastName, photoURL, about, age, gender }}
          showButton={false}
        />
      </div>
      {update && <Toast message={"updated"} />}
    </div>
  );
};

export default EditProfile;
