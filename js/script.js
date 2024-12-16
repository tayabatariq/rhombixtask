const icon =document.getElementById('imagemoon')
icon.onclick = function()
{
document.body.classList.toggle("dark-theme");
}


const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));

        this.classList.add('active');
      
    });
});








const formButton = document.getElementById("butn");
const form = document.querySelector("form");

// Validation function
function validation() {
    let invalid = false;

    // Get updated values from inputs
    const username = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const phoenum = document.getElementById("phonenum");
    const msg = document.getElementById("msg");

    // Helper function to display errors
    function showError(input, message) {
        const errorMsg = input.nextElementSibling; // Assuming error messages are immediately next to the input
        errorMsg.innerText = message;
        errorMsg.classList.add("show-msg");
        input.style.borderBottom = "1px solid red";
        invalid = true;
    }

    function clearError(input) {
        const errorMsg = input.nextElementSibling;
        errorMsg.innerText = "";
        errorMsg.classList.remove("show-msg");
        input.style.borderBottom = "1px solid #000"; // Adjusted for better visibility
    }

    // Username validation
    if (username.value.trim() === "" || username.value.trim().length < 5) {
        showError(username, "Username must be at least 5 characters long.");
    } else {
        clearError(username);
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "" || !emailRegex.test(email.value.trim())) {
        showError(email, "Please enter a valid email address.");
    } else {
        clearError(email);
    }

    // Password validation
    const specialCharRegex = /[!@#$%^&*]/;
    if (
        password.value.trim() === "" ||
        password.value.trim().length < 7 ||
        !specialCharRegex.test(password.value.trim())
    ) {
        showError(password, "Password must be at least 7 characters and include a special character.");
    } else {
        clearError(password);
    }

    // Phone number validation
    if (
        phoenum.value.trim() === "" ||
        phoenum.value.trim().length < 11 ||
        isNaN(phoenum.value.trim())
    ) {
        showError(phoenum, "Phone number must be numeric and at least 11 digits.");
    } else {
        clearError(phoenum);
    }

    // Message validation
    if (msg.value.trim() === "" || msg.value.trim().length < 20) {
        showError(msg, "Message must be at least 20 characters long.");
    } else {
        clearError(msg);
    }

    if(invalid){
        alert("please fill all the fields!");
    }
}

// Event listener for form submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    if (validation()) {
        alert("Form submitted successfully!");
        // Form submission logic can be added here
    } 
});


