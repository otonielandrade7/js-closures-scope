const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}
fruits();
console.log(fruit);

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    let y = 2;
    console.log(x);
    console.log(y);//SyntaxError: Identifier 'y' has already been declared
    //Ya no usemos var para declarar nuestras variables
}
anotherFunction();