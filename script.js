function blink() {
    setInterval(blinkWhite(){ 
        setTimeout(blinkBlack, 500);
    }, 1000);
}

function blinkWhite() {
    document.getElementById("marker").style.backgroundColor="white";
}

function blinkBlack() {
    Document.getElementById("marker").style.backgroundColor="black";
}