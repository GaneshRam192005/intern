// main.jsx
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Formpage from "./components/Formpage.jsx";
import Profile from "./components/Profile.jsx";
import About from "./components/About.jsx";

const Main = () => {
  // lifted state here
  const [profileData, setProfileData] = useState({
    name: "",
    college: "",
    school: "",
    skills: ""
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />

        <Route path="/profile" element={<Profile data={profileData} />} />

        <Route path="/form" element={<Formpage setData={setProfileData} />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
