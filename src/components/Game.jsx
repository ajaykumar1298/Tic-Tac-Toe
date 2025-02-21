import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameActive, setGameActive] = useState(true);
  const [status, setStatus] = useState("Player X's turn");
  const [winningCells, setWinningCells] = useState([]); // Track winning cells

  const handleCellClick = (index) => {
    if (!gameActive || cells[index]) return;

    const newCells = [...cells];
    newCells[index] = currentPlayer;
    setCells(newCells);

    const winner = checkWinner(newCells);
    if (winner) {
      setGameActive(false);
      setWinningCells(winner.pattern); // Store winning row
      setStatus(`🎉 Player ${winner.player} wins! 🎉`);
    } else if (!newCells.includes(null)) {
      setGameActive(false);
      setStatus("It's a draw!");
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      setStatus(`Player ${currentPlayer === "X" ? "O" : "X"}'s turn`);
    }
  };

  const checkWinner = (cells) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return { player: cells[a], pattern };
      }
    }
    return null;
  };

  const resetGame = () => {
    setCells(Array(9).fill(null));
    setCurrentPlayer("X");
    setGameActive(true);
    setStatus("Player X's turn");
    setWinningCells([]); // Reset winning cells
  };

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <div className="status">{status}</div>
      <Board cells={cells} onCellClick={handleCellClick} winningCells={winningCells} />
      <button className="reset" onClick={resetGame}>
        Restart
      </button>
    </div>
  );
};

export default Game;
