import { createContext, useContext, useMemo, useState } from "react";

const OrganizerContext = createContext(null);

export function OrganizerProvider({ children }) {
  const [mode, setMode] = useState("user"); // "user" | "organizer"

  const value = useMemo(
    () => ({ mode, setMode, isOrganizer: mode === "organizer" }),
    [mode]
  );

  return (
    <OrganizerContext.Provider value={value}>
      {children}
    </OrganizerContext.Provider>
  );
}

export function useOrganizer() {
  const ctx = useContext(OrganizerContext);
  if (!ctx) throw new Error("useOrganizer must be used within OrganizerProvider");
  return ctx;
}
