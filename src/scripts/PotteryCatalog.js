//Here I created a variable named madePottery to equal an empty array
const madePottery = []
//Here I am creating a function toSellOrNotToSell() whose responsibilty is return a augmented array of objects with a new property of "price"
export const toSellOrNotToSell = (pottery) => {
    if(pottery.cracked === true) {
        pottery.price = 0
    }
    if(pottery.weight >= 6){
        pottery.price = 40
    }
    if(pottery.weight <= 6){
        pottery.price = 20
    }
    madePottery.push(pottery) 
        
}

export const usePottery = () => {
    return madePottery.slice()
}