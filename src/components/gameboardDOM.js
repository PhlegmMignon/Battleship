function makeGameboardDOM() {
  let grid = document.createElement("div");

  for (let i = 0; i < 100; i++) {
    let tile = document.createElement("div");
    tile.id = "tile" + i;
    tile.classList.add("tile");
    tile.style.width = "50px";
    tile.style.height = "50px";
    tile.dataset.hasShip = false;

    grid.appendChild(tile);
  }

  grid.id = "grid";
  grid.style.display = "grid";
  grid.style.justifyContent = "center";
  grid.style.alignContent = "center";
  grid.style.width = "625px";
  grid.style.height = "625px";
  grid.style.backgroundColor = "#D3D3D3";

  return grid;
}

export default makeGameboardDOM;
