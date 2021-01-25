const helloWorld = () => {
    const hello = 'Hello world';
    console.log(hello);
}
helloWorld();//Hello world
console.log(hello);//hello is not defined


var scope = 'i am global';

const functionScope = () => {
    var scope = 'I am just a local';
    const func = () => {
        return scope;
    }
    console.log(func());//I am just a local
}
functionScope();
console.log(scope);//i am global