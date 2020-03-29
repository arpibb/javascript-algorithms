/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    // Again For-loop case is the fastest according to JSPerf
    const textArray = text.split(" ");
    let maxLength = textArray[0].length;
    let longestWord = textArray[0];

    for(let i = 1; i< textArray.length; i++){
        if (maxLength < textArray[i].length){
            maxLength = textArray[i].length;
            longestWord = textArray[i];
        }
    }
    return longestWord
}

function longestWordReduce(text) {
    // With reduce method very similiar only 4% slower
    let result = text.split(" ").reduce((maxLengthWord,currentWord) => {
        if (currentWord.length>maxLengthWord.length){
            return currentWord
        }
        else{
            return maxLengthWord
        }
    },'')

    return result
}

function longestWordSort(text) {
    // Slowest  73% slower then the for-loop solution
    let sortedArray = text.split(" ").sort((wordA,wordB)=> wordB.length-wordA.length)

    return sortedArray[0]
}




module.exports = longestWord