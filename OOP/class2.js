//cara 2 menggunakan syntax class
class Mail {
    constructor() {
        this.from = 'pengirim@tomi.com';
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg}, to: ${to}, from: ${this.from}`);
    };
}

//inisialisasi objek
const mail1 = new Mail();
mail1.sendMessage("hai pakabs", "penerima@bujang.com")