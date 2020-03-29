/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    let charMap = {}
    let max = 0;
    let mostFreqChar = '';
    for (let char of text){
        if(charMap.hasOwnProperty(char)){
            charMap[char] += 1;
        }
        else {
            charMap[char] = 1;
        }
    }
    for( let char in charMap){
        if(charMap[char] > max){
            mostFreqChar = char;
            max = charMap[char]
        }
    }

    return  mostFreqChar
}
function maxRecurringCharObjectMethods(text){
    //This solution is 33% slower than the the previous one with the for-loops
    let charMap = {}
    let max = 0;
    let mostFreqChar = '';
    for (let char of text){
        if(charMap.hasOwnProperty(char)){
            charMap[char] += 1;
        }
        else {
            charMap[char] = 1;
        }
    }
    let charArray = Object.keys(charMap);
    let valuesArray = Object.values(charMap);
    let maxCharValue = Math.max(...valuesArray);

    return charArray[valuesArray.indexOf(maxCharValue)];
}



module.exports = maxRecurringChar;