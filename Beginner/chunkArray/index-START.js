/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array, size) {
    //Fastest solution
    let resultArr = []
    for(let i = 0; i < array.length; i += size){
        resultArr.push(array.slice(i,i+size))
    }

    return resultArr
}

function chunkArraySplice(array, size) {
    //2nd slowest
    let result = []
    let arrayCopy = [...array]
    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, size))
    }
    return result
}

function chunkArrayRecursion(array,size){
    //3rd slowest
    if(array.length <=size){
        return [array]
    }
    else {
        return [array.slice(0,size),...chunkArray(array.slice(size),size)]
    }
}


module.exports = chunkArray

chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)