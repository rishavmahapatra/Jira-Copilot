'use client'
import { createContext, useContext, useState } from "react";

// Create the context
const JiraContext = createContext();

// Provider component to wrap the app
export function JiraProvider({ children }) {
  const [jiraData, setJiraData] = useState({
    jiraUrl: "",
    userId: "",
    apiToken: ""
  });

  return (
    <JiraContext.Provider value={{ jiraData, setJiraData }}>
      {children}
    </JiraContext.Provider>
  );
}

// Custom hook to access context
export function useJira() {
  return useContext(JiraContext);
}
