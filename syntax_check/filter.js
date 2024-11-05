let arr=[1,2,3,4,5,6]
function fun(element){
    return element%2==0
}
let newarr= arr.filter(fun)

console.log(newarr)