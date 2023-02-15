const playerFactory = (isHuman) => {
  const makeTurn = () => {
    if (isHuman != true) {
      let tile = getRandomInt();
      console.log(tile);
      return tile;
    }

    // return tile;
  };

  const getRandomInt = () => {
    return Math.floor(Math.random() * 100);
  };

  return { makeTurn, getRandomInt };
};

export default playerFactory;
