import React, { useState } from "react";
import SessionForm from "./components/SessionForm";
import SessionList from "./components/SessionList";
import { useSessionContext } from "./Context/ContextContext";

const App = () => {
  const { toggle, setToggle, sessions } = useSessionContext();
  
  
  return (
    <div className='min-h-screen h-screen'>
      <nav className="flex items-center justify-between p-4  bg-[rgba(0,0,0,0.3)] backdrop-blur-xl">
        <h1 className="text-2xl font-bold">Study Session Planner</h1>
        <button
          className="bg-[crimson] p-2 rounded-sm hover:bg-red-700 active:scale-95 text-white font-bold cursor-pointer transition"
          onClick={() => setToggle(prev => !prev)}
        >
          {toggle ? "View Sessions" : "Create Session"}
        </button>
      </nav>

      <div className="p-5">{toggle ?<SessionForm/> :(
        sessions.length > 0 ? <SessionList /> : <p className="text-center text-gray-500 mt-10">No sessions created yet. <a className="text-blue-500 cursor-pointer" onClick={() => setToggle(true)}>Click here</a> to create your first session.</p>
      )}</div>
    </div>
  );
};

export default App;
