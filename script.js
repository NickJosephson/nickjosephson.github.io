function blink() {
    setInterval(function(){ 
        blinkWhite;
        setTimeout(blinkBlack, 1000);
    }, 1000);
    
}

function blinkWhite() {
    document.getElementById("marker").style.backgroundColor="white";
}

function blinkBlack() {
    document.getElementById("marker").style.backgroundColor="black";
}