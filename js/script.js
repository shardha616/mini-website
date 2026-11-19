// JavaScript interaction
function showMessage() {
    document.getElementById("message").innerHTML =
    "Welcome! Let's start learning together.";
}

// jQuery interaction
$(document).ready(function() {

    $("#toggleTips").click(function() {
        $("#tips").slideToggle();

    });

});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name.trim() === "" || email.trim() === "") {
        document.getElementById("formMessage").innerHTML =
        "Please fill all required fields.";
    } else {
        document.getElementById("formMessage").innerHTML =
        "Thank you! Your form is submitted successfully.";
    }

});
