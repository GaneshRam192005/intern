import React from "react";
import Header from "./Header";

const Profile = ({ data }) => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="max-w-3xl mx-auto mt-10 p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Profile Details</h2>

        <table className="w-full border border-collapse">
          <tbody>
            <tr className="border">
              <td className="p-3 font-medium">Name</td>
              <td className="p-3">{data.name}</td>
            </tr>

            <tr className="border">
              <td className="p-3 font-medium">College</td>
              <td className="p-3">{data.college}</td>
            </tr>

            <tr className="border">
              <td className="p-3 font-medium">School</td>
              <td className="p-3">{data.school}</td>
            </tr>

            <tr className="border">
              <td className="p-3 font-medium">Skills</td>
              <td className="p-3">{data.skills}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
