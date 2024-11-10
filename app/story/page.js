'use client'
import React, { useState } from "react";
import TaskList from "@/components/TaskList";
import PostStoryId from "@/components/PostStoryId";
import StoryDesc from "@/components/StoryDesc";
import { Spotlight } from "@/components/ui/spotlight";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [storyDescription, setStoryDescription] = useState(null);
  const [storyID, setStoryId] = useState(null);
  const handleStorySubmit = (storyData) => {
    setTasks(storyData.subtasks);
    setStoryDescription(storyData.description);
    setStoryId(storyData.story_id);
  };

  const handleUpdateTask = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
    setTasks(updatedTasks);
  };

  return (
    <div className="h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased dark:bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-30" fill="lime" />
      <h1 className='text-center font-extrabold text-3xl m-5'>Jira Estimator</h1>
      <div className="grid grid-cols-2 gap-3 mt-20">
      <div className="Left Column ">
      <PostStoryId onStorySubmit={handleStorySubmit} />
      {storyDescription && (<StoryDesc description={storyDescription}/>)}
      </div>
      <div className="Right Column">
      {tasks.length>0 && (<TaskList tasks={tasks} storyDescription={storyDescription} storyID={storyID} onUpdateTask={handleUpdateTask} />)}
      </div>
      </div>
      <h1 className='fixed left-0 right-0 bottom-0 text-center p-1 bg-teal-400 font-bold text-xl'>Made with ❤️ by Rishav</h1>
    </div>
  );
}

