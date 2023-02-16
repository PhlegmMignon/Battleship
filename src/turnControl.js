import { addHitColor, addMissedColor, removeColor } from "./addTileColor";

function turnControl(p1, p2, gameboard1, gameboard2) {
  if (p2.isHuman) {
    return new Promise((resolve) => {
      //Prompts p1 to play
      let instructions = document.getElementById("instructions");
      instructions.textContent = "Player 1's turn";

      let counter = 0;

      document.addEventListener("click", (e) => {
        let tile = e.target.id;

        if (tile.substring(0, 4) != "tile") {
          return;
        } else {
          tile = tile.substring(4);
          tile = Number(tile);
        }

        //Player1 turn
        if (counter % 2 == 0) {
          if (validateAtk(tile, gameboard2) != false) {
            gameboard2.receiveAttack(tile);
            counter++;

            //Updates gameboard2 colors
            // Waits so user can see if atk hit or missed
            showColors(gameboard2);

            setTimeout(() => {
              //Hide gameboard2 colors
              removeColor();

              //Show gameboard1 colors
              showColors(gameboard1);

              //Win detection
              if (gameboard2.allShipsSunk()) {
                resolve("p1");
              } else {
                //Prompts p2 to play
                let instructions = document.getElementById("instructions");
                instructions.textContent = "Player 2's turn";
              }
            }, 750);
          }
        } else {
          if (validateAtk(tile, gameboard1) != false) {
            gameboard1.receiveAttack(tile);
            counter++;

            //Updates gameboard1 colors
            showColors(gameboard1);

            // Waits so user can see if atk hit or missed
            setTimeout(() => {
              //Hide gameboard1 colors
              removeColor();

              // Show gameboard2 colors
              showColors(gameboard2);

              //Win detection
              if (gameboard2.allShipsSunk()) {
                resolve("p2");
              } else {
                //Prompts p1 to play
                let instructions = document.getElementById("instructions");
                instructions.textContent = "Player 1's turn";
              }
            }, 750);
          }
        }
      });
    });
    //If p2 is not human
  } else {
    return new Promise((resolve) => {
      //Prompts p1 to play
      let instructions = document.getElementById("instructions");
      instructions.textContent = "Player 1's turn";

      let counter = 0;

      document.addEventListener("click", (e) => {
        let tile = e.target.id;

        if (tile.substring(0, 4) != "tile") {
          return;
        } else {
          tile = tile.substring(4);
          tile = Number(tile);
        }
        if (validateAtk(tile, gameboard2) != false) {
          gameboard2.receiveAttack(tile);
          counter++;

          //Updates gameboard2 colors
          // Waits so user can see if atk hit or missed
          showColors(gameboard2);

          setTimeout(() => {
            //Hide gameboard2 colors
            removeColor();

            //Show gameboard1 colors
            showColors(gameboard1);

            //Win detection
            if (gameboard2.allShipsSunk()) {
              resolve("p1");
            } else {
              //Prompts p2 to play
              let instructions = document.getElementById("instructions");
              instructions.textContent = "Player 2's turn";
            }
          }, 750);

          //AI turn

          //AI picks tile
          setTimeout(() => {
            tile = p2.makeTurn(gameboard1);

            console.log("bot atks " + tile);
            gameboard1.receiveAttack(tile);
            counter++;

            //Updates gameboard 1 colors
            // Waits so user can see if atk hit or missed
            showColors(gameboard1);

            setTimeout(() => {
              //Hide gameboard1 colors
              removeColor();

              //Show gameboard2 colors
              showColors(gameboard2);

              //Win detection
              if (gameboard1.allShipsSunk()) {
                resolve("p2");
              } else {
                //Prompts p1 to play
                let instructions = document.getElementById("instructions");
                instructions.textContent = "Player 1's turn";
              }
            }, 750);
          }, 750);
        }
      });
    });
  }
}

const validateAtk = (tile, gameboard) => {
  let shipArray = gameboard.playerShips;
  for (let i in shipArray) {
    for (let x in shipArray[i].hitLocations) {
      let compareTile = shipArray[i].hitLocations[x];
      if (compareTile == tile) {
        return false;
      }
    }
  }

  for (let i in gameboard.missedShots) {
    if (tile == gameboard.missedShots[i]) {
      return false;
    }
  }
};

const showColors = (gameboard) => {
  let shipArray = gameboard.playerShips;
  let hitArray = [];
  for (let i in shipArray) {
    let ship = shipArray[i];

    for (let x in ship.hitLocations) {
      hitArray.push(ship.hitLocations[x]);
    }
  }
  addHitColor(hitArray);
  addMissedColor(gameboard.missedShots);
};

export { turnControl, validateAtk };
