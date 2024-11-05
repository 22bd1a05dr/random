let arr = [1,2,3,4,5,6]

//the function takes in element , index , full array
function fun (element){
    return element*2;
}
let newarr = arr.map(fun)
console.log(newarr)



let map = new Map()

map.set(1,"Sathvik")
map.set(2,"Some name ")

console.log(map.get(1))

for ( let [key,value] of map){
    console.log(key +" "+value)
}