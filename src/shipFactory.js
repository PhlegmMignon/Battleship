const shipFactory = (chosenLocations) => {
  let hitLocations = [];
  //   let length = i;
  //   console.log(length);
  // let name = "ship" + (length - 1);
  // console.log(name);

  let shipLocation = chosenLocations;
  //   const placeShip = (placements) => {
  //     positions = placements;
  //   };

  const hit = (checkLocation) => {
    if (shipLocations.includes(checkLocation)) {
      console.log("hit");
    }
  };

  const isSunk = () => {
    let sunken = false;
    if (shipLocation.sort() === hitLocations.sort()) {
      let sunken = true;
    }
  };
  return { shipLocation, hit, isSunk };
};

module.exports = shipFactory;
