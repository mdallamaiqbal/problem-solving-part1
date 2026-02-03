//12 inch 1 feet

function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}
const manikHeight =inchToFeet(75);
console.log(manikHeight);
function inchToFeet2(inch){
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction);
    const incRemaning = inch % 12;
    const result = feetNumber+ ' ft '+incRemaning+' inch';
    return result;
}
const tufanHeight =inchToFeet2(67);
console.log(tufanHeight);
function inchToFeet3(inch){
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction);
    const incRemaning = inch % 12;
    const totalInch = feetNumber *12 + incRemaning;
    return totalInch
}
const tofanHeight =inchToFeet3(67);
console.log('total inch',tofanHeight);

function milesToKilometer(mile){
    const kilom=mile*1.609344;
    return kilom.toFixed(2);
}
console.log(milesToKilometer(12));
