document.addEventListener('click', function(event) {
    var body = document.querySelector('body');
    var mermi = document.createElement('span');

    var x = event.offsetX;
    var y = event.offsetY;
    console.log(x, y);
    mermi.style.left = x + 'px';
    mermi.style.top = y + 'px';

    body.appendChild(mermi);

    var ses = document.getElementById('ses');
    ses.play();
})