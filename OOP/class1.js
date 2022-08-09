//function menggunakan pendekatan prototype
function Mail () {
    this.from = 'pengirim@tomi.com';
}

Mail.prototype.sendMessage = function(msg, to) {
    console.log(`you send: ${msg} to ${to}, from: ${this.from}`);
}

//function tanpa pendekatan prototype
function Mail2() {
    this.from2 = 'pengirim2@tomi.com',
    this.sendMessage2 = function(msg2, to2) {
        console.log(`you send: ${msg2} to ${to2}, from: ${this.from2}`)
    }
}

//pemanggilan
const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@tomi.com');
