const numbers=[5,6,11,12,98, 5];
const find=5;
function duplicate(array,findNumber){
    let count=0;
for(const num of array){
   if(num === findNumber){
     count ++;
   }
}
return count
}
const times=duplicate(numbers,find);
console.log(times);

const numb=[5,6,11,12,98, 5];
const Find=25;
function duplicate2(array,findNumber){   let count2=0
    for(const num of array){
      if(num===findNumber){
        count2++
      }          
    }
    return count2;
}
const times2=duplicate2(numb,Find);
console.log(times2);