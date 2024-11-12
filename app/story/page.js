'use client'
import React, { useEffect, useState } from "react";
import TaskList from "@/components/TaskList";
import PostStoryId from "@/components/PostStoryId";
import StoryDesc from "@/components/StoryDesc";
import { API_URL } from "@/components/config";
import Prompt from "@/components/Prompt";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [storyDescription, setStoryDescription] = useState(null);
  const [storyID, setStoryId] = useState(null);
  const [prompt,setPrompt] = useState('');
  const handleStorySubmit = (storyData) => {
    setTasks(storyData.subtasks);
    setStoryDescription(storyData.description);
    setStoryId(storyData.story_id);
  };

  const handleUpdateTask = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
    setTasks(updatedTasks);
  };
  const getPrompt = async () =>{
    const response= await fetch(`${API_URL}/prompt_template`)
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    setPrompt(data.prompt_template);
}
  useEffect(()=>{
    getPrompt()
  },[])
  console.log("task-",tasks);

  return (
    <div className="min-h-screen bg-black/[0.96]  w-full antialiased overflow-hidden">
       
      
      <h1 className=" my-5 text-4xl md:text-7xl py-1 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-lime-400 bg-opacity-50">
          Jira Copilot</h1>
      <div className="sm:grid grid-cols-2 gap-3 mt-5">
      <div className="Left Column ">
      <PostStoryId onStorySubmit={handleStorySubmit} />
      {storyDescription ? (<StoryDesc description={storyDescription}/>) : (<Prompt  prompt={prompt} />)}
      </div>
      <div className="Right Column">
        
      {Array.isArray(tasks) && tasks.length>0 && (<TaskList tasks={tasks} storyDescription={storyDescription} storyID={storyID} onUpdateTask={handleUpdateTask} />) }
      </div>
      </div>
      {/* <h1 className='fixed bg-black/[0.96] left-0 right-0 bottom-0 text-center p-1 text-white font-bold text-xl'>Made with ❤️ by Rishav</h1> */}
    </div>
  );
}

