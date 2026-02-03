/*
*function takes an array as parameter;
*give me the average of the even numbers int the array;
*/

function evenAverage(numbers){
    const evens =[];
   for(const number of numbers){
     if(number % 2 === 0){
       evens.push(number)
     }    
   }
   let sum =0;
   for(const number of evens){
      sum= sum + number;
   }
  const count=evens.length;
  const avg = sum / count;
  console.log(sum,count);
  
  return avg;
}

const numbers=[12,20,21,33,50,22,75];
const avg =evenAverage(numbers);
console.log('average of the even is:',avg);
