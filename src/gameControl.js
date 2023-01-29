import playerFactory from "./playerFactory";
import makeGameboardDOM from "./components/gameboardDOM";
import { makeShipLocationsPrompt } from "./components/startPrompts";
import gameboardFactory from "./gameboardFactory";
import turnControl from "./turnControl";
// import { resolvePlugin } from "@babel/core";

async function gameControl(isHuman) {
  let turnCounter = 1;
  let player1 = playerFactory(true);
  let player2 = isHuman ? playerFactory(true) : playerFactory(false);

  let p1Ships = [];
  let p2Ships = [];

  let gameboard1 = gameboardFactory();
  let gameboard2 = gameboardFactory();

  let gameboardDOM = makeGameboardDOM();

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("tile")) {
      turnControl(e.target.id, turnCounter, gameboard1, gameboard2);
      turnCounter++;
    }
  });

  let prompt = makeShipLocationsPrompt();
  prompt.appendChild(gameboardDOM);

  // let instructions = [
  //   "Place your carrier",
  //   "Place your battleship",
  //   "Place your cruiser",
  //   "Place your submarine",
  //   "Place your destoryer",
  // ];

  // let shipLocations = [];
  // let shipLengths = [5, 4, 3, 3, 2];

  // let instructionsPrompt = document.getElementById("instructions");
  // prompt.appendChild(gameboard);

  // gameboard.addEventListener("click", (e) => {
  //   console.log(e.target.id);
  //   shipLocations.push(e.target.id);
  // });

  // for (let i = 0; i < 50; i++) {
  //   setTimeout(() => {
  //     let thing = waitForUser(shipLocations, 1);

  //     if (thing == false) {
  //       console.log(shipLocations);
  //     }
  //   }, 1000);
  // }

  // for (let i = 0; i < 2; i++) {
  //   shipLocations = [];
  //   let p = new Promise((resolve) => {
  //     let thing = waitForUser(shipLocations, shipLengths[i]);
  //     console.log("thing is" + thing);
  //   });
  //   p.then((isValid) => {
  //     if (isValid == true) {
  //       console.log("hi");
  //       gameboard1.placeShip(shipLocations);
  //     }
  //     console.log(p);
  //   });

  //   // thing.then(gameboard1.placeShip(shipLocations));
  // }

  //   //   // console.log(shipLocations);
}

// function promiseShipInput() {}

// function waitForUser(shipLocations, i) {
//   return new Promise((resolve, reject) => {
//     function ensureArrayLength() {
//       if (shipLocations.length == i) {
//         console.log("resolved");
//         return resolve();
//       }
//       setTimeout(ensureArrayLength, 2000);
//     }
//   });
// }

// async function waitForUser(shipLocations, i) {
//   console.log(i);
//   console.log(shipLocations);
//   // function poll(resolve) {
//   if (shipLocations.length == i) {
//     // console.log("validity check");
//     // validityCheck(shipLocations);
//     return true;
//   } else {
//     // setTimeout(() => poll(resolve), 100);
//     setTimeout(() => waitForUser(shipLocations, i), 5000);
//   }

//   // }

//   // return new Promise(poll);
// }

export { gameControl };
