import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Form = ({ setData }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    college: "",
    school: "",
    skills: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setData(form);
    navigate("/profile");
  }

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="p-6">
          <h2 className="text-2xl mb-6">Profile Form</h2>

          <div className="mb-4">
            <label>Name</label>
            <input
              name="name"
              type="text"
              className="border p-2 w-64"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label>College</label>
            <input
              name="college"
              type="text"
              className="border p-2 w-64"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label>School</label>
            <input
              name="school"
              type="text"
              className="border p-2 w-64"
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label>Skills</label>
            <input
              name="skills"
              type="text"
              className="border p-2 w-64"
              onChange={handleChange}
            />
          </div>

          <button className="bg-yellow-800 text-white px-4 py-2">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
