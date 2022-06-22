import logo from "./logo.svg";
import { React, useState } from "react";
import "./App.css";
import GameLayout from "./Components/GameLayout";

function App() {
  const [rows, setRows] = useState(6);
  const [columns, setColumns] = useState(5);
  const [player1, setPlayer1] = useState("player1");
  const [player2, setPlayer2] = useState("player2");
  var [display, setDisplay] = useState(true);
  function handlerow(e) {
    setRows(e.target.value);
  }
  function handlecolumn(e) {
    setColumns(e.target.value);
  }
  function handleplayer1(e) {
    setPlayer1(e.target.value);
  }

  function handleplayer2(e) {
    setPlayer2(e.target.value);
  }
  const handleDisplay = () => {
    display = setDisplay(!display);
    console.log(display);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {display ? (
        <div>
          Rows:
          <input type="number" value={rows} min="6" onChange={handlerow} />
          {rows}
          <br />
          Columns:
          <input
            type="number"
            value={columns}
            min="5"
            onChange={handlecolumn}
          />
          {columns}<br />
          Player1 :
          <input
            type="text"
            placeholder="player name"
            onChange={handleplayer1}
          /> {player1}<br />
          Player 2:
           <input
            type="text"
            placeholder="player name"
            onChange={handleplayer2}
          /> {player2}<br />

          <button onClick={handleDisplay}> Generate Grid</button>
        </div>
      ) : (
        <GameLayout rows={rows} columns={columns} player1={player1} player2={player2}/>
      )}
    </div>
  );
}

export default App;
