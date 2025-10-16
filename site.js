import { animals } from "./animals.js";

console.log(animals[0]);
"this".toLowerCase;

const cardContainer = document.getElementById("card-container");
cardContainer.replaceChildren();

function CreateAnimalCard(animal) {
  const card = document.createElement("div");
  card.className = "card";
  const title = document.createElement("h3");
  title.textContent = animal.title;
  const image = document.createElement("img");
  image.src = animal.image;
  image.alt = animal.title;
  const description = document.createElement("p");
  const halfDescription =
    animal.description.slice(0, animal.description.length / 2) + "...";
  description.textContent = halfDescription;
  const textContainer = document.createElement("div");
  textContainer.className = "card-text";
  textContainer.appendChild(title);
  textContainer.appendChild(description);
  card.appendChild(image);
  card.appendChild(textContainer);
  return card;
}

function RenderCards(list) {
  if (list.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No animals found.";
    cardContainer.appendChild(message);
  } else {
    cardContainer.replaceChildren(...list.map(CreateAnimalCard));
  }
}

function SetUpFunction() {
  const allCards = Array.from(document.getElementsByClassName("card"));
  
  allCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      const description = card.querySelector(".card-text p");
      const animal = animals.find(
        (a) => a.title === card.querySelector("h3").textContent
      );
      description.textContent = animal.description;
    });

    card.addEventListener("mouseout", () => {
      const description = card.querySelector(".card-text p");
      const animal = animals.find(
        (a) => a.title === card.querySelector("h3").textContent
      );
      description.textContent =
        animal.description.slice(0, animal.description.length / 2) + "...";
    });
  });
}

RenderCards(animals);
SetUpFunction();
