function fahrenheit(cels){
    const fahren=(cels*9/5)+32;
    return fahren;
}

console.log(fahrenheit(52));

function celsius(fahren){
    const cels =(fahren-32)*5/9;
    return cels;
}
console.log(celsius(45));
