function component() {
  let element = document.createElement("div");
  let ships = [];
  let shipLengths = [2, 3, 3, 4, 5];

  for (let i = 0; i < 5; i++) {
    ships[i] = shipFactory(shipLengths[i]);
  }

  return element;
}

const shipFactory = (i) => {
  let hitLocations = [];
  let length = i;
  // let name = "ship" + (length - 1);
  // console.log(name);

  const placeShip = (placements) => {
    let positions = placements;
  };

  const hit = (checkLocation) => {
    if (position.includes(checkLocation)) {
      console.log("hit");
    }
  };

  const isSunk = () => {
    let sunken = false;
    if (positions.sort() === hitLocations.sort()) {
      let sunken = true;
    }
  };
  return { placeShip, hit, isSunk };
};

document.body.appendChild(component());

module.exports = ships;
