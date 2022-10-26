const knock = new Audio
const lever2 = new Audio
const wait = new Audio
const distortedbass = new Audio
const crash = new Audio
const impact = new Audio
const impact1 = new Audio
const pageflip = new Audio
const ambience2 = new Audio
const boom = new Audio
const giygas = new Audio
const reverseimpact = new Audio
const heartbeat = new Audio
var beatgame = false
knock.src = "./knocking.wav"
lever2.src = "./lever2.wav"
wait.src = "./wait.wav"
distortedbass.src = "./agressivebass.wav"
crash.src = "./cinematicboom.wav"
impact.src = "./largeimpact.wav"
impact1.src = "./largeimpact2.wav"
pageflip.src = "./pageturn.wav"
ambience2.src = "ambience2.wav"
boom.src = "boom.wav"
giygas.src = "giygas.wav"
reverseimpact.src = "reverseimpact.wav"
heartbeat.src = "./HeartBeat.mp3"

function Chapter2()
{
    pageflip.play();
    setTimeout(function () {
        document.getElementById("game").style.minHeight = "0vh";
        document.getElementById("storytext2").style.padding = "20px";
        document.getElementById("imagestory").style.minHeight = "89vh"
        document.getElementById("storytext2").innerText = "You see your friend by the side still  laying down unconscious."
        document.querySelector("img").src = ""
        boom.volume = 1;
        boom.play();
        ambience2.play();
    }, 1000)
    setTimeout(function () {
        document.getElementById("storytext2").innerText = "You tell him to wake up a few times after finally waking up."
        document.querySelector("img").src = ""
        pageflip.play();
    }, 8000)
    setTimeout(function () {
        document.getElementById("storytext2").innerText = "The room was very dusty and old"
        document.querySelector("img").src = ""
        pageflip.play();
        ambience2.pause();
    }, 16000)
    setTimeout(function () {
        document.getElementById("storytext2").innerText = "With two flashlights and 1 battery sitting on the table to the right side of you."
        document.querySelector("img").src = ""
        pageflip.play();
        ambience2.play();
    }, 22000)
    setTimeout(function () {
        document.getElementById("storytext2").innerText = "One flashlight has a battery and one hasn’t…"
        document.querySelector("img").src = ""
        pageflip.play();
    }, 25000)
    setTimeout(function () {
        document.getElementById("storytext2").innerText = "Your friend puts the battery into the flashlight and you try and escape the room..."
        document.querySelector("img").src = ""
        pageflip.play();
    }, 31000)
    setTimeout(function () {
        document.getElementById("storytext2").innerText = "only to find out EVERYTHING is in a different language"
        document.querySelector("img").src = ""
        ambience2.pause();
        giygas.loop = "true"
        giygas.play();
    }, 37000)
    setTimeout(function () {
        document.getElementById("storytext2").innerText = "After reading the text written with a brownish and smelly substance on the table you find out it is German."
        document.querySelector("img").src = ""
        ambience2.pause();
        giygas.pause();
        crash.play();
    }, 42000)
    setTimeout(function () {
        heartbeat.play();
        document.getElementById("storytext2").innerText = "   "
        document.querySelector("img").style.animation = "bigger 2.734s ease-in"
        reverseimpact.play();
    }, 48000)
    setTimeout(function () {
        document.querySelector("img").style.width = "1000px";
        document.querySelector("img").style.animation = "buhbye 0.5s linear"
        document.querySelector("img").style.opacity = 0;
        impact.play();
    }, 50734) 
    setTimeout(function () {
        document.querySelector("img").src = "";
        document.getElementById("imagestory").style.minHeight = "0vh"
        document.getElementById("storytext1").style.padding = "0px"
        document.getElementById("storytext2").style.padding = "0px";
        LoadGame();
    }, 60000)
}


function ChapterShowoff() 
{
    knock.play();
    setTimeout(function () {
        document.getElementById("storytext").innerText = "Chapter 2:"
        distortedbass.play();
        impact.play();
    }, 5000)
    setTimeout(function () {
        impact.pause();
        document.getElementById("storytext").innerText = "Finding Escape"
        document.getElementById("storytext").style.animation = "textdramatic 5s linear"
        impact.play();
    }, 10010)
    setTimeout(function () {
        document.body.style.animation = "backgrnd 2.5s linear"
        document.getElementById("storytext").innerText = ""
        crash.play();
        impact1.play();
    }, 15000)
    setTimeout(function () {
        Chapter2();
    }, 23450)
}

function GoToSto()
{
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSftz9mN1SUv90Es5EzzdKcXuQ8xwO2-YdY1G_wSdvAVj_xrGA/viewform?usp=sf_link")
}
function GoToSto2()
{
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScp_AB55YC99b1hVVKyb8vBmDl_A0xUSWQWx0fTYJ3kAMRXfg/viewform?usp=sf_link")
}
function GoToSto3()
{
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSe4MYaZ1_ljnLUY8N9-sjM8MctKD1DyANz9cPJJGFyvQUk1CA/viewform?usp=sf_link")
}
function GoToSto4()
{
    console.log(beatgame)
    if (beatgame === true)
    {
        window.open("beatgame.html", "_self")
    }
    if (beatgame === false)
    {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSef8e7bOeMtkcWQ4nHERlyZpE3DP9hnrf48ii9l5XXppA4SNg/viewform?usp=sf_link")
        setTimeout( function () {
            beatgame = true;
        }, 1) 
    }
}

function LoadGame()
{
    wait.play();
    ambience2.loop = "true";
    ambience2.play();
    document.getElementById("game").style.minHeight = "0vh";
    document.getElementById("storytext2").style.padding = "20px";
    document.getElementById("storytext2").innerText = "Room 1"
    document.getElementById("imagestory").style.minHeight = "90vh"
    document.body.style.backgroundImage = "./RoomEvents/RoomStartpoint1.png";
}

window.onload = ChapterShowOff();

//window.onload = function () {
//    wait.play();
//    ambience2.loop = "true";
//    ambience2.play();
//    document.getElementById("game").style.minHeight = "0vh";
//    document.getElementById("storytext2").style.padding = "20px";
//    document.getElementById("storytext2").innerText = "Room 1"
//    document.getElementById("imagestory").style.minHeight = "90vh"
//    document.body.style.backgroundImage = "./RoomEvents/RoomStartpoint1.png";
//}
