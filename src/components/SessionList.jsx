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
        <p className="text-gray-400 text-center py-8">
          No sessions found for the selected subject.
        </p>
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
