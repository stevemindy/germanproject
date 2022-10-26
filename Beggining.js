const thunder = new Audio
const heartbeat = new Audio
const wait = new Audio
const lever2 = new Audio
const ambience = new Audio
const breathing = new Audio
const bangloud = new Audio
const bodyfall = new Audio
thunder.src = "./Start.mp3"
heartbeat.src = "./HeartBeat.mp3"
wait.src = "./wait.wav"
lever2.src = "./lever2.wav"
ambience.src = "./clockchime7.wav"
breathing.src = "./breathing1.wav"
bangloud.src = "./bang_loud.wav"
bangloud.volume = 0.06;
bodyfall.src = "./bodyfall.wav"

function StartTrailer()
{
    heartbeat.play();
    document.getElementById("clickanywhere").onclick = "";
    document.getElementById("clickanywhere").style.opacity = 0;
    document.getElementById("clickanywhere").innerHTML = "";
    setTimeout(function () {
        document.body.style.backgroundColor = "white";
        document.body.style.animation = "color linear 1s";
        document.body.style.backgroundColor = "black";
        document.getElementById("storytext").innerText = "You and your friends come out side to mess around and have fun."
        ambience.play();
        thunder.play();
        wait.play();
    }, 5000);
    setTimeout(function () {
        document.getElementById("storytext").innerText = "After separating to trick or treat you choose to go with your friend."
        wait.play();
    }, 10000)
    setTimeout(function () {
        document.getElementById("storytext").innerText = "You talk for a moment and stop for a minute looking for houses."
        wait.play();
    }, 15000)
    setTimeout(function () {
        document.getElementById("storytext").innerText = "You hear a loud and distorted bang in the distance. You get concerned."
        wait.play();
        bangloud.play();
    }, 20000)
    setTimeout(function () {
        document.getElementById("storytext").innerText = ""
        lever2.play();
    }, 25000)
    setTimeout(function () {
        document.getElementById("storytext").innerText = "But you decide to continue walking…"
        wait.play();
    }, 30000)
    setTimeout(function () {
        document.getElementById("storytext").innerText = "You talk for a moment and hear soft and very quiet breathing sounds…"
        wait.play();
        breathing.play();
    }, 35000)
    setTimeout(function () {
        document.getElementById("storytext").innerText = "You tell your friend but he looks at you and thinks you are lying."
        wait.play();
    }, 40000)
    setTimeout(function () {
        document.getElementById("storytext").innerText = "Considering you are hearing noises, you turn around to find nothing."
        wait.play();
    }, 45000)
    setTimeout(function () {
        document.getElementById("storytext").innerText = ""
        document.querySelector("img").style.width = "640px"
        document.querySelector("img").style.height = "480px"
        document.querySelector("img").src = "./outside.jpg"
        lever2.play();
        ambience.play();
    }, 50000)
    setTimeout(function () {
        document.getElementById("storytext").innerText = "You continue and feel something slightly wrong is happening...It is like pain is taking over you."
        document.querySelector("img").style.width = "0px"
        document.querySelector("img").style.height = "0px"
        document.querySelector("img").src = ""
        wait.play();

    }, 55000)
    setTimeout(function () {
        document.getElementById("storytext").innerText = "After the pain stopping you strangely pass away..."
        wait.play();
        bodyfall.play();
    }, 60000)
    setTimeout(function () {
        document.getElementById("storytext").innerText = ""
        lever2.play();
    }, 65000)
    setTimeout(function () {
        window.open("./game.html", "_self")
    }, 75000)
}
