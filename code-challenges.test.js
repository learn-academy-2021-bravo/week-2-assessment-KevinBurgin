// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.
//Create a test called divisibleBy
describe("divisibleBy", () => {
//Test variables if it is divisible by 3
    test("is divisable by three", () => {
        let num1 = 15
        let num2 = 0
        let num3 = -7
//Expect variable is or is not divisible by 3
        expect(divisibleBy(num1, 3)).toEqual("15 is divisible by 3");
        expect(divisibleBy(num2, 3)).toEqual("0 is divisible by 3");
        expect(divisibleBy(num3, 3)).toEqual("-7 is not divisible by 3");
    });
});
 var num1 = 15
// Expected output: "15 is divisible by three"

 var num2 = 0
// Expected output: "0 is divisible by three"

 var num3 = -7
// Expected output: "-7 is not divisble by three"



// b) Create the function that makes the test pass.
//Create a function the decides if a variable is divisible by 3
const divisibleBy = (int) => {
//Write a conditional statement that decides if a variable is divisible 3 if yes return var is divisible by 3
    if(int % 3 === 0){
    return `${int} is divisible by 3`
//if not divisble by 3 return var is not divisible by 3
}  else if(int % 3 !== 0){
    return `${int} is not divisible by 3`
//Write a catch all for errors
}  else {
    return "error"
}
}




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
//create a test for a function that will return the first letter in each word in array capitalized
describe ("capitalized", () => {
    let randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    let randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
//test array to return capital letter
    test("return array in capitalized", () => {
//expect the first letter of each string in the array to be capitalized
        expect(capitalized(randomNoun1)).toEqual("Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew")
        expect(capitalized(randomNoun2)).toEqual("Temperature", "Database", "Chopsticks", "Mango", "Deduction")
    })
})

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]



// b) Create the function that makes the test pass.
//create a function that will return the first letter in each word in array capitalized
const capitalized = (array) => {
//intiate a variable for an array
   var newArray = []
//for the length of the variable
   for(var i = 0; i < array.length; i++){
//locate index 0 and uppercase then push to new array
       newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
   }
//join and return new array
   return newArray.join(' ')
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
//Create a test that will check a function that logs the index of the first vowel
describe("firstVowelIndex", () => {
//test string to return first vowel in string
    test("return and logs first vowel index", () =>{
//expect a return of first vowel in string
        expect(firstVowelIndex(vowelTester1)).toEqual(1)
        expect(firstVowelIndex(vowelTester2)).toEqual(0)
        expect(firstVowelIndex(vowelTester3)).toEqual(2)
    })
})

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2





// b) Create the function that makes the test pass
//Create a function that takes a string and returns the first vowel
const firstVowelIndex = (string) => {
//initiate a variable that equals vowels both lowercase and uppercase
    let vowelList = 'aeiouAEIOU'
//initate another variable set to 0
    let vowelIndex = 0
//for the length of the string
    for(var i= 0; i < string.length ; i++)
    {
//write a conditional that finds the index of the first vowel
        if (vowelList.indexOf(string[i]) !== -1)
    vowelIndex += 1
    }
//return the vowelindex
return vowelIndex
}
