// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("capitalizer", () => {
    it("a function that takes in a array of objects and returns a sentence with each person's name capitalized.", () => {
    expect(capitalizer(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
    })
})

// b) Create the function that makes the test pass.

// Pseudo
// Create a function, capitalizer and give it params (array)
// Write a new variable and set it to an empty array
// use forEach on the part o the object you want to change (objItem)
// Write a new variable (name) and then use .split, .map before returning the string name[0].toUpperCase() + string.slice(1)
// Rejoin the previously split array.
// finally push the interpolated result before returning the newArr

const capitalizer = (array) => {
  let newArr = []
  array.forEach(objItem => {
    let name = objItem.name.split(" ").map(strName => {
      return `${strName[0].toUpperCase()}${strName.slice(1)}`
        }).join(" ")
            newArr.push(`${name} is ${objItem.occupation}.`)
        })
      return newArr
}
// Best failed return ever ...
// [
//   'Fundefined Pundefined is a hitchhiker.',
//   'Zundefined Bundefined is president of the galaxy.',
//   'Aundefined Dundefined is a radio employee.'
// ]

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("dividedByThreeRemainder", () => {
    it("a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
      expect(dividedByThreeRemainder(hodgepodge1)).toEqual([2, 0, -1, 0])
      expect(dividedByThreeRemainder(hodgepodge2)).toEqual([ 2, 1, -1 ])
    })
})
// b) Create the function that makes the test pass.
// Pseudo
// Write a function dividedByThreeRemainder, set results to a new array and use .filter to remove unwanted data. You'll use typeof to identify our desired data- numbers.
// Then return the new array using .map on it (no need to use 'if' because it's built in) return (num => num % 3)


const dividedByThreeRemainder = (array) => {
    let newArr = array.filter(num => typeof num ==='number')
      return newArr.map(num => num % 3)

}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("numbersCoobed", () => {
    it("a function that takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
      expect(numbersCoobed(cubeAndSum1)).toEqual(99)
      expect(numbersCoobed(cubeAndSum2)).toEqual(1125)
    })
})

// b) Create the function that makes the test pass.
// Pseudo
// Write a function, numbersCoobed and give it params (array)
// Write a new variable newArr then use array.map with param (number)
// Return (number) ** 3
// Return the new array using .reduce with a,b params & functionality

const numbersCoobed = (array) => {
    let newArr = array.map(number => {
       return number **3 
  })
   return newArr.reduce((a,b) => a + b)
}
