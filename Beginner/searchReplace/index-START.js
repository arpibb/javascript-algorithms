function searchReplaceReplaceMethid(sentence, wordToChange, replacementWord){
  if(wordToChange[0] === wordToChange[0].toUpperCase()){
    replacementWord = replacementWord[0].toUpperCase() + replacementWord.slice(1);
  }
  return sentence.replace(wordToChange,replacementWord)
}

function searchReplace(sentence, word, newWord){
  let regex = new RegExp(word, 'gi');
  if(/[A-Z]/.test(word[0])){
    newWord = newWord[0].toUpperCase() + newWord.slice(1)
  }
  return sentence.replace(regex,newWord)
}

module.exports = searchReplace