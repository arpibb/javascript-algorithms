/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounterForLoop(text) {
    // 52% slower than the RegEx method
    const vowels = "aeiou";
    text = text.toLowerCase();
    let countVow = 0;
    for (let char of text){
        if (vowels.includes(char)){
            countVow += 1;
        }
    }
    return countVow
}

function vowelsCounter(text){
    // This solution is much faster accourding to JSPerf
    let matches = text.match(/[aeiou]/gi)
    if(matches){
        return matches.length
    }
    else {
        return 0
    }
}



module.exports = vowelsCounterForLoop;
module.exports = vowelsCounter;
