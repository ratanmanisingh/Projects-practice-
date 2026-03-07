let phoneInput = document.querySelector("#phone_number");

// Create Note button
document.querySelector("#create").addEventListener("click", function() {
    if (/^\d{10}$/.test(phoneInput.value)) {
        alert("Note Created Successfully!");
    } else {
        alert("Please enter a valid 10-digit phone number.");
    }
});

// Close button
document.querySelector("#close").addEventListener("click", function() {
    alert("Note Closed!");
});

// Only allow numbers and max 10 digits
phoneInput.addEventListener("input", function() {
    this.value = this.value.replace(/\D/g, '').slice(0, 10);
});