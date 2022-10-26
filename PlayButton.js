var GoToGameValue = false
const clicksound = new Audio
clicksound.src = "./Clack.mp3"

function OnButtonClick() { 
    document.getElementById("igraj").style.animation = "ButtonEnlarge ease-in-out 1s";
    document.getElementById("maintext").style.animation = "opacity1 linear 1s"
    document.getElementById("exit").style.animation = "opacity1 linear 1s"
    document.getElementById("maintext").style.opacity = 0;
    document.getElementById("exit").style.opacity = 0;
    clicksound.play();
    document.getElementById("igraj").style.width = "500px";
    document.getElementById("igraj").style.height = "200px";
    setTimeout(function () {
        GoToGameValue = true;
    }, 200)
    
}
function CheckForGameValue()
{
    if (GoToGameValue === false)
    {
        return
    }
    else
    {
        document.getElementById("igraj").style.animation = "opacity1 linear 1s";
        clicksound.play();
        document.getElementById("enter").volume = 0;
        document.getElementById("igraj").style.opacity = 0;
        setTimeout(function () {
            window.open("./trailer.html", "_self")
        }, 1000);
    }

}