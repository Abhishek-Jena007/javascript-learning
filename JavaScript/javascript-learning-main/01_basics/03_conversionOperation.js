let number = "44abc"

// console.log(typeof number)
// console.log(typeof (number))

// let changeToNumber = Number(number)
// console.log(changeToNumber)

//if we will try to covert a string to number like "33" it will be converted easily,but if there is something like "abhi" or "33abc" then it will give the output NaN, which means not a number.

let isLoggedIn = undefined
let changeToBoolean = Boolean (isLoggedIn)
console.log(isLoggedIn)
console.log(changeToBoolean)

//when we convert different data types into boolean 
//0 => false
// any number other than 0 gives true
// any non empty string gives true
// null, undefined and "" gives false

let isLoggedIn1 = "Abhisek"
let changeToBoolean1 = Boolean (isLoggedIn1)
console.log(isLoggedIn1)
console.log(changeToBoolean1)
// when we convert a string to boolean, it will always give true if the string is not empty
// when we convert a number to boolean, it will give false if the number is 0, otherwise it will give true

console.log(Boolean(0)) // false
console.log(1 + 2 + "3") // 33
console.log(1 + "2" + 3) // 123
console.log("1" + 2 + 3) // 123
console.log(1 + 2 + 3 + "4") // 64
console.log(1 + 2 + "3" + 4) // 334
console.log("1" + 2 + 3 + 4) // 1234
console.log(1 + 2 + "3" + 4 + 5) // 3345
// whenever the string comes, thereafter all are treated as sting concatination, before that its number addition

//console.log(+true) //it convert the true to 1 but can't do the increment
//console.log(+"") //similarly, gives 0