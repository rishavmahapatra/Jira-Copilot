'use client'
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { API_URL } from "./config";
import { useRouter } from 'next/navigation';

export default function StoryInput() {
  const [loading, setLoading] = useState(false);
  const [storyId, setStoryId] = useState("");
  const [jiraUrl,setJiraUrl] = useState("");
  const [userId, setUserId] = useState("");
  const [apiToken,setApiToken] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true);
    try{ 
      const response = await fetch(`${API_URL}/jira_authenticate`, {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
          "username": `${userId}`,
          "api-token": `${apiToken}`,
          "jira-url": `${jiraUrl}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      console.log("API response data:", data);
      alert("Jira Connected Successfully.");
      
      router.push('/story');
    }
    catch(err) {
      console.error("API fetch error:", err);
    }
    finally{
      setLoading(false);
    };
  }

  return (
    <div>
      
      <Card className="m-5 bg-gradient-to-l w-1/2 mx-auto from-lime-400 to-[#59c277] opacity-95 brightness-95 text-black  shadow-lime-500 shadow-md">
      
        <CardContent>
          <form className="mt-6 flex flex-col gap-3" onSubmit={handleSubmit}>
            <Label htmlFor="jiraurl">Jira URL :</Label>
            <Input
              className="placeholder:text-gray-700 placeholder:font-mono border border-black"
              placeholder = "Enter your Jira Project URL"
              id="jiraurl"
              type="text"
                value={jiraUrl}
                onChange={(e)=>setJiraUrl(e.target.value)}
              required
            />

            <Label htmlFor="email">Email ID :</Label>
            <Input
              className="border placeholder:text-gray-700 placeholder:font-mono border-black"
              id="email"
              type="email"
              placeholder  = "Enter your Project authorised Email ID"
                value={userId}
                onChange={(e)=>setUserId(e.target.value)}
              required
            />

            <Label htmlFor="token">Jira API Token :</Label>
            <Input
              className="border placeholder:text-gray-700 placeholder:font-mono border-black"
              id="token"
              placeholder = "Enter associated Jira API token"
              type="password"
                value={apiToken}
              onChange={(e) => setApiToken(e.target.value)}
              required
            />
             {/* <Label htmlFor="storyid">Story ID :</Label>
            <Input
              className="border placeholder:text-gray-700 placeholder:font-mono border-black"
              id="storyid"
              type="text"
              placeholder = "Example: XYZ-9"
              value={storyId}
              onChange={(e)=>setStoryId(e.target.value)}
              required
            /> */}
            {loading ? (
              <div>
              {/* <div className="absolute -bottom-10 left-1/2 loader"> </div> */}
              <p className="animate-pulse text-xl text-black text-center font-bold mt-5 mb-1">
                Loading Story details and estimates...
              </p>
              </div>
             
            ) : (
              <Button
                className="w-1/2 mt-5 mx-auto animate-shimmer bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white "
                type="submit"
              >
                SUBMIT
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
      {/* <StoryDesc/> */}
    </div>
  );
}

