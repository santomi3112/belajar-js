const favorites = ["Tahu", "Tempe", "Telor", "Panci"]
const [, , , fourthFood] = favorites
// console.log(thirdFood)


//destructing assignment
let myFood = "tahutlor"
let myDrink = "es teh";
[, ,myFood, myDrink] = favorites
// console.log(myFood,myDrink)


//dest assgin2 swap var
let a = 1
let b = 2

console.log("sebelum swap")
console.log("Nilai a = " + a)
console.log("Nilai b = " + b)
console.log(" ")
console.log("Setelah Swap");
[a,b] = [b,a]
console.log("Nilai a = " + a)
console.log("Nilai b = " + b)
