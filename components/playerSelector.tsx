'use client'
import { useState } from "react";

export default function PlayerSelector() {
    const [selectedPlayers, setSelectedPlayers] = useState(2);

    const handlePlay = () => {
        console.log(`Selected players: ${selectedPlayers}`);
        // you can navigate or trigger socket connection here
        // router.push(`/game?players=${selectedPlayers}`);
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white shadow-md flex flex-col items-center gap-4">
                <label htmlFor="playerCount">Select number of players:</label>
                <select
                    id="playerCount"
                    value={selectedPlayers}
                    onChange={(e) => setSelectedPlayers(Number(e.target.value))}
                    className="bg-gray-700 p-2 rounded text-white"
                >
                    <option value={2}>2 Players</option>
                    <option value={3}>3 Players</option>
                    <option value={4}>4 Players</option>
                </select>

                <button
                    onClick={handlePlay}
                    className="mt-2 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-all"
                >
                    Play
                </button>
            </div>
        </div>
    );
}
