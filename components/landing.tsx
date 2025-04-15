"use client";
import { useState } from "react";
import Link from "next/link";

export default function Landing() {
  const [musicOn, setMusicOn] = useState(true);

  const toggleMusic = () => {
    setMusicOn(!musicOn);
    // Add your music play/pause logic here
  };

  return (
    <div className="h-[90vh] flex flex-col items-center pt-16 bg-gray-900">
      <h1 className="text-5xl font-extrabold text-white mb-12 text-center tracking-tight">
        OG Games
      </h1>

      <div className="flex flex-col gap-6 items-center -mt-4">
        <div className="flex flex-row gap-6 items-center">
          <Link
            href="/solo"
            className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all w-36 text-center shadow-md"
          >
            1P
          </Link>
          <Link
            href="/multi"
            className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all w-36 text-center shadow-md"
          >
            234P
          </Link>
          <Link
            href="/team"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all w-36 text-center shadow-md flex justify-center items-center gap-1"
            aria-label="Tournaments"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M18 4V2H6v2H2v2c0 3.31 2.69 6 6 6a6.99 6.99 0 005 2c2.08 0 4-.8 5-2a6.003 6.003 0 006-6V4h-4zM6 10a4 4 0 01-4-4h4v4zm12 0V6h4a4 4 0 01-4 4zm-6 4c-1.85 0-3.41-1.28-3.86-3h7.72c-.45 1.72-2.01 3-3.86 3zm-1 2h2v2h-2v-2zm0 3h2v1h-2v-1z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M18 4V2H6v2H2v2c0 3.31 2.69 6 6 6a6.99 6.99 0 005 2c2.08 0 4-.8 5-2a6.003 6.003 0 006-6V4h-4zM6 10a4 4 0 01-4-4h4v4zm12 0V6h4a4 4 0 01-4 4zm-6 4c-1.85 0-3.41-1.28-3.86-3h7.72c-.45 1.72-2.01 3-3.86 3zm-1 2h2v2h-2v-2zm0 3h2v1h-2v-1z" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="absolute top-20 right-8 flex items-center gap-2 text-white">
        <button
          onClick={toggleMusic}
          className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors border-2 border-blue-400 shadow-lg"
          aria-label="Toggle Music"
        >
          {musicOn ? (
            // 🎵 Music On Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 17V5l12-2v12" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          ) : (
            // 🔇 Music Off Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 17V5l12-2v12M1 1l22 22" />
              <circle cx="6" cy="18" r="3" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
