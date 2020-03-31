function integerReversal(num){
  function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
  }
  let reversedString = reverseString(num.toString())
  let reversedNumber = parseInt(reversedString)

  return reversedNumber * Math.sign(num)
}

integerReversal(-120)