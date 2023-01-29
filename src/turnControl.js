function turnControl(tile, counter, gameboard1, gameboard2) {
  //Player1 turn
  if (counter % 2 == 1) {
    console.log("player 1 " + tile);
  }

  if (counter % 2 == 0) {
    console.log("player 2 " + tile);
  }
}

export default turnControl;
