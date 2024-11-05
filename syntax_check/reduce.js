let arr=[1,2,3,4,5]
/*
accumulator is prev value 
array.reduce((accumulator, currentValue, currentIndex, array) => {
    // Logic to accumulate values
    return newAccumulatorValue;
}, initialValue);
*/
function fun (prev, curr){
    return prev+curr
}
let newarr=arr.reduce(fun)

console.log(newarr)

/*
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

let fruitCount = fruits.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
}, {});

console.log(fruitCount);
// Output:
// { apple: 3, banana: 2, orange: 1 }

*/