/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
  //Scored 2nd best on performance test
  let textArray = text.toLowerCase().split(" ");
  let capsArray = [];

  textArray.forEach(word => {
    return capsArray.push(word[0].toUpperCase() + word.slice(1))
  });

  return capsArray.join(' ');
};

function capSentenceMapSlice(text){
  //Scored best on performance test
  let textArray = text.toLowerCase().split(" ");
  let capsArray = textArray.map(word =>{
    return word[0].toUpperCase() + word.slice(1)
  });
  return capsArray.join(" ")
};

function capSentenceReplace(text){
  //Scored 3rd best on performance test
  let textArray = text.toLowerCase().split(" ");
  let capsArray = textArray.map(word =>{
    return word.replace(word[0],word[0].toUpperCase())
  });
  return capsArray.join(" ")
}



module.exports = capSentence