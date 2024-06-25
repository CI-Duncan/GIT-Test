
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

