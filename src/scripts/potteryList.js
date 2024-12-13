import { usePottery } from "./PotteryCatalog.js"


export const potteryListHTML = () => {
    let potteryHTML = ""
    for (const piece of usePottery()) {
        potteryHTML += `<section class="pottery" id="pottery--1">
     <h2 class="pottery__shape">${piece.shape}</h2>
     <div class="pottery__properties">This Item weighs ${piece.weight}lbs. and is ${piece.height}in. in size </div>
     <div class="pottery__price"> This item is $${piece.price}.00</div>
   </section>`
    }
    return potteryHTML
}