'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Cell = {
  count: number;
  color: "red" | "blue" | null;
  id: number;
};

export default function ChainReactionGame() {
  const [currentPlayer, setCurrentPlayer] = useState<"red" | "blue">("red");
  const [idCounter, setIdCounter] = useState(0);
  const [winner, setWinner] = useState<"red" | "blue" | null>(null);
  const [rows, setRows] = useState(6);
  const [cols, setCols] = useState(6);
  const [grid, setGrid] = useState<Cell[][]>(() =>
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({ count: 0, color: null, id: 0 }))
    )
  );

  const handleClick = (row: number, col: number) => {
    if (winner) return;
    const cell = grid[row][col];
    if (cell.color !== null && cell.color !== currentPlayer) return;

    const newGrid = grid.map((r) => r.map((c) => ({ ...c })));
    const willExplode = newGrid[row][col].count + 1 >= 4;

    addOrb(newGrid, row, col, currentPlayer, willExplode);
    setGrid(newGrid);
    setCurrentPlayer(currentPlayer === "red" ? "blue" : "red");
  };

  const addOrb = (
    grid: Cell[][],
    row: number,
    col: number,
    color: "red" | "blue",
    allowExplode = true
  ) => {
    const cell = grid[row][col];
    cell.count++;
    cell.color = color;
    cell.id = idCounter;
    setIdCounter((prev) => prev + 1);

    if (allowExplode && cell.count >= 4) {
      cell.count = 0;
      cell.color = null;

      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];

      directions.forEach(([dr, dc]) => {
        const newRow = row + dr;
        const newCol = col + dc;
        if (isValid(newRow, newCol)) {
          setTimeout(() => {
            addOrb(grid, newRow, newCol, color);
            setGrid(grid.map((r) => r.map((c) => ({ ...c }))));
          }, 150);
        }
      });
    }
  };

  const isValid = (row: number, col: number) =>
    row >= 0 && row < rows && col >= 0 && col < cols;

  const checkWinner = () => {
    const allCells = grid.flat();
    const firstCellColor = allCells.find((cell) => cell.color !== null)?.color;

    if (
      firstCellColor &&
      allCells.every((cell) => cell.color === firstCellColor)
    ) {
      setWinner(firstCellColor);
    }
  };

  useEffect(() => {
    checkWinner();
  }, [grid]);

  const orbLayout = (count: number, color: string) => {
    const orbColor = color === "red" ? "bg-red-500" : "bg-blue-500";
    if (count === 1) {
      return (
        <motion.div
          layout
          className={`w-4 h-4 ${orbColor} rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        />
      );
    } else if (count === 2) {
      return (
        <>
          <motion.div
            layout
            className={`w-3 h-3 ${orbColor} rounded-full absolute left-1/4 top-1/2 transform -translate-y-1/2`}
          />
          <motion.div
            layout
            className={`w-3 h-3 ${orbColor} rounded-full absolute right-1/4 top-1/2 transform -translate-y-1/2`}
          />
        </>
      );
    } else if (count >= 3) {
      return (
        <>
          <motion.div
            layout
            className={`w-3 h-3 ${orbColor} rounded-full absolute top-1 left-1`}
          />
          <motion.div
            layout
            className={`w-3 h-3 ${orbColor} rounded-full absolute bottom-1 right-1`}
          />
          <motion.div
            layout
            className={`w-3 h-3 ${orbColor} rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          />
        </>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-800">Chain Reaction</h1>
        {winner && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold text-white bg-green-500 px-4 py-2 rounded-lg shadow"
          >
            {winner.charAt(0).toUpperCase() + winner.slice(1)} Wins!
          </motion.div>
        )}
      </div>

      {/* Game Board */}
      <div
        className="grid gap-[4px] bg-gray-300 p-2 rounded-lg shadow-lg"
        style={{ gridTemplateColumns: `repeat(${cols}, 50px)` }}
      >
        {grid.flatMap((row, rIdx) =>
          row.map((cell, cIdx) => (
            <div
              key={`${rIdx}-${cIdx}`}
              onClick={() => handleClick(rIdx, cIdx)}
              className="w-12 h-12 bg-white relative cursor-pointer rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform"
            >
              <AnimatePresence>
                <div className="w-full h-full relative">
                  {cell.color && orbLayout(cell.count, cell.color)}
                </div>
              </AnimatePresence>
            </div>
          ))
        )}
      </div>

      {/* Player Info & Controls */}
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        {!winner && (
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-gray-700">Current Player:</span>
            <div
              className={`w-4 h-4 rounded-full ${
                currentPlayer === "red" ? "bg-red-500" : "bg-blue-500"
              } shadow-md`}
            />
            <span
              className={`text-xl font-bold ${
                currentPlayer === "red" ? "text-red-500" : "text-blue-500"
              }`}
            >
              {currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)}
            </span>
          </div>
        )}

        <div className="flex flex-col gap-4 w-full items-center">
          <button
            onClick={() => {
              const newGrid = Array.from({ length: rows }, () =>
                Array.from({ length: cols }, () => ({
                  count: 0,
                  color: null,
                  id: 0,
                }))
              );
              setGrid(newGrid);
              setCurrentPlayer("red");
              setWinner(null);
              setIdCounter(0);
            }}
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors w-full max-w-xs"
          >
            Reset Game
          </button>

          {/* Grid Size Control */}
          <div className="w-full max-w-xs space-y-3">
            <div className="flex justify-between items-center">
              <label htmlFor="rows" className="text-gray-700 font-medium">
                Rows:
              </label>
              <input
                id="rows"
                type="number"
                min="2"
                max="10"
                value={rows}
                onChange={(e) => setRows(Number(e.target.value))}
                className="w-20 px-2 py-1 border rounded text-center text-black"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="cols" className="text-gray-700 font-medium">
                Columns:
              </label>
              <input
                id="cols"
                type="number"
                min="2"
                max="10"
                value={cols}
                onChange={(e) => setCols(Number(e.target.value))}
                className="w-20 px-2 py-1 border rounded text-center text-black"
              />
            </div>
            <button
              onClick={() => {
                const newGrid = Array.from({ length: rows }, () =>
                  Array.from({ length: cols }, () => ({
                    count: 0,
                    color: null,
                    id: 0,
                  }))
                );
                setGrid(newGrid);
                setWinner(null);
                setCurrentPlayer("red");
                setIdCounter(0);
              }}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-400 transition-colors"
            >
              Apply Grid Size
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
