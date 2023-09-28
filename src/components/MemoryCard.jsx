import React from "react";
import "./MemoryCard.css";

function Card() {
   return (
     <img className ="MemoryCard" src="https://www.pngall.com/wp-content/uploads/12/One-Piece-PNG.png"></img>
   );
}

export default function MemoryCardBoard() {
  return (
    <>
      <div className="MemoryCardColumn">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="MemoryCardColumn">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="MemoryCardColumn">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="MemoryCardColumn">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
