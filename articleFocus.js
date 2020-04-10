window.speed = 40;
function setSpeed() {
       }

setSpeed();
function myFunction() {
        var x = document.getElementById("textPlace").textContent;
        const y = "&nbsp;";
        var contentLaterText = document.getElementById("laterText");
        console.log(contentLaterText);
        console.log( x.length );
        x = x.replace(/&nbsp;/g, ' ');
        contentLaterText.innerHTML = x;
        contentLaterText.innerHtml = contentLaterText.textContent.replace(/&nbsp;/g, ' ');
        document.getElementById("textPlace").style.visibility = "hidden";
        
}

//var text = document.getElementById("laterText").textContent;
function timeout(i) {
        return new Promise(resolve => 
                setTimeout(function () {
                var contentLaterText = document.getElementById("laterText");
                var x = document.getElementById("textPlace").textContent;
                contentLaterText.innerHTML = x;
                var getDiv = document.getElementById("laterText");
                 var idSpeed = document.getElementById("speed");
        var speed = 10;
        if (idSpeed) {
        window.speed = idSpeed.value;
        console.log(window.speed);

        }       

                var kelime = document.getElementById("laterText").innerHTML; 
                getDiv.innerHTML = kelime.substring(0, i) +'<span style="font-size: 18px;font-weight: bold;">' + kelime.substring(i, i+20) + '</span>' + kelime.substring( i+20, document.getElementById("laterText").textContent.length );
                        resolve(1);
                }, parseInt(1000 / window.speed) )
        );
    }
async function start() {
        for (var i = 0; i < document.getElementById("laterText").textContent.length; i++) {
                // buradan her cagirdiginda hepsini ayni anda yazar                 
                await timeout(i);
        }
}
function pasteAgain() {
        document.getElementById("textPlace").innerHTML = " ";
        document.getElementById("textPlace").querySelector("#textPlace");
        document.getElementById("textPlace").style.visibility = "visible";
}


