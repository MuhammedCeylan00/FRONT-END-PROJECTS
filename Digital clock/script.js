var Hour = document.getElementById('hour');
var Dots = document.getElementById('dots');
var Minutes = document.getElementById('minute');

var Day = document.getElementById('day');
var Month = document.getElementById('month');
var Year = document.getElementById('year');

var D = new Date();
var Saat = D.getHours();
var Dakika = D.getMinutes();
console.log(Hour, Minutes)

var Gun = D.getDate();
var Ay = D.getMonth() + 1;
var Yil = D.getFullYear();

console.log(Day, Month, Year)

setInterval(function() {
    Hour.innerHTML = Saat < 10 ? '0' + Saat : Saat;
    Minutes.innerHTML = (Dakika < 10) ? '0' + Dakika : Dakika;
    var Months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    Day.innerHTML = Gun;
    Month.innerHTML = Months[Ay];
    Year.innerHTML = Yil;
    Dots.classList.toggle('color');
}, 1000);