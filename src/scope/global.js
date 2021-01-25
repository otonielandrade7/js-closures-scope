var hello = 'Hello';
var hello = 'Hello +'; //returns Hello +
let world = "Hello World";
let world = "Hello World +"; //ERROR
const helloWorld = 'Hello World!'
const helloWorld = 'Hello World! +'//ERROR

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
anotherFunction();

const helloWorld =()=>{
    globarVar = 'Im global';
}
helloWorld();
console.log(globalVar);