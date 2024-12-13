import { usePottery } from "./PotteryCatalog.js"


export const potteryListHTML = () => {//here i define and export a new var potteryListHTML 
    let potteryHTML = ""//here i let a new variable potteryHTML = an empty string 
    for (const piece of usePottery()) {//here i iterate through our for loop "piece" by piece of our pottery that was made in our function usePottery()that contains our copied(.slice) array
        potteryHTML += `<section class="pottery" id="pottery--1"> 
     <h2 class="pottery__shape">${piece.shape}</h2>
     <div class="pottery__properties">This Item weighs ${piece.weight}grams and is ${piece.height}cm in size </div>
     <div class="pottery__price"> This item is $${piece.price}.00</div>
   </section>`
//here i add to our empty string potteryHTML and use string interpolation to inject that data into our document object model, while simultaneously creatng a new piece of our index.html dynamically
}

    return potteryHTML//here i return the new value of our potteryHTML
}