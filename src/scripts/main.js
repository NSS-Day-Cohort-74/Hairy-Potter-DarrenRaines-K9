//Here I am importing the required modules in order to invoke their respective modules
import { firePottery } from "./kiln.js"
import { makePottery } from "./PotteryWheel.js"

// Make 5 pieces of pottery at the wheel
//In lines 6-19 I am creating a new piece of pottery, by creating a new variable(ex "mug, bowl, etc) and invoking our function createPottery() and passing in an argument of the desired objects properties.
//Once the argument is made I then console.log in order to view the new values of our created object 
let mug = makePottery("mug", 1, 3)
console.log(mug)

let vase = makePottery("vase", 1, 3)
console.log(vase)

let bowl = makePottery("bowl", 5, 7)
console.log(bowl)

let jar = makePottery("jar", 5, 7)
console.log(jar)

let plate = makePottery("plate", 1, 3)
console.log(plate)
// Fire each piece of pottery in the kiln
//Here I am placing each new object in the Kiln. I do that by invoking my function firePottery() and passing in an argument of my potteryObject and desired temp. This allows me to check if my boolean logic runs as intended. 
//If this function runs properly two new properties will be added to my potteryObject fired T/F and Cracked T/F  
firePottery(mug, 1900)
console.log(mug)
firePottery(vase, 1600)
console.log(vase)
firePottery(bowl, 2200)
console.log(bowl)
firePottery(jar, 1300)
console.log(jar)
firePottery(plate, 1700)
console.log(plate)
// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

