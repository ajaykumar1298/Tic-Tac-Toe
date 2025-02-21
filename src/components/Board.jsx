import Square from "./Square";

const Board = ({ cells, onCellClick, winningCells }) => {
  return (
    <div className="board">
      {cells.map((cell, index) => (
        <Square
          key={index}
          value={cell}
          onClick={() => onCellClick(index)}
          isWinning={winningCells.includes(index)} // Check if the cell is in the winning row
        />
      ))}
    </div>
  );
};

export default Board;
