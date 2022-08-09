// Enkapsulasi adalah kondisi di mana attribute atau method di dalam class dibungkus dan bersifat privat.
class Mail {
    constructor(author) {
        this._contacts = []; //underscore untuk private
        this.from = author;
    }
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

const mail1 = new Mail("tomi");
mail1.sendMessage("hallo pakabs", "penerima");
mail1.showAllContacts();