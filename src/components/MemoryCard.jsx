import React from "react";
import "./MemoryCard.css";
import { useState } from "react";

export default function MemoryCard(props) {
  // const [setIsFlipped] = useState(false);
  // const _clickHandler = () => {
  //   console.log(props);
  //   // setIsFlipped(!isFlipped);
  // };

  return (
    <div className="MemoryCard" onClick={props.pickCard}>
      <div className={`MemoryCardInner ${props.isFlipped ? "flipped" : ""}`}>
        <div className="MemoryCardBack">
          <img src="https://www.pngall.com/wp-content/uploads/12/One-Piece-PNG.png"></img>
        </div>
        <div className="MemoryCardFront">{props.symbol}</div>
      </div>
    </div>
  );
}
