const BackButton = document.getElementById("Backbutton");
const currentuser = JSON.parse(localStorage.getItem("currentuser"));
const savingsTransactions = (currentuser ? JSON.parse(localStorage.getItem("savingsTransactions_" + currentuser.username)) : []) || [];
const statement = document.getElementById("SavingsStatment");

BackButton.addEventListener('click', function(){
  window.location.href = "EvenBetterBank2.html";
});

savingsTransactions
    .slice()
    .reverse()
    .forEach(function(transaction) {

        const line = document.createElement("p");

        line.textContent = transaction;

        statement.appendChild(line);

});

