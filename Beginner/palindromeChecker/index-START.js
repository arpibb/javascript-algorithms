/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeCheckerMethods(text) {
    // 3rd fastest
    text = text.toLowerCase();

    let reversedText = text.split("").reverse().join("");

    return text === reversedText
}

function palindromeChecker(text){
    // The 2nd fastest alogrithm out of these
    const textArray= text.toLowerCase().split('');
    let result = textArray.every((letter, idx)=> {
        return letter === textArray[textArray.length-1-idx]
    })

    return result
}

function palindromeChecker(text) {
    // The fastest alogrithm out of these according to JSPerf
    for(let i = 0; i<text.length/2; i++){
        if (text[i] !== text[text.length-1-i]){
            return false
        }
    }
    return true
}



module.exports = palindromeChecker;