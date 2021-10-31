import React from "react";
import { animals } from "./animals";

const displayFact = (e) => {
  console.log(e.target.alt);
  const animalClicked = e.target.alt;
  const factArray = animals[animalClicked].facts;
  console.log(factArray);
  const funFact = factArray[Math.floor(Math.random() * factArray.length)];
  document.getElementById("fact").innerHTML = funFact;
};
const title = "";
const background = (
  <img src="/images/ocean.jpg" className="background" alt="ocean" />
);
const showBackground = false;
const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      style={{ width: "150px", height: '150px' }}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

const AnimalFacts = () => {
  return (
    <div className="App">
      <h1>{title || "Click an animal for a fun fact"}</h1>
      {showBackground && background}
      <div className="animals">{images}</div>
      <p id="fact"></p>
    </div>
  );
};

export default AnimalFacts;
