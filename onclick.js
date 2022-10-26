const buton = document.getElementById("btn")

function GoToSite() {
    document.getElementById("logo").style.animation = "opacity linear 1s";
    document.getElementById("btn").style.animation = "opacity linear 1s";
    setTimeout(function () {
        window.open("./mainmenu.html", "_self")
    }, 1000)
}

