/* const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
};
moneyBox(2);
moneyBox(4); */

const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`Money Box: ${saveCoins}`);
  };
  return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(2);
myMoneyBox(54);
myMoneyBox(3);
