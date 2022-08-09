/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

let evenNumber = [];
for(let bil = 1; bil <= 100; bil++) {
    if(bil % 2 === 0) {
        evenNumber.push(bil);
        console.log(evenNumber);
    }
}