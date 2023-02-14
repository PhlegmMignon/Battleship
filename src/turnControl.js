import { addHitColor, addMissedColor, removeColor } from "./addTileColor";

function turnControl(p1, p2, gameboard1, gameboard2) {
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
        //Prompts p2 to play
        let instructions = document.getElementById("instructions");
        instructions.textContent = "Player 2's turn";

        //Hide gameboard2 colors
        removeColor();

        console.log("p1 atks " + tile);
        gameboard2.receiveAttack(tile);
        counter++;

        //Show gameboard1 colors
        let shipArray = gameboard1.playerShips;
        let hitArray = [];
        for (let i in shipArray) {
          let ship = shipArray[i];

          for (let x in ship.hitLocations) {
            hitArray.push(ship.hitLocations[x]);
          }
        }
        console.log("hitArray " + hitArray);
        addHitColor(hitArray);
        addMissedColor(gameboard1.missedShots);

        //Win detection
        if (gameboard2.allShipsSunk()) {
          return "p1";
        }
      }
    } else {
      if (validateAtk(tile, gameboard1) != false) {
        //Prompts p1 to play
        let instructions = document.getElementById("instructions");
        instructions.textContent = "Player 1's turn";

        //Hide gameboard1 colors
        removeColor();

        console.log("p2 atks " + tile);
        gameboard1.receiveAttack(tile);
        counter++;

        // Show gameboard2 colors
        let shipArray = gameboard2.playerShips;
        let hitArray = [];
        for (let i in shipArray) {
          for (let x in shipArray[i].hitLocations) {
            hitArray.push(shipArray[i].hitLocations[x]);
          }
        }
        addHitColor(hitArray);
        addMissedColor(gameboard2.missedShots);

        //Win detection
        if (gameboard2.allShipsSunk()) {
          return "p2";
        }
      }
    }
  });
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

export { turnControl };
