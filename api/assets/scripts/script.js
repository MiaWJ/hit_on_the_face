'use strict';

function generateFaces() {
    var theLeftSide = document.getElementById("leftSide");
    var theRightSide = document.getElementById("rightSide");

    var numberOfFaces = 5;

    for (let i = 0; i < numberOfFaces ; i++) {
        var smileyImage = document.createElement("img");
        /* smileyImage.src = "smile.png";*/
        smileyImage.setAttribute("src","../smile.png");

        var topPosition = Math.floor(Math.random()*401);
        var leftPosition = Math.floor(Math.random()*401);

        smileyImage.style.top = topPosition + "px";
        smileyImage.style.left = leftPosition + "px";
        theLeftSide.appendChild(smileyImage);
        
        /* Now we take the right side */
        var leftSideImages = theLeftSide.cloneNode(true);
        leftSideImages.removeChild(leftSideImages.lastChild);
        /* add div to another div (element to another element) */
        theRightSide.appendChild(leftSideImages);
        }
    var theBody = document.getElementsByTagName("body")[0];
    theLeftSide.lastChild.onclick = function nextLevel(event){
        event.stopPropagation();
    numberOfFaces += 5;

    generateFaces();
    };
    theBody.onclick = function gameOver() {
        alert("Game Over!");
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
};
};
