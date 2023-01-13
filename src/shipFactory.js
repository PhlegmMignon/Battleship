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
    if (shipLocation.includes(checkLocation)) {
      // console.log("hit");
      hitLocations.push(checkLocation);
    }
  };

  const isSunk = () => {
    let sunken = false;

    shipLocation.sort();
    hitLocations.sort();

    for (let i = 0; i < shipLocation.length; i++) {
      if (shipLocation[i] != hitLocations[i]) {
        return sunken;
      }
    }
    return (sunken = true);
  };
  return { shipLocation, hitLocations, hit, isSunk };
};

module.exports = shipFactory;
