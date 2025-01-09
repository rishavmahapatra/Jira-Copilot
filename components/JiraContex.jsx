'use client'
import { createContext, useContext, useState, useEffect } from "react";

// Create the context
const JiraContext = createContext();

// Provider component to wrap the app
export function JiraProvider({ children }) {
  // Load initial state from localStorage (if available)
  const loadStateFromLocalStorage = () => {
    const savedState = localStorage.getItem('jiraData');
    return savedState ? JSON.parse(savedState) : {
      jiraUrl: "",
      userId: "",
      apiToken: ""
    };
  };

  const [jiraData, setJiraData] = useState(loadStateFromLocalStorage);

  // Save the state to localStorage whenever it changes
  useEffect(() => {
    if (jiraData) {
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
