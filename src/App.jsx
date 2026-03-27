import React, { useState } from "react";
import SessionForm from "./components/SessionForm";
import SessionList from "./components/SessionList";
import { useSessionContext } from "./Context/ContextContext";

const App = () => {
  const { toggle, setToggle, sessions } = useSessionContext();

  return (
    <div className="min-h-screen h-screen">
      <nav className="flex items-center justify-between p-4  bg-[rgba(0,0,0,0.3)] backdrop-blur-xl">
        <h1 className="text-2xl font-bold">Study Session Planner</h1>
        <button
          className="bg-[crimson] p-2 rounded-sm hover:bg-red-700 active:scale-95 text-white font-bold cursor-pointer transition"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? "View Sessions" : "Create Session"}
        </button>
      </nav>

      <div className="p-5">
        {toggle ? (
          <SessionForm />
        ) : sessions.length > 0 ? (
          <SessionList />
        ) : (
          <div className="flex flex-col items-center justify-center h-[80vh]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="64px"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path>
            </svg>
            <p className="text-center text-gray-500 mt-10">
              No sessions created yet.{" "}
              <a
                className="text-blue-500 cursor-pointer"
                onClick={() => setToggle(true)}
              >
                Click here
              </a>{" "}
              to create your first session.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
