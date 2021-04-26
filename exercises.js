// Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
x = "John"
y = "Doe"
console.log(`x <> y`)

// Create an object with properties such name, surname, email
let object = {
    name: "Emilian",
    surname: "Kasemi",
    email: "emiliankasemi@gmail.com"
}

//  Delete Email from the previously created object

delete object.email
console.log(object)

// Create an array with 10 strings in it

let array = ["Mercedes", "Audi", "Volswagen", "BMW", "Toyota", "Rover", "Mazda", "Fiat", "Ferrari", "Renault"]

// Print in the console every string in the previous array

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// Create an array with 100 random numbers in it

let randomNumArr = [];
for (let i = 0, n = 100; i < n; i++) {
    randomNumArr.push(Math.round(Math.random() * n))
}
console.log(randomNumArr);

// Wrote a function to get the MAX and the MIN from the previously created array

// max
function getMaxOfArray(randomNumArr) {
    return Math.max.apply(null, randomNumArr);
}

console.log(randomNumArr)

// min
function getMinOfArray(randomNumArr) {
    return Math.min.apply(null, randomNumArr);
}

console.log(randomNumArr)

// Create an array of arrays, in which every array has 10 random numbers

let firstArray = [];
for (let i = 0; i < 4; i++) {
    let secondArray = [];
    for (let randomNum = 0; randomNum < 10; randomNum++)
        secondArray.push(Math.floor(Math.random() * 10));
    firstArray.push(secondArray);
}
console.log(firstArray)

// Create a function that gets 2 arrays and returns the longest one
var longest = arr.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    }
);

// Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

// returns minimum and maximum values of an array
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)]
}

// sum numbers in a range
function sumRange(min, max) {
    let sum = 0

    for (let i = min; i <= max; i++) {
        sum += i
    }

    return sum
}

function sumAll(arr) {
    const [min, max] = minMax(arr)
    const sum = sumRange(min, max)

    return sum
}

// alternative one line solution
const sumAll = arr => sumRange(...minMax(arr))

sumAll([1, 4])


