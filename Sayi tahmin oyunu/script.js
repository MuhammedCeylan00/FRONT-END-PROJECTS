var Tahmin = document.querySelector('input');
var Uyari = document.querySelector('#Tahminler');
var Message = document.getElementById('Message');
var Sayi = Math.floor(Math.random() * 10) + 1;

var Tahminler = [];

function Kontrol() {
    console.log(Sayi);
    if (Tahmin.value == Sayi) {
        Message.textContent = "Tebrikler bildiniz. 👍👍";
    } else if (Tahmin.value > Sayi) {
        Message.textContent = "Daha küçük bir sayı tahmin etmelisin.";
        if (Tahminler.indexOf((Tahmin.value)) != (-1)) {
            Message.textContent = 'Az öncede bu sayıyı tahmin ettin. 🤬'
        }
        Tahminler.push((Tahmin.value));
    } else if (Tahmin.value < Sayi) {
        Message.textContent = "Daha Büyük bir sayı tahmin etmelisin.";

        if (Tahminler.indexOf((Tahmin.value)) != (-1)) {
            Message.textContent = 'Az öncede bu sayıyı tahmin ettin. 🤬'
        }
        Tahminler.push((Tahmin.value));
    }
}

function Sifirla() {
    Sayi = Math.floor(Math.random() * 10) + 1
    Tahminler = [];
    Message.textContent = ' ';
    Tahmin.value = ' ';
}