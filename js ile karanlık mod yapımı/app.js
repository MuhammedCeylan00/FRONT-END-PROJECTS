const govde = document.querySelector('body');
const metin = document.querySelector('.metin');
const button = document.querySelector('.icons');
const DarkIcon = document.querySelector(".fa");

button.addEventListener('click', () => {
    button.classList.toggle("dark");
    if (button.classList.contains("dark")) {
        DarkIcon.classList.remove("fa-sun-a");
        DarkIcon.classList.add("fa-moon-o");
        govde.style = 'background-color:#0D0B0B; color: white';
        DarkIcon.style = 'background-color:gray';
    } else {
        DarkIcon.classList.add("fa-sun-a");
        DarkIcon.classList.remove("fa-moon-o");
        govde.style = 'background-color:white;color:#0D0B0B';
        DarkIcon.style = 'background-color:yellow';
    }
});