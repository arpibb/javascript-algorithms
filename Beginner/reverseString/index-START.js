/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseStringMethods(text) {
    // 1. Solution with built-in methods ES5 and ES6 53% slower then the first

    // return text.split("").reverse().join(""); ES5

    return [...text].reverse().join("");
}

function reverseStringForLoop(text) {
    // 2. Solution with for loop Fastest solution according to JSPerf
    let resultText = ""
    for( let i = text.length-1; i >=0; i--){
        resultText += text[i]
    }
    return resultText
}
function reverseStringRecursion(text){
     // 3. Solution with recursion 43% slower then the fastest
    if (text===""){
        return ""
    }
    else {
        return reverseStringRecursion(text.substring(1)) + text[0]
    }
}

function reverseStringReduce(text){
     // 4. Solution with reduce 9% slower then the 1.
     return [...text].reduce((acc,char) => char + acc, '')
}



module.exports = reverseStringForLoop