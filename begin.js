const thunder = new Audio()
thunder.src = "thuner.mp3"

window.onload=
setTimeout(function () {
    document.body.style.backgroundColor = "white";
    document.body.style.animation = "color linear 1s";
    document.body.style.backgroundColor = "black";
}, 4610)
window.onload=
setTimeout(function () {
    thunder.play();
    thunder.volume = 1;
}, 3610)
setTimeout(function () {
    document.getElementById("igraj").style.animation = "EnlargeButton ease-in-out 1.25s";
    document.getElementById("igraj").style.opacity = 1;
}, 5610)
setTimeout(function () {
    document.getElementById("exit").style.animation = "opacity ease-in-out 1.25s";
    document.getElementById("exit").style.opacity = 1;
}, 6610)