"use client";
import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse()
    setLoading(true);
    try {
      const res = await fetch('/api/generate', {  // Ensure this matches your actual API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({body: prompt }),
        
      });

      if (!res.ok) {
        throw new Error('Failed to fetch response');
      }

      const data = await res.json();
      setResponse(data.output);
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred. Please try again.');
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div>
         <h1 className='font-bold text-4xl text-center'>My own GPT</h1>
      <form onSubmit={handleSubmit} className="flex items-center">
        {/* <label for='text'>Enter this or that statement</label> */}
        <textarea 
        id='text'
          type="text" 
          value={prompt} 
          onChange={(e) => setPrompt(e.target.value)} 
          placeholder="Enter prompt"
          className="w-2/3 h-56 rounded-xl text-center font-semibold bg-blue-200 border p-2 m-10"
        />
        <button type="submit" className=" rounded-lg bg-blue-500 text-white p-2 m-4">
          Generate
        </button>
      </form>
      {loading && (<p className='font-bold text-center mx-auto'>Loading</p>)}
      {response && (<p className='m-10 p-10 border-2 rounded-md'>{response}</p>)}
    </div>
  );
}
