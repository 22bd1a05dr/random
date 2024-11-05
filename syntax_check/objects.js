let obj={
    "Name":"Sathvik"
}
//full obj is printed 
console.log(obj);

console.log(obj.Name);

obj.age=20;
obj["Email"]="gmail.com"

console.log(obj)

for (key in obj){
    console.log(key + obj[key]);
}


 obj = {};
Object.assign(obj, { prop1: "val1", prop2: "val2" });

console.log(obj); // { prop1: "val1", prop2: "val2" }

let newobj={
    obj
}
console.log(newobj)

newobj={...obj}
console.log(obj)

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person.fullName())

const arr=Object.values(obj)
console.log(arr)

const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.fullName = function() {
      return this.firstName + " " + this.lastName;
    };
  }