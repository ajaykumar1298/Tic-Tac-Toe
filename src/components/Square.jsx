const Square = ({ value, onClick, isWinning }) => {
  return (
    <button className={`cell ${isWinning ? "win" : ""}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
