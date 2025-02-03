import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src="https://via.placeholder.com/100"
        alt="Profile"
        className="rounded-full border-2 border-blue-500"
      />
      <h1 className="text-2xl font-bold mt-2">Jane Doe</h1>
      <p className="text-gray-600 text-center">
        A passionate web developer who loves creating beautiful UIs.
      </p>
    </div>
  );
};

export default Profile;