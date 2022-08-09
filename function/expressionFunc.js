const greetings = function(name, language) {
    if (language === 'English') {
        return `Goodmorning ${name}!`;
    } else if (language === 'French') {
        return `Bonjour ${name}!`
    } else if (language === 'Jawa') {
        return `Halo cak ${name}!`
    } else {
        return `Met pagi ${name}!`
    }
}

console.log(greetings('Tomi','French'))