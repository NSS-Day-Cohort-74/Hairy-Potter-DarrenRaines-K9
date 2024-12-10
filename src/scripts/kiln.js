//-define and export a function called firePottery()

//That is being done here by utilizing another boolean statement.
//Here I define and export a function firePottery(), whose responsibility is to add two new properties to our potteryObjects in main.js.
export const firePottery = (madePottery, potteryTemp) => { //firePottery is the oven the pottery is going into to be fired (it needs requires a piece of pottery and a temp)
    //Initially I set the madePottery paramater to fired  utilizing dot notation and setting it equal to true
     madePottery.fired = true
     //Here my boolean logic is being used if the temp is greater than or equal to 2200 our cracked property will equate to *true because it meets the requirements of the cracked value
    if (potteryTemp >= 2200) {
        madePottery.cracked = true
    }
    //Here my boolean logic is being used if the temp is less than or equal to 2200 our cracked property will equate to *false because it doesnt meet the requirements of the cracked value
    else {
        madePottery.cracked = false
    }
    //Here I return the madePottery with the new properties of fired and cracked utilizing dot notation
    return madePottery
}
