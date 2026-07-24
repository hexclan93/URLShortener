"use client"
import React, { useState } from 'react'
import Link from 'next/link' // Added missing import

const Shorten = () => {
    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const [generated, setgenerated] = useState("");

    const generate = async () => {
        // Validation to prevent empty requests
        if (!url || !shorturl) {
            alert("Please fill in both fields");
            return;
        }

        try {
            const res = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    url: url,
                    shorturl: shorturl,
                }),
            });

            const result = await res.json();

            if (res.ok) {
                // Generates the final link using your environment variable
                const host = process.env.NEXT_PUBLIC_HOST || "https://bitlinks-ten-mu.vercel.app/";
                setgenerated(`${host}/${shorturl}`);
                
                // Clear inputs
                seturl("");
                setshorturl("");
                alert(result.message || "Short URL created!");
            } else {
                alert(result.message || "Something went wrong");
            }

            console.log(result);
        } catch (error) {
            console.error("Fetch error:", error);
            alert("Failed to connect to the server.");
        }
    };

    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4 '>
            <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input 
                    type="text"
                    value={url}
                    className='px-4 py-2 bg-white focus:outline-purple-600 rounded-md text-black'
                    placeholder='Enter your URL'
                    onChange={e => { seturl(e.target.value) }} 
                />

                <input 
                    type="text"
                    value={shorturl}
                    className='px-4 py-2 bg-white focus:outline-purple-600 rounded-md text-black'
                    placeholder='Enter your preferred short URL text'
                    onChange={e => { setshorturl(e.target.value) }} 
                />
                
                <button 
                    onClick={generate} 
                    className='bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg shadow-lg p-3 py-2 my-4 font-bold text-white'
                >
                    Generate
                </button>
            </div>

            {generated && (
                <div className='mt-2 flex flex-col gap-2'>
                    <span className='font-bold text-lg text-purple-800'>Your Link:</span>
                    <code className='bg-white p-2 rounded border border-purple-300 overflow-x-auto'>
                        <Link target="_blank" href={generated} className='text-blue-600 hover:underline'>
                            {generated}
                        </Link>
                    </code>
                </div>
            )}
        </div>
    );
}

export default Shorten;
