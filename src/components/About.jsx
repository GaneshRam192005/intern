
import Header from "./Header";
import profileImage from "../assets/ganesh.jpeg";
import { useState } from "react";

const About = () => {
  const arr = ["Java", "Python"]; 
 


  return (
    <>
      <Header />

      <div className="bg-gray-100 min-h-screen py-16">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">

        
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold text-black mb-4">
              I am <span className="text-gray-700">Ganesh Ram</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Full Stack Developer focused on building backend and frontend web
              applications with modern technologies.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">Skills</h2>

              <div className="flex flex-wrap gap-3">

               
                {arr.map((value,i) => (
                  <span key={i}
                   
                    className="px-4 py-2 bg-white border border-gray-300  text-gray-800 text-sm shadow-sm"
                  >
                    {value}
                  </span>
                ))}
                 {/* <span className="px-4 py-2 bg-white border border-gray-300 text-gray-800 text-sm shadow-sm">
                  React.js
                </span>
                <span className="px-4 py-2 bg-white border border-gray-300  text-gray-800 text-sm shadow-sm">
                  Express.js
                </span>
                <span className="px-4 py-2 bg-white border border-gray-300  text-gray-800 text-sm shadow-sm">
                  MySQL
                </span>
                <span className="px-4 py-2 bg-white border border-gray-300  text-gray-800 text-sm shadow-sm">
                  Java
                </span>
                <span className="px-4 py-2 bg-white border border-gray-300  text-gray-800 text-sm shadow-sm">
                  C++
                </span>
                <span className="px-4 py-2 bg-white border border-gray-300  text-gray-800 text-sm shadow-sm">
                  FastAPI
                </span> */}

                
              </div>
            </div>
          </div>

          
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
            <img
              src={profileImage}
              alt="Ganesh Ram"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
