
document.addEventListener("DOMContentLoaded", function () {
    let formElement = document.getElementById("myForm");
    formElement.addEventListener('submit', displayName);

    function displayName(e) {
        e.preventDefault();
        const results = document.getElementById("fullName")
            let text = results.value;
            document.getElementById("display-message").innerText = text;
        
    };
});

function pullReq() {
    console.log("Hello, I'm creating a pull request");
}

pullReq();



let numberDisplay = document.getElementById('numberDisplay');
let number = 0;

document.addEventListener('keydown', upOrDown);

function upOrDown(e) {
    console.log(e.key);
    const allowedKeys = ["ArrowUp", "ArrowDown"];
    if (allowedKeys.includes(e.key)) {
        e.preventDefault();                         //Note this line position
        if (e.key === "ArrowUp") {
            // Scrolling up
            number++;
        } else if (e.key === "ArrowDown") {
            // Scrolling down
            number--;
        }
        numberDisplay.textContent = number;
    }
}

function myFunction(p1, p2) {
    return p1 * p2;
  }

  

