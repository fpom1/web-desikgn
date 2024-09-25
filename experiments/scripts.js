

function timedText() {
    var x = document.getElementById("text");
        x.value = Math.floor(10*Math.random())
}

function hat() {
setInterval(timedText(),100)
}