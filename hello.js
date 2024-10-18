console.log("Welcome to ZeroOne");
const add = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};

const mul = (a, b) => {
    return a * b;
};

const div = (a, b) => {
    return a / b;
};


console.log("Addition:", add(5, 3)); 
console.log("Subtraction:", sub(5, 3)); 
console.log("Multiplication:", mul(5, 3));
console.log("Division:", div(5, 3)); 



let arr=[1,2,3,4,5];
let newarr=arr.map((x)==>x*x);
console.log(newarr);
