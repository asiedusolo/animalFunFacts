import React, {useState} from "react";
import { animals } from "./animals";
import dolphin from './images/dolphin.jpg'
import lobster from './images/lobster.jpg'
import starfish from './images/starfish.jpg'

const fishes = {
  'dophin': dolphin,
  'lobster': lobster,
  'starfish': starfish
}

const displayFact = (e) => {
  console.log(e.target.alt);
  const animalClicked = e.target.alt;
  const factArray = animals[animalClicked].facts;
  console.log(factArray);
  const funFact = factArray[Math.floor(Math.random() * factArray.length)];
  document.getElementById("fact").innerHTML = funFact;
};
const title = "";
const Background = () => {
  return (
    <img
      src="https://image.shutterstock.com/image-illustration/abstract-under-sea-background-white-260nw-614496539.jpg"
      className="background"
      alt="ocean"
    />
  );
};

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={fishes[animal]}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

const AnimalFacts = () => {
  const [showBackground, setShowBackground] = useState(true)

  return (
    <div>
      <button onClick={() => setShowBackground(!showBackground)}>toggle background</button>
      <h1>{title || "Click an animal for a fun fact"}</h1>
      {showBackground && <Background />}
      <div className="animals">{images}</div>
      <p id="fact"></p>
    </div>
  );
};

export default AnimalFacts;
