const CbalanceText = document.getElementById('CBalance');
const SbalanceText = document.getElementById('SBalance');
const depositButton = document.getElementById('DepositButton');
const withdrawButton = document.getElementById('WithdrawButton');
const transferButton = document.getElementById('TransferButton');
const CStatementbutton = document.getElementById('CStatement');
const SStatementbutton = document.getElementById('SStatement');
const BackButton = document.getElementById('Backbutton');
const LogOutButton = document.getElementById('LogOutButton');
const currentuser = JSON.parse(localStorage.getItem("currentuser"));
const ChatBotButton = document.getElementById('ChatBot');

let CheckingsBalance = currentuser.CheckingsBalance;
let SavingsBalance = currentuser.SavingsBalance;

let checkingTransactions = JSON.parse(localStorage.getItem("checkingTransactions_" + currentuser.username)) || [];
let savingsTransactions = JSON.parse(localStorage.getItem("savingsTransactions_" + currentuser.username)) || [];

CbalanceText.textContent = `$${currentuser.CheckingsBalance.toFixed(2)}`;
SbalanceText.textContent = `$${currentuser.SavingsBalance.toFixed(2)}`;

function saveUserData() {
  // 1. Update the currentuser object
  currentuser.CheckingsBalance = CheckingsBalance;
  currentuser.SavingsBalance = SavingsBalance;
  localStorage.setItem("currentuser", JSON.stringify(currentuser));

  // 2. Load master Logins array, find this user, and update their balances
  let Logins = JSON.parse(localStorage.getItem("Logins")) || [];
  let userIndex = Logins.findIndex(u => u.username === currentuser.username);
  
  if (userIndex !== -1) {
    Logins[userIndex].CheckingsBalance = CheckingsBalance;
    Logins[userIndex].SavingsBalance = SavingsBalance;
    localStorage.setItem("Logins", JSON.stringify(Logins));
  }
}

function normalizeAccountInput(input) {
  if (!input) return '';
  const t = input.trim().toUpperCase();
  return t.charAt(0); // normalize to 'C' or 'S' even if user types full word
}

// When the user clicks the deposit button, they are prompted to enter the account type and amount to deposit. The balance is updated accordingly.
depositButton.addEventListener('click', function() {
  const accountType = normalizeAccountInput(prompt('Enter the account type (Checkings[Enter C]/Savings[Enter S]):'));
  const depositAmount = parseFloat(prompt('Enter the amount to deposit:'));

  if (!depositAmount || depositAmount <= 0 || isNaN(depositAmount)) {
    alert('Enter a valid positive deposit amount.');
    return;
  }

  if (accountType === 'C') {
    CheckingsBalance += depositAmount;
    CbalanceText.textContent = `$${CheckingsBalance.toFixed(2)}`;
    checkingTransactions.push(`Deposited $${depositAmount.toFixed(2)}`);
  } else if (accountType === 'S') {
    SavingsBalance += depositAmount;
    SbalanceText.textContent = `$${SavingsBalance.toFixed(2)}`;
    savingsTransactions.push (`Deposited $${depositAmount.toFixed(2)}`);
  } else {
    alert('Account type must be C or S.');
  }

  saveUserData()
  localStorage.setItem("checkingTransactions_" + currentuser.username, JSON.stringify(checkingTransactions));
  localStorage.setItem("savingsTransactions_" + currentuser.username, JSON.stringify(savingsTransactions));
});

// When the user clicks the withdraw button, they are prompted to enter the account type and amount to withdraw. The balance is updated accordingly.
withdrawButton.addEventListener('click', function() {
  const accountType = normalizeAccountInput(prompt('Enter the account type (Checkings[Enter C]/Savings[Enter S]):'));
  const withdrawAmount = parseFloat(prompt('Enter the amount to withdraw:'));

  if (!withdrawAmount || withdrawAmount <= 0 || isNaN(withdrawAmount)) {
    alert('Enter a valid positive withdrawal amount.');
    return;
  }

  if (accountType === 'C') {
    if (withdrawAmount <= CheckingsBalance) {
      CheckingsBalance -= withdrawAmount;
      CbalanceText.textContent = `$${CheckingsBalance.toFixed(2)}`;
      checkingTransactions.push(`Withdrew $${withdrawAmount.toFixed(2)}`);
    } else {
      alert('Insufficient Checkings funds.');
    }
  } else if (accountType === 'S') {
    if (withdrawAmount <= SavingsBalance) {
      SavingsBalance -= withdrawAmount;
      SbalanceText.textContent = `$${SavingsBalance.toFixed(2)}`;
      savingsTransactions.push(`Withdrew $${withdrawAmount.toFixed(2)}`);
    } else {
      alert('Insufficient Savings funds.');
    }
  } else {
    alert('Account type must be C or S.');
  }

  saveUserData()
  localStorage.setItem("checkingTransactions_" + currentuser.username, JSON.stringify(checkingTransactions));
  localStorage.setItem("savingsTransactions_" + currentuser.username, JSON.stringify(savingsTransactions));
});

// When the user clicks the transfer button, they are prompted to enter the account type to transfer from, the account type to transfer to, and the amount to transfer. The balances are updated accordingly.
transferButton.addEventListener('click', function() {
  const fromAccount = normalizeAccountInput(prompt('Enter the account to transfer from (Checkings[Enter C]/Savings[Enter S]):'));
  const toAccount = normalizeAccountInput(prompt('Enter the account to transfer to (Checkings[Enter C]/Savings[Enter S]):'));
  const transferAmount = parseFloat(prompt('Enter the amount to transfer:'));

  if (!transferAmount || transferAmount <= 0 || isNaN(transferAmount)) {
    alert('Enter a valid positive transfer amount.');
    return;
  }

  if (fromAccount === 'C' && toAccount === 'S') {
    if (transferAmount <= CheckingsBalance) {
      CheckingsBalance -= transferAmount;
      SavingsBalance += transferAmount;
      CbalanceText.textContent = `$${CheckingsBalance.toFixed(2)}`;
      SbalanceText.textContent = `$${SavingsBalance.toFixed(2)}`;
      checkingTransactions.push(`Transferred out $${transferAmount.toFixed(2)} to Savings Account`);
      savingsTransactions.push(`Transferred in $${transferAmount.toFixed(2)} from Checkings Account`);
    } else {
      alert('Insufficient Checkings funds.');
    }
  } else if (fromAccount === 'S' && toAccount === 'C') {
    if (transferAmount <= SavingsBalance) {
      SavingsBalance -= transferAmount;
      CheckingsBalance += transferAmount;
      CbalanceText.textContent = `$${CheckingsBalance.toFixed(2)}`;
      SbalanceText.textContent = `$${SavingsBalance.toFixed(2)}`;
      checkingTransactions.push(`Transferred in $${transferAmount.toFixed(2)} from Savings Account`);
      savingsTransactions.push(`Transferred out $${transferAmount.toFixed(2)} to Checkings Account`);
    } else {
      alert('Insufficient Savings funds.');
    }
  } else {
    alert('Transfer must be from C to S or S to C.');
  }

  saveUserData()
  localStorage.setItem("checkingTransactions_" + currentuser.username, JSON.stringify(checkingTransactions));
  localStorage.setItem("savingsTransactions_" + currentuser.username, JSON.stringify(savingsTransactions));
});

CStatementbutton.addEventListener('click', function() {
  window.location.href = "CheckingStatement.html";
});

SStatementbutton.addEventListener('click', function() {
  window.location.href = "SavingsStatement.html";
});

LogOutButton.addEventListener('click', function() {
  localStorage.removeItem("currentuser");
  window.location.href = "EvenBetterBank.html";
});


