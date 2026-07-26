const Username = document.getElementById("Username");
const Password = document.getElementById("Password");
const LoginButton = document.getElementById("Login");
let Logins = JSON.parse(localStorage.getItem("Logins"));
if (!Logins) {
    Logins = [
        {username: "TaranveerSingh", password: "1234", CheckingsBalance: 5000, SavingsBalance: 10000},
        {username: "JasleenKaur", password: "1234", CheckingsBalance: 4000, SavingsBalance: 12000},
        {username: "HarjitKaur", password: "1234", CheckingsBalance: 50000, SavingsBalance: 100000},
        {username: "GurmeetSingh", password: "1234", CheckingsBalance: 100000, SavingsBalance: 250000}
    ];
    localStorage.setItem("Logins", JSON.stringify(Logins));
}

let newuser = JSON.parse(localStorage.getItem("newuser"));
if (newuser) {
    // only add new user if username not already present
    if (!Logins.some(u => u.username === newuser.username)) {
        Logins.push(newuser);
        localStorage.setItem("Logins", JSON.stringify(Logins));
    }
    localStorage.removeItem("newuser");
}

LoginButton.addEventListener('click', function() {
    const username = Username.value.trim();
    const password = Password.value.trim();
    
    if (!username && !password) {
        alert("Username and Password are missing.");
        return;
    }

    if (!username) {
        alert("Username is missing.");
        return;
    }

    if (!password) {
        alert("Password is missing.");
        return;
    }

    const validLogin = Logins.some(function(user) {
    return user.username === username &&
           user.password === password;
    });

    if (validLogin) {
        alert("Login successful!");
        currentuser = Logins.find(function(user) {
            return user.username === username && user.password === password;
        });
        localStorage.setItem("currentuser", JSON.stringify(currentuser));
        window.location.href = "EvenBetterBank2.html";
    } else {
        alert("Invalid username or password.");
    }
});