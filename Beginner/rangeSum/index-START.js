function rangeSumForLoop([min,max]){
  //Fastest solution
  let sum =0
  for(let i=min; i<= max; i++){
    sum += i
  }
  return sum
}

function rangeSumArithmetic([min,max]){
  //Fastest solution
  return ((max - min + 1) * (min + max)) / 2
}

function rangeSumRecursion([min,max]){
  //Slowest
  if(min === max){
    return min
  }
  else{
    return rangeSum([min, max-1]) + max
  }
}
function rangeSumReduce(arr) {
  //3rd fastest solution
  let arrList = [];
  for (i = arr[0]; i <= arr[1]; i++) {
    arrList.push(i);
  }
  return arrList.reduce((acc, num) => acc + num, 0);
}

function rangeSumArithmetic2([min,max]){
  //Fastest solution
  return max*(max+1)/2 - (min-1)*(min)/2
}

rangeSumArithmetic([2,7])
console.log(rangeSumArithmetic([2,7]))