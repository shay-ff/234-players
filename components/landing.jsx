"use client"
import { useState } from "react";
import Link from "next/link";

export default function Landing() {
    const [settingsVisible, setSettingsVisible] = useState(false);

    const displaySettings = () => {
        setSettingsVisible(!settingsVisible);
        console.log(settingsVisible);
    };

    return (
        <div className="h-[90vh] flex flex-col items-center pt-16 bg-gray-900">
            <h1 className="text-4xl font-bold text-white mb-12 text-center">OG Games</h1>
            <div className="flex flex-col gap-6 items-center -mt-4">
                <div className="flex flex-row gap-4 items-center">
                    <Link href="/solo" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-36 text-center">1P</Link>
                    <Link href="/multi" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-36 text-center">234P</Link>
                    <Link href="/team" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-36 text-center">4v4</Link>
                </div>
                {/* <Link href="/contact" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-48 text-center">with bots</Link> */}
            </div>
            <div className="absolute top-20 right-8 flex items-center gap-2 text-white">
                <button onClick={displaySettings} className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors border-2 border-blue-400 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}