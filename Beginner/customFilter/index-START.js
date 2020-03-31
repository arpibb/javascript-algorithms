function customFilterWithForLoop(arr,func){
  //Very close to being the fastest
  for(let item of arr){
    if(func(item)){
      return item
    }
  }
  return undefined
}

function customFilterWithFilter(arr,func){
  //significantly slower
  let newArr = arr.filter(func)
  return newArr[0] ? newArr[0] : undefined
}

function customFilterWithFind(arr,func){
  //Fastest solution
  return arr.find(func)
}