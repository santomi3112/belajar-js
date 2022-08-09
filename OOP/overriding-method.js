// Misalkan kita akan membuat sebuah child class bernama WhatsApp yang mewarisi kelas Mail. Maka contoh kodenya adalah sebagai berikut:
class Mail {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts = function() {
        return this._contacts;
    }
}

class WhatsApp extends Mail {
    constructor(username, isBussinessAcc, phoneNumber) {
        super(isBussinessAcc);
        this.username = 'santomi';
        this.isBussinessAcc = 'false';
    }
    sendMessage(msg, to) {
        super.sendMessage(msg, to)
        console.log('Send by WA');
    }
}

const wa1 = new WhatsApp('tomi', false, 0895);
wa1.sendMessage('hai', '08104')
