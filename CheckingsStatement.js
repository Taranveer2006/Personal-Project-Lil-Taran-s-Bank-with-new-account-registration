const BackButton = document.getElementById("Backbutton");
const currentuser = JSON.parse(localStorage.getItem("currentuser"));
const checkingTransactions = (currentuser ? JSON.parse(localStorage.getItem("checkingTransactions_" + currentuser.username)) : []) || [];
const statement = document.getElementById("CheckingsStatment");

BackButton.addEventListener('click', function(){
  window.location.href = "EvenBetterBank2.html";
});

checkingTransactions
    .slice()
    .reverse()
    .forEach(function(transaction) {

        const line = document.createElement("p");

        line.textContent = transaction;

        statement.appendChild(line);

});


