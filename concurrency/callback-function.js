const orderCoffee = callback => {
    let coffee = null;
    console.log("sedang membbuat kopi, silakan tungu...");
    setTimeout(() => {
        coffee = "kopi sudah jadi";
        callback(coffee);
    },3000);
}

orderCoffee(coffee => {console.log(coffee);})