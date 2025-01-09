'use client'
import { createContext, useContext, useState, useEffect } from "react";

// Create the context
const JiraContext = createContext();

// Provider component to wrap the app
export function JiraProvider({ children }) {
  // Check if window is defined (this ensures the code only runs on the client)
  const isClient = typeof window !== "undefined";

  // Load initial state from localStorage (if available and on client-side only)
  const loadStateFromLocalStorage = () => {
    if (isClient) {
      const savedState = localStorage.getItem('jiraData');
      return savedState ? JSON.parse(savedState) : {
        jiraUrl: "",
        userId: "",
        apiToken: ""
      };
    }
    return {
      jiraUrl: "",
      userId: "",
      apiToken: ""
    };
  };

  const [jiraData, setJiraData] = useState(loadStateFromLocalStorage);

  // Save the state to localStorage whenever it changes (only on client-side)
  useEffect(() => {
    if (isClient && jiraData) {
      localStorage.setItem('jiraData', JSON.stringify(jiraData));
    }
  }, [jiraData]); // Only run this effect when `jiraData` changes

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
