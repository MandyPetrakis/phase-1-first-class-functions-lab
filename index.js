const returnFirstTwoDrivers = array => { 
    let firstTwo = array.slice(0, 2);
    return firstTwo 
}

const returnLastTwoDrivers = array => {
    let lastTwo = array.slice(array.length - 2)
    return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = int => {
    return function(fare) {
        return fare * int
}
}

const fareDoubler = fare => {
    let doubled = createFareMultiplier(2)(fare);
    return doubled
}

const fareTripler = fare => {
    let trippled = createFareMultiplier(3)(fare)
    return trippled
}

const selectDifferentDrivers = (array, fun) => {
 let selected = fun(array)
 return selected
}
