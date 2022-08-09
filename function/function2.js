function greeting(name, language) {
    if(language === "Indonesia") {
        console.log( `Selamat Pagi ${name}!`)
    } else if(language === "English") {
        console.log(`Good Morning ${name}!`) 
    } else if(language == "French") {
        console.log(`Bonjour ${name}!`) 
    } else {
        console.log(`Halo cak ${name}`) 
    }
}
// greeting('tomi', 'French');


//contoh 2
function greeting2(name, language) {
    if (language === "Indonesia") {
        return `Selamat pagi ${name}!`
    } else if (language === "English") {
        return `Good Morning ${name}!`
    } else if (language === "French") {
        return `Bonjour ${name}!`
    } else {
        return `piye kabare ${name}`
    }
}

let greetingMessage = greeting2('Tomi', 'English');
console.log(greetingMessage)