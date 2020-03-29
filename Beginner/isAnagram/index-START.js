/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

function sanitizeString(str){
    return str.toLowerCase().replace(/[^a-z\d]/g,'').split('').sort().join('')
};

function createCharMap(str){
    let charMap = {};

    for(let char of str){
        if(charMap.hasOwnProperty(char)){
            charMap[char] += 1;
        }
        else {
            charMap[char] = 1;
        }
    }

    return charMap
}

function isAnagramDirect(stringA, stringB) {
    // Slower then the character map version by cca 50%
    return sanitizeString(stringA) === sanitizeString(stringB)
}

function isAnagram(stringA, stringB) {
    // much faster solution than the direct solution
    if(stringB.length===stringA.length){
        let charMapA = createCharMap(stringA);
        let charMapB = createCharMap(stringB);
        for(let char in charMapA){
            if(charMapA[char] !== charMapB[char]){
                return false
            }
        }
        return true
    }
    else{
        return false
    }
}


module.exports = isAnagram