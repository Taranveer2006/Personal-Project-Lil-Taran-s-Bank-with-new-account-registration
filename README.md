# Personal-Project-Lil-Taran-s-Bank-with-new-account-registration

Lil Taran's Even Bank

Lil Taran's Even Better Bank is the third and most complex banking simulator created with HTML, CSS, and JavaScript. It extends my previous projects with the development of a multi-user banking system with account persistence, user registration, session management, and individual transactions' history. My goal in this project was to build the functional model of an online bank while improving my knowledge of JavaScript and application development.


Features
Multiple-user login with validation of users' credentials.
User registration which creates a new banking account.
Individual balance of checking and savings accounts for every user.
Operations with depositing, withdrawing money and money transferring between accounts.
Checking and savings transaction history separately.
Transaction statements showing the transactions' information in reverse chronological order (the newest transaction comes first).
Storage of persistent account balances and transaction history using Local Storage.
Session management with logging in/out functionality.
Multi-page application using separate JavaScript files for every page.
More modernized user interface with custom CSS styling.

Technologies Used
HTML5
CSS3
JavaScript (ES6)
DOM Manipulation
Event Listeners
Arrays and Objects
Local Storage
Parsing/Serialization JSON objects

Advantages over Previous Projects

This project is a clear advancement of previous projects.

Version 1 → Version 2

The original banking simulator software had a limited feature set with just one account with the ability to deposit and withdraw money. In Version 2 of this project, a login page was added along with the support for checking and savings accounts, transferring money between these accounts, logging out of the system, dedicated statement pages, and storing transactions history using JavaScript arrays.

Version 2 → Version 3

In this iteration, the system becomes much more like a realistic banking system because it now includes:

Support for multiple users each with his/her own login credentials.
Ability for users to register for an account.
Balances for individual checking and savings accounts.
Transaction history for each user separately instead of a common one.
Balances and transactions stored persistently using browser's Local Storage.
Sessions management to remember which user is currently logged into the system.
Synchronization of balances with the master list of users automatically on transactions.

In effect, now there are different banking profiles for different users instead of the same account for all the customers.

What I Learned

During this project, I improved my knowledge of:

Objects and arrays in JavaScript
Dynamic manipulation of the DOM
Event-driven programming
State management of an application
Browser Local Storage
Serialization (JSON.stringify) and deserialization (JSON.parse) of JSON objects
Handling data among different webpages
Project organization in HTML, CSS, and JavaScript files separately
Software development process through the iterative improvement of previous versions, rather than from scratch
Future Improvements

The future planned features include:

Chat bot AI to answer questions related to banking.
"Forgot password" functionality.
Timestamp of transactions.
Better account security and authentication methods.
Java Spring Boot backend.
Use of MySQL or PostgreSQL database instead of Local Storage.
Creation of REST API.
