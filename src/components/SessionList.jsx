import React, { useState } from "react";
import SessionCard from "./SessionCard";
import { useSessionContext } from "../Context/ContextContext";


const subjects = ["All", "DSA", "Web Development", "DBMS", "OS", "Others"];

const SessionList = () => {
  const { sessions } = useSessionContext();
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? sessions : sessions.filter((s) => s.subject === filter);

  const totalDuration = filtered.reduce(
    (sum, s) => sum + Number(s.duration),
    0,
  );

  return (
    <div className="max-w-[900px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h2 className="text-xl font-bold text-gray-800">
          Study Sessions ({filtered.length})
        </h2>
        <p className="text-sm text-gray-600">
          Total Duration:{" "}
          <span className="font-semibold">{totalDuration} min</span>
        </p>
      </div>

      {/* Filter by Subject */}
      <div className="flex flex-wrap gap-2 mt-3">
        {subjects.map((sub) => (
          <button
            key={sub}
            onClick={() => setFilter(sub)}
            className={`px-3 py-1 text-sm rounded-full border cursor-pointer transition ${
              filter === sub
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {sub}
          </button>
        ))}
      </div>
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[80vh]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="64px"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path>
            </svg>
        <p className="text-gray-400 text-center py-8">
          No sessions found for the selected subject.
        </p>
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-3 mt-5">
          {filtered.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SessionList;
