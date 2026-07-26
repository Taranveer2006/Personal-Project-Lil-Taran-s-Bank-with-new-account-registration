const username = document.getElementById("Username");
const password = document.getElementById("Password");
const InitialCheckingsBalance = document.getElementById("InitialCheckings");
const InitialSavingsBalance = document.getElementById("InitialSavings");
const registerButton = document.getElementById("Register");


registerButton.addEventListener('click', function() {
    const newUsername = username.value.trim();
    const newPassword = password.value.trim();
    const newInitialCheckingsBalance = parseFloat(InitialCheckingsBalance.value.trim());
    const newInitialSavingsBalance = parseFloat(InitialSavingsBalance.value.trim());
    let newuser = {username: newUsername, password: newPassword, CheckingsBalance: newInitialCheckingsBalance, SavingsBalance: newInitialSavingsBalance};
    localStorage.setItem("newuser", JSON.stringify(newuser));
    window.location.href = "EvenBetterBank.html";
});
