const name = "Abhi"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Abhi-ai-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//returns the character at the specified index
console.log(gameName.indexOf('i'));//returns the index of the first occurrence of the specified character
console.log(gameName.lastIndexOf('a'));//returns the index of the last occurrence of the specified character
console.log(gameName.startsWith('Abhi'));//returns true if the string starts with the specified character

const newString = gameName.substring(0, 4)//returns the substring from the specified start index to the end index (not inclusive)
console.log(newString);

const anotherString = gameName.slice(-8, 4)//returns the substring from the specified start index to the end index (not inclusive), can also take negative indices
// if the start index is greater than the end index, it will return an empty string
// if the end index is greater than the length of the string, it will return the substring from the start index to the end of the string
// if the start index is negative, it will count from the end of the string
// if the end index is negative, it will count from the end of the string
console.log(anotherString);

const newStringOne = "   Abhi    "
console.log(newStringOne);
console.log(newStringOne.trim());//removes the whitespace from both ends of the string
// console.log(newStringOne.trimStart());//removes the whitespace from the start of the string
// console.log(newStringOne.trimEnd());//removes the whitespace from the end of the string
// console.log(newStringOne.trimLeft());//removes the whitespace from the start of the string
// console.log(newStringOne.trimRight());//removes the whitespace from the end of the string

const url = "https://Abhi.com/Abhi%20jena"

console.log(url.replace('%20', '-'))//replaces the first occurrence of the specified character with the specified character
console.log(url.replaceAll('%20', '-'))//replaces all occurrences of the specified character with the specified character

console.log(url.includes('sundar'))//returns true if the string contains the specified character

console.log(gameName.split('-'));//splits the string into an array of substrings using the specified character as the separator
