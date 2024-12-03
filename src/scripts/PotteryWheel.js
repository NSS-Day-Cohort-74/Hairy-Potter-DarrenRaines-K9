let id = 0

export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {
    const potteryObject = {
        shape: potteryShape,
        weight: potteryWeight,
        height: potteryHeight,
        id: id++
    }
    return potteryObject
}