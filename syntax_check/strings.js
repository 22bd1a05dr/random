const str1="Sathvik"
//length of the string 
console.log(str1.length)
//acessing 
console.log(str1[0])
console.log(str1.charAt(0));
console.log(str1.at(-1))//allowa negative indexing 
//returns asci
console.log(str1.charCodeAt(0));

//slice 
console.log(str1.slice(0,3))

//substring 
console.log(str1.substring(0,3))//does not take negative values , if taken returns the wholw string 

//case 
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
//concat 

let str2="Thatipally"

console.log(str1.concat(" ",str2));

// trim removes whitespace 
let trimtext="       h       ";
console.log(trimtext.trim());
console.log(trimtext.trimEnd());
console.log(trimtext.trimStart())

//repeat 
console.log(str1.repeat(2))

//replace 
let sample = "i love india india"
console.log(sample.replace("india","kmit"))
console.log(sample.replaceAll("india","kmit"))

//split 
console.log(sample.split(" "))

let arr2=sample.split(" ")
let newstr=""
for (i of arr2){
    newstr+=i;
}
console.log(newstr)

//indexOf
console.log(newstr.indexOf("india"))
//last occurance 
console.log(newstr.lastIndexOf("india"))
//match returns array 
console.log(newstr.match("in"))
