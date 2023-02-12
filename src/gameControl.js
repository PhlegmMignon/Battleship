import playerFactory from "./playerFactory";
import makeGameboardDOM from "./components/gameboardDOM";
import { makeShipLocationsPrompt } from "./components/startPrompts";
import gameboardFactory from "./gameboardFactory";
import {
  turnControl,
  checkTileConflict,
  shipPlacementHelper,
} from "./turnControl";
import setupGameboard from "./setup";
// import { resolvePlugin } from "@babel/core";

async function gameControl(isHuman) {
  let objects = await setupGameboard(isHuman);
  let winner = await turnControl(
    objects.player1,
    objects.player2,
    objects.gameboard1,
    objects.gameboard2
  );

  if (winner == "p1") {
    alert("p1 wins");
  } else if (winner == "p2") {
    alert("p2 wins");
  }

  document.getElementById("prompt").style.display = "none";
}

// const waitForStart = (setupFinished) => {
//   // setTimeout(() => {
//   if (setupFinished != undefined) {
//     console.log(setupFinished);
//   } else {S
//     setTimeout(waitForStart(setupFinished), 500);
//   }
//   // }, 500);
// };
export { gameControl };
