// Code to change each bubble to a different image based upon a rainbow pattern

function popViolet(element)
{
    element.src =  "Bubble-Pop-Violet.png";
}  

function popIndigo(element)
{
    element.src =  "Bubble-Pop-Indigo.png";
}  

function popBlue(element)
{
    element.src =  "Bubble-Pop-Blue.png";
}  

function popGreen(element)
{
    element.src =  "Bubble-Pop-Green.png";
}  

function popYellow(element)
{
    element.src =  "Bubble-Pop-Yellow.png";
}  

function popOrange(element)
{
    element.src =  "Bubble-Pop-Orange.png";
}  

function popRed(element)
{
    element.src =  "Bubble-Pop-Red.png";
}  


// Code for playing sound when the bubble is clicked

function playSoundOnClick()
{
    let x = document.getElementById("sound");
    x.play();
}

// Note: one must not click bubbles successively. Wait for at least 2 secs before clicking again