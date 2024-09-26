// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
    const headquaterBlock = 42
    const numberOfBlocks = pickUpLocation - headquaterBlock
    return Math.abs(numberOfBlocks)
}
function distanceFromHqInFeet(pickUpLocation){
    const distanceInFeet = distanceFromHqInBlocks(pickUpLocation) * 264
    return distanceInFeet
}
function distanceTravelledInFeet(start, destination){
    const feetTravelled = Math.abs(destination - start);
    return feetTravelled * 264
}
function calculatesFarePrice(start, destination){
    const distancePrice = distanceTravelledInFeet(start, destination)
    if(distancePrice <= 400){
        return 0
    }    
    else if (distancePrice > 400 && distancePrice <= 2000) {
        return (distancePrice - 400) * 0.02;
    }
    else if (distancePrice > 2000 && distancePrice <= 2500) {
        return 25
    }
    else if (distancePrice > 25) {
        return 'cannot travel that far'
    }
}
