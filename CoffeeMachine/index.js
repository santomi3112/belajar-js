import coffeeStock from './state.js';

const makeCoffee = (type, mg) => {
    if (coffeeStock[type] >= mg) {
        console.log("kopi berhasil dibuat");
    } else {
        console.log("biji kopi habis!");
    }
}

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

displayStock(coffeeStock)