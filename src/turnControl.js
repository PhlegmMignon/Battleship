function turnControl(p1, p2, gameboard1, gameboard2) {
  let counter = 0;
  document.addEventListener("click", (e) => {
    let tile = e.target.id;
    tile = tile.substring(4);
    tile = Number(tile);

    //Player1 turn
    if (counter % 2 == 0) {
      console.log("p1 atks " + tile);
      gameboard2.receiveAttack(tile);
      counter++;

      if (gameboard2.allShipsSunk()) {
        return "p1";
      }
    } else {
      console.log("p2 atks " + tile);
      gameboard1.receiveAttack(tile);
      counter++;

      if (gameboard2.allShipsSunk()) {
        return "p2";
      }
    }
  });
}

export { turnControl };
//Prompt user to click to place 1st ship then push ship
//Have horizontal/vertical button toggle
//
//Check user input for ship overlap, offscreen

//Repeat 2-5th ships
