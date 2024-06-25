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