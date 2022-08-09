// Object composition adalah prinsip komposisi dari sebuah alur bisnis tanpa perlu melakukan pewarisan dari parent class. Prinsip ini didasarkan pada kumpulan perilaku (method/function) yang sudah kita definisikan. Sehingga, ketika ingin membuat alur bisnis lain dengan beberapa perilaku (method) yang sama, kita dapat menggunakan fungsi yang sudah ada tanpa melakukan inheritance/pewarisan.


// memisahkan fungsi umum
const yourGenericAction = params => ({
    actionA: () => {/**do action a ...**/},
    actionB: () => {/**do action b ...**/},
});

// membuat class
const YourClassName = (paramA, paramB) => {
    
}

// Kita dapat menyimpan atribut yang kita punya ke dalam sebuah object, biasanya seorang engineer menggunakan konstanta dengan nama self atau state untuk menampung attribute.
const YourClassName2 = (params) => {
    const self = {
        params
    };
}

// menambahkan method yang hanya ada pada kelas tersebut
const yourSpecificActions = self => ({
    specificActionA: {/**do action A */},
});

// membuat kumpulan atribut, generic method, specific method menjadi satu objek
return Object.assign(self, yourGenericAction(self), yourSpecificActions(self));