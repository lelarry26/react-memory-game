import "./App.css";
import MemoryCard from "./components/MemoryCard";
import { useEffect, useState } from "react";

function generateDeck() {
  const symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
  const deck = [];

  for (let i = 0; i < 16; i++) {
    const card = { isFlipped: false, symbol: symbols[i % 8] };
    deck.push(card);
  }
  shuffle(deck);
  return deck;
}

function shuffle(deck) {
  var j, x, i;
  for (i = deck.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = deck[i];
    deck[i] = deck[j];
    deck[j] = x;
  }
  return deck;
}
function App() {
  const [deck, setDeck] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);
  useEffect(() => {
    setDeck(generateDeck());
  }, [setDeck]);
  let cardsJSX = deck.map((card, index) => {
    return (
      <MemoryCard
        symbol={card.symbol}
        isFlipped={card.isFlipped}
        key ={index}
        pickCard={pickCard}
      />
    );
  });
  function pickCard(cardIndex) {
    console.log(deck[cardIndex])
    if (deck[cardIndex].isFlipped) {
      return;
    }
    let cardToFlip = { ...deck[cardIndex] };
    cardToFlip.isFlipped = true;
    let newPickedCards = pickedCards.concat(cardIndex);
    let newDeck = deck.map((card, index) => {
      if (card === index) {
        return cardToFlip;
      }
      return card;
    });
    setDeck(newDeck);
    setPickedCards(newPickedCards);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Memory Game</h1>
        <h2 className="subtitle">Match Cards To Win</h2>
      </header>
      <div>{cardsJSX.slice(0, 4)}</div>
      <div>{cardsJSX.slice(4, 8)}</div>
      <div>{cardsJSX.slice(8, 12)}</div>
      <div>{cardsJSX.slice(12, 16)}</div>
    </div>
  );
}

export default App;
