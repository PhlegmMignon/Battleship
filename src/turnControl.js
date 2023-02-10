function turnControl(tile, counter, gameboard1, gameboard2) {
  tile = tile.substring(4);

  //Player1 turn
  if (counter % 2 == 1) {
    gameboard2.receiveAttack(tile);
  }

  if (counter % 2 == 0) {
    gameboard1.receiveAttack(tile);
  }
}

function checkTileConflict(shipArray, gameboard) {
  // let cell = document.querySelectorAll("[data-hasShip='false']");
  // console.log(cell);

  for (let i in gameboard.playerShips) {
    let ship = gameboard.playerShips[i];
    let compareArray = ship.shipLocation;

    for (let i in compareArray) {
      let compareTile = compareArray[i];

      for (let i in shipArray) {
        if (shipArray[i] == compareTile) {
          return true;
        }
      }
    }
  }

  return false;
}

function shipPlacementHelper(tile, shipLength, XYtoggle) {
  console.log(tile);
  tile = tile.substring(4);
  let tileArray = [];

  //Blocks user placement on right if too long
  if (XYtoggle == "x") {
    if (tile.slice(-1) > 10 - shipLength) {
      return false;
    }

    for (let i = 0; i < shipLength; i++) {
      tile = tile + i;
      tileArray.push(tile);
    }

    return tileArray;
  }

  if (XYtoggle == "y") {
    if (tile > 10 && tile.charAt(0) > 10 - shipLength) {
      return false;
    }

    for (let i = 0; i < shipLength; i += 10) {
      tile = tile + i;
      tileArray.push(tile);
    }

    return tileArray;
  }
}

export { turnControl, checkTileConflict, shipPlacementHelper };
//Prompt user to click to place 1st ship then push ship
//Have horizontal/vertical button toggle
//
//Check user input for ship overlap, offscreen

//Repeat 2-5th ships
