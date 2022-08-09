const myTio = new Map([
    ['1', 'a string key'],
    [1, 'an integer key'],
    [false, false],
    ['semoga semoga yah', 'iyh']
]);
// console.log(myTio);


//map example 2
const capital = new Map([
    ['Jawa Timur', 'Surabaya'],
    ['Jawa Barat', 'Bandung'],
    ['Jawa Tengah', 'Semarang'],
    ['Aceh', 'Tsunami']
]);
console.log(capital.size)
console.log(capital.get('Aceh'))
capital.set('Japan', 'Tokyo')
console.log(capital.size)
console.log(capital.get('Japan'))
console.log(capital.has('Aceh'))
console.log(capital)