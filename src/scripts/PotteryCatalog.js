//Here I created a variable named madePottery to equal an empty array
const forSalePottery = []
//Here I am creating a function toSellOrNotToSell() whose responsibilty is return a augmented array of objects with a new property of "price"
export const toSellOrNotToSell = (pottery) => {
    
    if(pottery.cracked === true) {
        pottery.price = 0
    }
    else if(pottery.weight >= 6 && pottery.cracked === false ){
        pottery.price = 40
        forSalePottery.push(pottery)
    }
    else if (pottery.weight <= 6 && pottery.cracked === false) {
         pottery.price = 20
        forSalePottery.push(pottery)
    }
     return pottery
        
}

export const usePottery = () => {
    const copiedArray = forSalePottery.slice()
    return copiedArray
    }