function makeGameboard() {
  let grid = document.createElement("div");

  for (let i = 0; i < 99; i++) {
    let tile = document.createElement("div");
    tile.id = "tile" + i;
    tile.style.width = "15px";
    tile.style.height = "15px";
    // tile.addEventListener()

    grid.appendChild(tile);
  }

  grid.id = "grid";
  grid.style.width = "150px";
  grid.style.height = "150px";
}

export default makeGameboard;
