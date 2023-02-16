//Wait until all 5 ships are placed then return true
//There's going to be a promise in gameconrol waiting on this return
//It'll then call turnControl afterwards
import playerFactory from "./playerFactory";
import gameboardFactory from "./gameboardFactory";
import makeGameboardDOM from "./components/gameboardDOM";
import { makeSetupPrompt } from "./components/startPrompts";
import makeXYtoggleBtn from "./components/XYtoggle";
import { addSetupColor, removeColor } from "./addTileColor";

const setupGameboard = (isHuman) => {
  return new Promise((resolve) => {
    let player1 = playerFactory(true);
    let player2 = isHuman ? playerFactory(true) : playerFactory(false);

    let gameboard1 = gameboardFactory();
    let gameboard2 = gameboardFactory();

    let shipLengths = [5, 4, 3, 3, 2];

    let prompt = makeSetupPrompt();
    prompt.appendChild(makeXYtoggleBtn());
    let gameboardDOM = makeGameboardDOM();
    prompt.appendChild(gameboardDOM);

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("tile")) {
        if (gameboard1.playerShips.length != 5) {
          let shipLocations = shipPlacementHelper(
            e.target.id,
            shipLengths[gameboard1.playerShips.length],
            XYtoggle.value
          );
          if (checkTileConflict(shipLocations, gameboard1) == true) {
            gameboard1.placeShip(shipLocations);
            addSetupColor(shipLocations);
          }
        }
      }

      if (
        gameboard1.playerShips.length == 5 &&
        gameboard2.playerShips.length == 0
      ) {
        removeColor();

        //Prompts p2 to place their ships
        let instructions = document.getElementById("instructions");
        instructions.innerHTML = "Player 2, place your ships";
      }
    });

    if (player2.isHuman == true) {
      gameboardDOM.addEventListener("click", (e) => {
        if (gameboard1.playerShips.length == 5) {
          if (e.target.classList.contains("tile")) {
            if (gameboard2.playerShips.length != 5) {
              let shipLocations = shipPlacementHelper(
                e.target.id,
                shipLengths[gameboard2.playerShips.length],
                XYtoggle.value
              );
              if (checkTileConflict(shipLocations, gameboard2) == true) {
                gameboard2.placeShip(shipLocations);
                addSetupColor(shipLocations);
              }
            }
          }
          if (gameboard2.playerShips.length == 5) {
            removeColor();
            //Prevents atk on the last tile clicked
            e.stopPropagation();
            resolve({ player1, player2, gameboard1, gameboard2, gameboardDOM });
          }
        }
      });
    } else {
      //picks 5 starting locatiosn for bots
      while (gameboard2.playerShips.length != 5) {
        let tile = "tile" + Math.floor(Math.random() * 100);
        let rngXY = Math.floor(Math.random() * 2);
        rngXY == 0 ? (XYtoggle.value = "x") : (XYtoggle.value = "y");
        console.log(XYtoggle.value);
        let shipLocations = shipPlacementHelper(
          tile,
          shipLengths[gameboard2.playerShips.length],
          XYtoggle.value
        );

        if (checkTileConflict(shipLocations, gameboard2) == true) {
          gameboard2.placeShip(shipLocations);
        }
      }
      //Bot will place ships before human does
      XYtoggle.value = "x";

      //Detects finish setup
      gameboardDOM.addEventListener("mouseover", (e) => {
        if (gameboard1.playerShips.length == 5) {
          removeColor();

          e.stopPropagation();
          resolve({ player1, player2, gameboard1, gameboard2, gameboardDOM });
        }
      });
    }
  });
};

function checkTileConflict(shipArray, gameboard) {
  // console.log("Tile array: " + shipArray);

  //Catches undefined tile arrays
  if (shipArray == false || shipArray.length < 2) {
    return false;
  }

  for (let i in gameboard.playerShips) {
    let ship = gameboard.playerShips[i];
    let compareArray = ship.shipLocation;

    for (let i in compareArray) {
      let compareTile = compareArray[i];

      for (let i in shipArray) {
        if (shipArray[i] == compareTile) {
          return false;
        }
      }
    }
  }

  return true;
}

function shipPlacementHelper(tile, shipLength, XYtoggle) {
  tile = tile.substring(4);
  let tileArray = [];

  //Blocks user placement on right if too long
  if (XYtoggle == "x") {
    if (tile.slice(-1) > 10 - shipLength) {
      return false;
    }

    for (let i = 0; i < shipLength; i++) {
      tile = Number(tile);
      tileArray.push(tile + i);
    }

    return tileArray;
  }

  if (XYtoggle == "y") {
    if (tile > 9 && tile.charAt(0) > 10 - shipLength) {
      return false;
    }

    for (let i = 0; tileArray.length != shipLength; i += 10) {
      tile = Number(tile);
      tileArray.push(tile + i);
    }

    return tileArray;
  }
}

export default setupGameboard;
