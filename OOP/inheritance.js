// Misalkan kita akan membuat sebuah child class bernama WhatsApp yang mewarisi kelas Mail. Maka contoh kodenya adalah sebagai berikut:
class Mail {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }
    sendMessage = function(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts = function() {
        return this._contacts;
    }
}

class WhatsApp extends Mail {
    constructor(author) {
        super(author);
        this.username = 'santomi';
        this.isBussinessAcc = 'false';
    }
    myProfile() {
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`;
    }
}

const wa1 = new WhatsApp(0895397130217);
console.log(wa1.myProfile());
wa1.sendMessage("hai", "putri")