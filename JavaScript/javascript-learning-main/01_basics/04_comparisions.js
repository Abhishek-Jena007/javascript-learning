console.log("2" >= 2); // true
console.log("2" > 2); // false because "2" is converted to number 2

console.log(2 >= "2"); // true because "2" is converted to number 2
console.log(2 > "2"); // false because "2" is converted to number 2
console.log("2" == 2); // true because "2" is converted to number 2
console.log("2" === 2); // false because "2" is string and 2 is number, strict equality operator checks both value and type

console.log("abhisek" == 2); // false because "abhisek" is a string and 2 is a number
console.log("2" == "2"); // true because both are strings and have same value
console.log(null == undefined); // true because both are considered equal in loose equality
console.log(null === undefined); // false because strict equality checks type
console.log(null == 0); // false because null is not equal to 0
console.log(null === 0); // false because null is not equal to 0 in strict equality
console.log(undefined == 0); // false because undefined is not equal to 0
console.log(undefined === 0, "\n"); // false because undefined is not equal to 0 in strict equality
console.log("\n");

console.log(null >= 0); // true because null is considered as 0 in comparisons
console.log(null > 0); // false because null is not greater than 0
console.log(null === 0); // false because strict equality checks both value and type, and null is not equal to 0
console.log(undefined >= 0); // false because undefined is not considered as a number in comparisons
console.log(undefined > 0); // false because undefined is not considered as a number in comparisons