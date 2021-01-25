var a = "hello";

function hello() {
    let b = "hello world";
    const c = "Hello world!!";
    if (true) {
        let d = "Hello World xddd";
        debugger;
    }
}

hello();
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