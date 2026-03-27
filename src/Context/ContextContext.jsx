import { createContext, useContext, useState } from "react";

let sessionContext = createContext();

export let useSessionContext = () => useContext(sessionContext);

export let SessionProvider = ({ children }) => {

  const [toggle, setToggle] = useState(false);

  const [sessions, setSessions] = useState([]);

  const addSession = (session) => {
    setSessions((prev) => [...prev, {...session, id: Date.now()}]);
  }

  const deleteSession = (id) => {
    setSessions((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <sessionContext.Provider value={{ sessions, addSession, deleteSession, toggle, setToggle }}>
      {children}
    </sessionContext.Provider>
  );
};

export default sessionContext;