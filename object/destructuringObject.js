const saya = {
    namaAwal : "Adi",
    namaAkhir : "Prasetio",
    umur : 19
}
const {namaAwal, namaAkhir} = saya
// console.log(namaAwal,namaAkhir)


//destructuring assignment
const saya2 = {
    namaAwal2 : "Pramesti",
    namaAkhir2 : "Mentari",
    umur2 : 19
}
let namaAwal2 = "Putri"
let umur2 = 20;
//inisialisasi nilai baru dengan destructuring object
({namaAwal2,umur2} = saya2)
console.log(namaAwal2)
console.log(umur2)
console.log(typeof(saya2))