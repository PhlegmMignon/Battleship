const addSetupColor = (shipArray) => {
  for (let i in shipArray) {
    let tile = "tile" + shipArray[i];
    let coloredTile = document.getElementById(tile);
    coloredTile.style.backgroundColor = "red";
  }
};

const removeColor = () => {
  let tiles = document.getElementsByClassName("tile");
  let tileArray = Array.prototype.slice.call(tiles);
  for (let i in tileArray) {
    let tile = tileArray[i];
    tile.style.backgroundColor = "#f4f4f4";
  }

  return;
};

const addMissedColor = (tileArray) => {
  // console.log("misscolor " + tileArray);
  for (let i in tileArray) {
    let tile = "tile" + tileArray[i];
    tile = document.getElementById(tile);
    tile.style.backgroundColor = "#9DD9F3";
  }
};

const addHitColor = (tileArray) => {
  // console.log("hitcolor " + tileArray);
  for (let i in tileArray) {
    let tile = tileArray[i];
    tile = "tile" + tile;
    tile = document.getElementById(tile);
    tile.style.backgroundColor = "red";
  }
};

export { removeColor, addSetupColor, addMissedColor, addHitColor };
