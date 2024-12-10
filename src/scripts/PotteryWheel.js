//Here I "let" the id begin with 0 in order to be able to update the id each time my function of makePottery() is invoked
let id = 0

//Here I define and export a function makePottery(), whose responsibility is to return a new potteryObject with the required properties  
export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {
    //Here I assign the potteryObject being made its properties
    const potteryObject = {
        shape: potteryShape,
        weight: potteryWeight,
        height: potteryHeight,
        id: id++
    }
    //Here I am returning the created potteryObject
    return potteryObject
}