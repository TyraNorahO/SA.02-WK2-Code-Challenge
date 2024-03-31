 //witing a function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original 
 //the random numbers input
 let randomnumbers =[1,2,3,4,5,,6,7,8,9,10];
 //2,3,5,7
 let randomNumbers = [1, 89, 97, 2, 3, 4, 5, 6, 7, 8, 9, 10, 73, 97];
//function declaration
function generatePrimeNumbers(array){
  let result = [];
    for( value of array){
      if((value % 2) > 0 && (value % 3) > 0  && value !== 1 || value === 3 || value === 2)
      {  result.push(value) }
    }
    return result;
}
//generating of the array
console.log(function("generatePrimeNumbers","array"))


