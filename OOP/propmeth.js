//cara 1
class Mail {
    constructor() {
        this.from = 'pengirim@tomi.com';
        this.contacts = [];
        this.yourOtherProperty = 'the values';
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg}, to: ${to}, from: ${this.from}`);
        this.contacts.push(to); // menyimpan kontak baru
    }
}



//cara 2
function Mail() {
    this.from = 'pengirim@tomi.com';    
    this.contacts = [];
    this.yourOtherProperty = 'the values';
}

Mail.prototype.sendMessage = function(msg, to) {
    console.log(`you send: ${msg}, to: ${to}, from: ${this.from}`);
    this.contacts.push(to);
}



//cara 3
class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
    }
    sendMessage(msg, to, from) {
        console.log(`you send: ${msg} to ${to} from ${from}`);
        // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
        this.contacts.push(to);
    };
}

//inisisalisasi objek
const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');

/**
you send: hallo to penerima@dicoding.com from aku@gmail.com
**/