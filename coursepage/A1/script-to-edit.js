function outputText() {
    var inputText = document.getElementById("textIndex").value;
    var h1Element = document.getElementById("text-1");
    h1Element.textContent = inputText;
}

function outputText2() {
    var inputText = document.getElementById("textIndex2").value;
    var h1Element = document.getElementById("text-2");
    h1Element.textContent = inputText;
}

function fontChoice3() {
    var headingElement1 = document.getElementById("text-1");
    headingElement1.style.fontFamily = "'Futura', sans-serif";

    var headingElement2 = document.getElementById("text-2");
    headingElement2.style.fontFamily = "'Futura', sans-serif";
}


function fontChoice2() {
    var headingElement1 = document.getElementById("text-1");
    headingElement1.style.fontFamily = "Bradley Hand ITC";

    var headingElement2 = document.getElementById("text-2");
    headingElement2.style.fontFamily = "Bradley Hand ITC";

}

function fontChoice1() {
    var headingElement1 = document.getElementById("text-1");
    headingElement1.style.fontFamily = "'Comic Sans MS', sans-serif";

    var headingElement2 = document.getElementById("text-2");
    headingElement2.style.fontFamily = "'Comic Sans MS'";
}

function changeCol() {
    const selectedColor = document.getElementById("colSelector").value;
    const newcolor = document.getElementById("text-1");
    const newcolor2 = document.getElementById("text-2");

    newcolor.style.color = selectedColor;
    newcolor2.style.color = selectedColor;
}

function changeImg() {
    const selectedImage = document.getElementById("imgSelector").value;
    const resizableImage = document.getElementById("imgchg");

    imgchg.src = selectedImage;
}

function changeSize() {
    const fontSize = document.getElementById("slider").value;
    const firstText = document.getElementById("text-1");
    const secondText = document.getElementById("text-2");

    firstText.style.fontSize = fontSize + "px";
    secondText.style.fontSize = fontSize + "px";
}

function weight() {
    const fontWeight = document.getElementById("fontWeight").value;
    const firstText = document.getElementById("text-1");
    const secondText = document.getElementById("text-2");

    firstText.style.fontWeight = fontWeight;
    secondText.style.fontWeight = fontWeight;
}
