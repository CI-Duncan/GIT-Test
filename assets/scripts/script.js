const paragraph = document.getElementById("myparagraph")

function changeText() {
    paragraph.textContent = "This is the new text!";
}

<button onclick="changeText()">Change Text</button>