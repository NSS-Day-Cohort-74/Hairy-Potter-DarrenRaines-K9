//Here I created a variable named madePottery to equal an empty array
const forSalePottery = []
//Here I am creating a function toSellOrNotToSell() whose responsibilty is return a augmented array of objects with a new property of "price"
export const toSellOrNotToSell = (pottery) => {
//Here i set the conditons for augmenting the array
    if(pottery.cracked === true) {//cracked property of "pottery" (boolean) only if its equal to true 
        pottery.price = 0//new property is being added of price = 0 //i do not push this object to the new array due to its price being 0 per requirements
    }
    else if(pottery.weight >= 6 && pottery.cracked === false ){//here i implement a double ampersand operator  in for potter.cracked === false to only run if pottery.weight ran successfully 
        pottery.price = 40//here i assign the new price property based off of the result of my boolean logic
        forSalePottery.push(pottery)//here i push my augmented object into our new array stored in variable forSalePottery 
    }
    else if (pottery.weight <= 6 && pottery.cracked === false) {
         pottery.price = 20
        forSalePottery.push(pottery)
    }
     return pottery//here i return value of each augmented object 
        
}

export const usePottery = () => {//here i define and export a new function in order to use the new array of augmented objects 
    const copiedArray = forSalePottery.slice()//here we apply the slice method in order to copy augmented array of objects 
    return copiedArray//here we return that copied array of objects 
    }