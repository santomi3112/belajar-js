// tidak pure
let PI = 3.14;

const hitungLuasLingkaran = jarijari => {
    return PI * (jarijari * jarijari);
}

console.log(hitungLuasLingkaran(4));

PI = 4;

console.log(hitungLuasLingkaran(4));


// pure 
const luasLingkaran = jarijari => {
    return 3.14 * (jarijari * jarijari)
}

console.log(luasLingkaran(4));