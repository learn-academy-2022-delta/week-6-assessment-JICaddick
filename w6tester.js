
// const cubeAndSum1 = [2, 3, 4]
// // Expected output: 99
// const cubeAndSum2 = [0, 5, 10]
// // Expected output: 1125

// const numbersCoobed = (array) => {
//     let newArr = array.map(number => {
//        return number **3 
//   })
//    return newArr.reduce((a,b) => a + b)
// }

// console.log(numbersCoobed(cubeAndSum1))
// console.log(numbersCoobed(cubeAndSum2))

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


const dividedByThreeRemainder = (array) => {
    let newArr = array.filter(num => typeof num ==='number')
      return newArr.map(num => num % 3)

}

console.log(dividedByThreeRemainder(hodgepodge1))
console.log(dividedByThreeRemainder(hodgepodge2))






// const people = [
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }
// ]

// const capitalizeFirstLetter = (array) => {
//     let newArr = []
//     array.forEach(object => {
//             let name = object.name.split(" ").map(strName => {
//                 return `${strName[0].toUpperCase()}${strName.slice(1)}`
//             }).join(" ")
//             newArr.push(`${name} is ${object.occupation}.`)
//         })
//         return newArr
// }

// console.log(capitalizeFirstLetter(people))

// [
//   'Fundefined Pundefined is a hitchhiker.',
//   'Zundefined Bundefined is president of the galaxy.',
//   'Aundefined Dundefined is a radio employee.'
// ]
