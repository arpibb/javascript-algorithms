/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


function falsyBouncerWithMap(array) {
    let result= []
    array.map(item => item ? result.push(item) : '')
    return result
}

function falsyBouncerWithForLoop(array){
    let result =[]
    for (let item of array){
        if(item){
            result.push(item)
        }
    }
    return result
}

function falsyBouncerWithFilter(array){
    // Scored better on performance test
    return array.filter(item => Boolean(item))
}

module.exports = falsyBouncer