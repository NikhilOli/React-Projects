import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const [name, setName] = useState("");
  const handleName = () => {
    const usernameValue = document.getElementById("username").value;
    setName(usernameValue);
  };
  const [email, setEmail] = useState("");
  const handleEmail = () => {
    const usernameValue = document.getElementById("email").value;
    setEmail(usernameValue);
  };
  const [tel, setTel] = useState("");
  const handleTel = () => {
    const usernameValue = document.getElementById("tel").value;
    setTel(usernameValue);
  };
  const [address, setAddress] = useState("");
  const handleAddress = () => {
    const usernameValue = document.getElementById("address").value;
    setAddress(usernameValue);
  };
  const bgcolor = {
    backgroundColor: "#f0f0f0",
    color: "#2c2c31",
  };
  return (
    <div className="flex">
      <div className="rounded-lg   bg-white w-[43%] max-h-max top-10 left-10 absolute flex justify-center flex-col px-10 py-10 gap-2 m-auto">
        {/* <div
          style={bgcolor}
          className="rounded-lg  "
        > */}
        <h1 className="text-4xl pb-4">Personal Details</h1>

        <label htmlFor="username">Full Name</label>
        <input
          className="rounded-md border outline-[#382bf0]"
          onChange={handleName}
          id="username"
          style={bgcolor}
          type="text"
        />

        <label htmlFor="email">Email</label>
        <input
          onChange={handleEmail}
          className="rounded-md border outline-[#382bf0]"
          id="email"
          value={12}
          style={bgcolor}
          type="email"
        />

        <label htmlFor="tel">Phone Number</label>
        <input
          onChange={handleTel}
          className="rounded-md border outline-[#382bf0]"
          id="tel"
          style={bgcolor}
          type="tel"
        />

        <label htmlFor="address">Address</label>
        <input
          onChange={handleAddress}
          className="rounded-md border outline-[#382bf0]"
          id="address"
          style={bgcolor}
          type="text"
        />
      </div>
      <div className="w-[47%] absolute right-10 top-10  bg-white h-20">
        <div className="bg-[#121212] text-white py-10 px-20">
          <h1 className="text-4xl text-center" id="name">
            {name}
          </h1>
          <div className="flex gap-4 mt-4 justify-center">
            <h2 className="text-lg">
              <FontAwesomeIcon className="text-lg " icon={faEnvelope} /> {email}
            </h2>
            <h2 className="text-lg">
              <FontAwesomeIcon icon={faPhone} className="mr-1 text-lg" />
              {tel}
            </h2>
            <h2 className="text-lg">
              <FontAwesomeIcon icon={faMapMarker} className="mr-1 text-lg" />
              {address}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
