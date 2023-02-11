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

export { turnControl };
//Prompt user to click to place 1st ship then push ship
//Have horizontal/vertical button toggle
//
//Check user input for ship overlap, offscreen

//Repeat 2-5th ships
