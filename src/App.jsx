import React from "react";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div className="bg-yellow-50 min-h-screen flex justify-center items-center">
      <div className="w-3/4 bg-white shadow-lg p-6 rounded-md">
        <Profile />
        <Contact />
        <Skills />
        <Experience />
      </div>
    </div>
  );
};

export default App;