//Sebagai contoh, kita memiliki sebuah data object bernama mail

const mail = {
    from: "pengirim@tomi.com",
    sendMessage: function (msg, to) {
        console.log(`you send ${msg} to ${to} from ${this.from}`);
    },
    
};

mail.from = "tomitio@gmail.com"
console.log(mail.from);
mail.sendMessage('hai salam kenal', 'penerima@tomi.com');
mail.saveContact = function (addr) {
    console.log(`email saved to ${addr}`)
}
mail.saveContact("Zimbabwe")