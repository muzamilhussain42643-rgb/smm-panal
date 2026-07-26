// Register Form
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const message = document.getElementById("message");

        if (password !== confirmPassword) {
            message.textContent = "Passwords do not match.";
            return;
        }

        message.textContent =
            "Registration form submitted successfully.";

        registerForm.reset();
    });
}


// Order Form
const orderForm = document.getElementById("orderForm");

if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const message = document.getElementById("orderMessage");

        message.textContent =
            "Order request submitted successfully.";

        orderForm.reset();
    });
}


// Payment Form
function submitPayment() {
    const method = document.getElementById("paymentMethod");
    const amount = document.getElementById("amount");
    const message = document.getElementById("paymentMessage");

    if (!method || !amount || !message) return;

    if (!method.value || !amount.value) {
        message.textContent =
            "Please select a payment method and enter an amount.";
        return;
    }

    message.textContent =
        "Payment request submitted successfully.";

    amount.value = "";
    method.value = "";
}


// Profile
function saveProfile() {
    const name = document.getElementById("profileName");
    const email = document.getElementById("profileEmail");
    const message = document.getElementById("profileMessage");

    if (!name || !email || !message) return;

    if (!name.value || !email.value) {
        message.textContent =
            "Please enter your name and email.";
        return;
    }

    message.textContent =
        "Profile information saved successfully.";
}
