//Basic promise 
let p = new Promise((resolve,reject)=>{
    let a=1+2
    if (a==2){
        resolve("Success")
    }
    else {
        reject("failed ")
    }
})
p.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
}).finally(()=>{
    console.log("What ever u want to do at last ")
})

//Assiging promise to a function 
let userIsAlive=true

function alivedetection(){
    return new Promise((resolve,reject)=>{
        if (userIsAlive){
            resolve("is alive ")
        }
        else {
            reject("is dead ")
        }
    })
}
alivedetection().then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
}).finally(()=>{
    console.log ("Still collet user data")
})

//promise all 

const recordVideo1=new Promise((resolve , reject)=>{
    resolve("Video 1 uploaded ")
})
const recordVideo2=new Promise((resolve , reject)=>{
    resolve("Video 2 uploaded ")
})
const recordVideo3=new Promise((resolve , reject)=>{
    resolve("Video 3 uploaded ")
})

Promise.all([
    recordVideo1,
    recordVideo2,
    recordVideo3
]).then((message)=>{
    console.log(message)
})
//gives an array

Promise.race([
    recordVideo1,
    recordVideo2,
    recordVideo3
]).then((message)=>{
    console.log(message)
})