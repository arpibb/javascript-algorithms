/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/



function whereIBelongForLoop1(arr, num) {
   //cca 95% slower then the first
   arr.sort((a,b)=> a-b)

   for(let i = 0; i < arr.length; i++){
      if(arr[i] >= num){
         return i
      }
   }
   return arr.length
}
function whereIBelongForLoop2(arr, num) {
   //Fastest solution out of the 4
   var counter = 0
   for (i = 0; i < arr.length; i++) {
       if (num > arr[i]) {
           counter++;
       }
   } 
   return counter
}

function whereIBelongWhile(arr, num) {
   //cca 95% slower then the first
   arr.sort((a,b)=> a-b)
   let counter = 0
   while(num > arr[counter]){
      counter++
   }
   return counter
}

function whereIBelong(arr,num){
   //cca 96% slower then the first, slowest
   arr.push(num)
   arr.sort((a,b)=> a-b)
   return arr.indexOf(num)
}



module.exports = whereIBelong