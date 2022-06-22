import React, { useState } from "react";

function GameLayout(props) {
  var [arrayLayout, setArrayLayout] = useState([[]]);
  var [flag, setflag] = useState(false);
  var [counter, setcounter] = useState(0);
  const [color, setColor] = useState("red");
  function GridHead(r, c) {
    var row1 = [];
    var arr1 = [];
    for (let i = 0; i < r; i++) {
      row1.push(
        <div
          style={{
            display: "flex",
            marginTop: "35%",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              border: "2px solid black",
              height: "25px",
              width: "25px",
              borderRadius: "50%",
              backgroundColor: color,
            }}
          ></span>
        </div>
      );
    }
    for (let i = 0; i < c; i++) {
      arr1.push(row1);
    }
    return arr1;
  }
  var arr = new Array(props.columns).fill(0).map(() =>
    new Array(props.rows).fill(
      <div
        style={{
          display: "flex",
          marginTop: "35%",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            border: "2px solid black",
            height: "25px",
            width: "25px",
            borderRadius: "50%",
            backgroundColor: "white",
          }}
        ></span>
      </div>
    )
  );
  console.log(props.player1)
  console.log(props.player2)

  const b = GridHead(props.rows, 1);
  const setGrid = () => {
    setArrayLayout(arr);
    setflag(false);
    setcounter(0);
  };
  console.log(counter)
  const handleColor = (e, key) => {
    let copy = [...arrayLayout];
    var emp = props.columns - 1;
    console.log(copy[emp][key].props.children.props.style.backgroundColor);
    while (
      emp >= 0 &&
      copy[emp][key].props.children.props.style.backgroundColor != "white"
    ) {
      emp = emp - 1;
      console.log(emp);
    }
    if(emp ===0){
        setcounter(counter+1)
    }
    if (emp < 0) {
    if(counter<props.rows){
      alert("Can't Go there");
    }
    else {
        alert("Game Over");
        setGrid();
    }

    }
    if (color == "red") {
      copy[emp][key] = (
        <div
          style={{
            display: "flex",
            marginTop: "35%",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              border: "2px solid black",
              height: "25px",
              width: "25px",
              borderRadius: "50%",
              backgroundColor: "red",
            }}
          ></span>
        </div>
      );
      setArrayLayout(copy);
      setColor("yellow");
    } else if (color == "yellow") {
      copy[emp][key] = (
        <div
          style={{
            display: "flex",
            marginTop: "35%",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              border: "2px solid black",
              height: "25px",
              width: "25px",
              borderRadius: "50%",
              backgroundColor: "yellow",
            }}
          ></span>
        </div>
      );
      setArrayLayout(copy);
      setColor("red");
    }
    
    if(
      (copy[emp][key].props.children.props.style.backgroundColor ===
        copy[emp][key - 1].props.children.props.style.backgroundColor &&
        copy[emp][key - 1].props.children.props.style.backgroundColor ===
          copy[emp][key - 2].props.children.props.style.backgroundColor &&
        copy[emp][key - 2].props.children.props.style.backgroundColor ===
          copy[emp][key - 3].props.children.props.style.backgroundColor) ||
      (copy[emp][key].props.children.props.style.backgroundColor ===
        copy[emp][key - 1].props.children.props.style.backgroundColor &&
        copy[emp][key + 1].props.children.props.style.backgroundColor ===
          copy[emp][key + 2].props.children.props.style.backgroundColor &&
        copy[emp][key + 2].props.children.props.style.backgroundColor ===
          copy[emp][key + 3].props.children.props.style.backgroundColor &&
        copy[emp][key].props.children.props.style.backgroundColor !== "white" &&
        copy[emp][key - 1].props.children.props.style.backgroundColor ===
          "white")
    ) {
      setflag(true);
    } else if (
      (copy[emp][key].props.children.props.style.backgroundColor ===
        copy[emp + 1][key].props.children.props.style.backgroundColor &&
        copy[emp + 1][key].props.children.props.style.backgroundColor ===
          copy[emp + 2][key].props.children.props.style.backgroundColor &&
        copy[emp + 2][key].props.children.props.style.backgroundColor ===
          copy[emp + 3][key].props.children.props.style.backgroundColor) ||
      (copy[emp][key].props.children.props.style.backgroundColor ===
        copy[emp - 1][key].props.children.props.style.backgroundColor &&
        copy[emp - 1][key].props.children.props.style.backgroundColor ===
          copy[emp - 2][key].props.children.props.style.backgroundColor &&
        copy[emp - 2][key].props.children.props.style.backgroundColor ===
          copy[emp - 3][key].props.children.props.style.backgroundColor &&
        copy[emp - 2][key].props.children.props.style.backgroundColor !==
          "white" &&
        copy[emp - 3][key].props.children.props.style.backgroundColor ===
          "white")
    ) {
        setflag(true);
    } else if (
      (copy[emp][key].props.children.props.style.backgroundColor ===
        copy[emp + 1][key+1].props.children.props.style.backgroundColor &&
        copy[emp + 1][key+1].props.children.props.style.backgroundColor ===
          copy[emp + 2][key +2 ].props.children.props.style.backgroundColor &&
        copy[emp + 2][key +2].props.children.props.style.backgroundColor ===
          copy[emp + 3][key +3 ].props.children.props.style.backgroundColor) ||
      (copy[emp][key].props.children.props.style.backgroundColor ===
        copy[emp - 1][key -1 ].props.children.props.style.backgroundColor &&
        copy[emp - 1][key -1].props.children.props.style.backgroundColor ===
          copy[emp - 2][key -2].props.children.props.style.backgroundColor &&
        copy[emp - 2][key -2].props.children.props.style.backgroundColor ===
          copy[emp - 3][key - 3].props.children.props.style.backgroundColor &&
        copy[emp - 2][key -2].props.children.props.style.backgroundColor !==
          "white" &&
        copy[emp - 3][key - 3].props.children.props.style.backgroundColor ===
          "white")
    ) {
        setflag(true);
    }
    else if (
        (copy[emp][key].props.children.props.style.backgroundColor ===
          copy[emp + 1][key-1].props.children.props.style.backgroundColor &&
          copy[emp + 1][key-1].props.children.props.style.backgroundColor ===
            copy[emp + 2][key - 2 ].props.children.props.style.backgroundColor &&
          copy[emp + 2][key - 2].props.children.props.style.backgroundColor ===
            copy[emp + 3][key - 3 ].props.children.props.style.backgroundColor) ||
        (copy[emp][key].props.children.props.style.backgroundColor ===
          copy[emp - 1][key+ 1 ].props.children.props.style.backgroundColor &&
          copy[emp - 1][key +1].props.children.props.style.backgroundColor ===
            copy[emp - 2][key + 2].props.children.props.style.backgroundColor &&
          copy[emp - 2][key + 2].props.children.props.style.backgroundColor ===
            copy[emp - 3][key + 3].props.children.props.style.backgroundColor &&
          copy[emp - 2][key +2].props.children.props.style.backgroundColor !==
            "white" &&
          copy[emp - 3][key +2].props.children.props.style.backgroundColor ===
            "white")
      ) {
        setflag(true);
      }


  };

  return (
    <div>
      <div>
        <button onClick={(e) => setGrid()}>Get Grid</button>
        {b.map((items, index) => {
          return (

            <div style={{ display: "flex" }}>
              {items.map((subItems, sIndex) => {
                return (
                  <div
                    style={{
                      border: "2px solid black",
                      height: "100px",
                      width: "100px",
                    }}
                    key={sIndex}
                    onClick={(e) => handleColor(e, sIndex)}
                  >
                    {subItems}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {flag? color==='red'? `${props.player2} wins`:`${props.player2} wins` :arrayLayout.map((items, index) => {
        return (
          <div style={{ display: "flex" }}>
            {items.map((subItems, sIndex) => {
              return (
                <div
                  style={{
                    border: "2px solid black",
                    height: "100px",
                    width: "100px",
                  }}
                >
                  {subItems}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default GameLayout;
