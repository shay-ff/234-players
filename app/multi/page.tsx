'use client'
import Link from "next/link";
import { useState } from "react";
import PlayerSelector from "@/components/playerSelector";

export default function Multi() {
    const [showPlayerSelector, setShowPlayerSelector] = useState(false);
    return (
        <div>
           {/* {!showPlayerSelector ? (
                <button onClick={() => setShowPlayerSelector(true)}>
                    color-wars
                </button>
            ) : (
                <PlayerSelector />
            )} */}
            <div>
                <Link href="/games/color-wars">
                    <button className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        color wars
                    </button>
                </Link>
            </div>
        </div>
    )
}