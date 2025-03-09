// Normal Function
function sum (num1, num2) {
    return num1+num2
}
const result = sum (10,20);
console.log(result)

const sum2 = function(num1,num2) {
    return num1+num2
}
console.log(sum2(20,30));




// Arrow Function
const add = (n1,n2) => n1+n2;
console.log(add(50,100));

const add2 = (n1,n2) => {
    return n1+n2;
}
console.log(add2(100,122));