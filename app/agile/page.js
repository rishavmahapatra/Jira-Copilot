"use client";
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

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
        <input 
        id='text'
          type="text" 
          value={prompt} 
          onChange={(e) => setPrompt(e.target.value)} 
          placeholder="Enter prompt"
          className="w-2/3 h-56 rounded-xl text-center font-semibold bg-gradient-to-l from-[#a8ff78] to-[#78ffd6] border p-2 m-10"
        />
        <button type="submit" className=" rounded-lg bg-blue-500 text-white p-2 m-4">
          Generate
        </button>
      </form>
      {loading && (<p className='font-bold animate-pulse text-2xl text-yellow-200 text-center mx-auto'>Loading</p>)}
      {response && (<ReactMarkdown className='m-10 p-10 border-2  bg-gradient-to-l from-[#a8ff78] to-[#78ffd6] rounded-md'>{response}</ReactMarkdown>)}
    </div>
  );
}
