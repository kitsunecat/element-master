import './Play.css';

const NewGame = () => {
  const boardSize = 8;

  const generateBoard = () => {
    let rows = [];
    for (let i = 0; i < boardSize; i++) {
      let cells = [];
      for (let j = 0; j < boardSize; j++) {
        const cellColor = (i + j) % 2 === 0 ? 'lightCell' : 'darkCell';
        cells.push(<div className={`cell ${cellColor}`} key={`cell-${i}-${j}`}></div>);
      }
      rows.push(<div className="row" key={`row-${i}`}>{cells}</div>);
    }
    return rows;
  };

  return (
    <div>
      <h1>Play Game</h1>
      <div className="board">{generateBoard()}</div>
    </div>
  );
};

export default NewGame;
