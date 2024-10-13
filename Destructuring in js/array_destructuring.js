// array destructuring
const colors = ['blue','red', 'yellow'];

const [firstColor, secondColor] = colors;

console.log(firstColor)  //blue
console.log(secondColor) //red




// array destructuring
const colors = ['blue','red', 'yellow'];

const [firstColor, secondColor, thirdColor,] = colors;

console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(forthColor)     //ReferenceError forthColor is not defined





// array destructuring
const colors = ['blue','red', 'yellow'];

const [firstColor, secondColor, thirdColor, forthColor] = colors;

console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
// console.log(forthColor)     //undefined
