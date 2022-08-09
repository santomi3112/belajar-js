// function expression
const greetings = function (name, language) {
    console.log(`${name}, ${language}`)
}

// arrow function expression
const greetings2 = (name, language) => {
    console.log(`${name}, ${language}`)
}

const sayName = name => {
    console.log(`hai nama saya ${name}`)
}
sayName("Tomi")

const sayHello = () => {
    console.log("MET PAGI SMUA")
}
sayHello()

const sayHello2 = () => console.log("tawur boss");
sayHello2()

const multiply = (a,b) => a*b;
let hasil = multiply(2, 4);
console.log(hasil)
//Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan return (hanya bekerja untuk fungsi satu baris).