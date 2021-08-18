function Validation() {
    var EMail = document.getElementById('input').value;
    var icon = document.querySelector('.fa');
    var text = document.getElementById('Text');

    var Kontrol = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (EMail.match(Kontrol)) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-check');
        text.innerHTML = 'E-Mail adresiniz geçerli';
        text.style.color = 'green';
    } else {
        icon.classList.remove('fa-check');
        icon.classList.add('fa-times');
        text.innerHTML = 'E-Mail adresiniz geçersiz';
        text.style.color = 'brown';
    }




}