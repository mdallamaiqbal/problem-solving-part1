/*
*array has some duplicate elements

*/

const biryanikhor=['abul','babul','cabul','abul','babul','dabul','kabul','cabul']
const numbers=[1,5,61,8,5,7,61,90,7];

function noDuplicate(array){
    let unique=[];
   for(const item of array){
    if(unique.includes(item)===false){
        unique.push(item)
    }
   }
   return unique
}
const uniqueArray=noDuplicate(biryanikhor);
console.log(uniqueArray);

function noDuplicate2(array){
    let nums=[]
 for(const number of array){
    if(nums.includes(number) === false){
        nums.push(number)
    }
 }
 return nums;
}
const uniqueArray2=noDuplicate2(numbers);
console.log(uniqueArray2);
