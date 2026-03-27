import { useSessionContext } from "../Context/ContextContext";

const priorityBadge = {
  High: "bg-red-500 text-white",
  Medium: "bg-orange-500 text-white",
  Low: "bg-green-500 text-white",
};

const SessionCard = ({ session }) => {
  const { deleteSession } = useSessionContext();
  return (
    <div className={`rounded-md shadow-xl p-4 flex flex-col gap-2 hover:shadow-2xl transition border border-gray-300`}>
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-800">{session.topic}</h3>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${priorityBadge[session.priority]}`}
        >
          {session.priority}
        </span>
      </div>

      <p className="text-sm text-gray-600">
        <span className="font-medium">Subject:</span> {session.subject}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Duration:</span> {session.duration} min
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Date:</span> {session.date}
      </p>

      <button
        onClick={() => deleteSession(session.id)}
        className="mt-2 self-end text-sm text-red-600 border border-red-400 px-3 py-1 rounded-lg hover:bg-red-100 transition cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
};

export default SessionCard;
