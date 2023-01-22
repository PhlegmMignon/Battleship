import playerFactory from "./playerFactory";
import makeGameboard from "./components/gameboardDOM";
import { makeShipLocationsPrompt } from "./components/startPrompts";
import gameboardFactory from "./gameboardFactory";
// import { resolvePlugin } from "@babel/core";

async function gameControl(isHuman) {
  let player1 = playerFactory(true);
  let player2 = isHuman ? playerFactory(true) : playerFactory(false);

  let p1Ships = [];
  let p2Ships = [];
  let instructions = [
    "Place your carrier",
    "Place your battleship",
    "Place your cruiser",
    "Place your submarine",
    "Place your destoryer",
  ];

  let shipLocations = [];
  let shipLengths = [5, 4, 3, 3, 2];

  let gameboard = makeGameboard();

  let prompt = makeShipLocationsPrompt();
  let instructionsPrompt = document.getElementById("instructions");
  prompt.appendChild(gameboard);

  gameboard.addEventListener("click", (e) => {
    console.log(e.target.id);
    shipLocations.push(e.target.id);
  });

  setTimeout(() => {
    if (waitForUser(shipLocations, 1)) {
      console.log(shipLocations);
    }
  }, 1000);

  // let gameboard1 = gameboardFactory();
  // for (let i = 0; i < 5; i++) {
  //   shipLocations = [];
  //   if (waitForUser(shipLocations, shipLengths[i]) == true) {
  //     gameboard1.placeShip(shipLocations);
  //     console.log("hi");
  //   }
  // }

  //   //   // console.log(shipLocations);
}

function waitForUser(shipLocations, i) {
  function poll(resolve) {
    if (shipLocations.length == i) {
      resolve(true);
    } else {
      setTimeout(() => poll(resolve), 100);
    }

    while (shipLocations.length > i) {
      shipLocations.pop();
    }
  }

  return new Promise(poll);
}

export { gameControl };
