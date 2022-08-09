// Constructor adalah sebuah method/function yang dijalankan pertama kali ketika object dibuat
class Mail {
    constructor(author) {
        this.from = author;
        console.log(`is initiated by: ${author}`);
    }
}

const mail1 = new Mail("saya tomi");
mail1;