--------------------------------------
# Credit Card Processing System
--------------------------------------
Latest code is in Master
------
# Backend

Two REST Endpoints implemented

1. "Get all" returns all cards in the system

Sample Output

[{
	"name": "Test Name",
	"cardNumber": 1919191919191900,
	"balance": 0,
	"limit": 2000
}, {
	"name": "Test Name",
	"cardNumber": 1919191919191919,
	"balance": 0,
	"limit": 2000
}]

2. "Add" will creates a new credit card for a given name, card number, and limit. Card numbers is validated using Luhn 10. New cards starts with a £0 balance. For cards not compatible with Luhn 10, return an error

Luhn 10 Wiki: https://en.wikipedia.org/wiki/Luhn_algorithm

Swagger : http://localhost:8080/swagger-ui.html

Sample Add Card Json
{
  "cardNumber": 1919191919191919,
  "limit": 2000,
  "name": "Test Name"
}

Balance is always defaulted to 0

Folder Structure Explained
![image](https://user-images.githubusercontent.com/106242658/170266916-3a92c181-6024-477f-8bc8-f0397803f170.png)

Steps to Run Application
1. Update dependencies - optional
<br> mvn install
2. Launch Application on port 8080
<br> Run Application.java

Not Handled
1. Valication on Name
2. Validation on Limit

Added a default card with negative balance -- <em>Added in 'Jira-Updates' changes</em>

--------------------------------------
# FrontEnd

Folder Structure Explained
![image](https://user-images.githubusercontent.com/106242658/170276418-d3d7abe9-4a37-40f2-b596-0146cf3d604b.png)

	
Working UI Screenshot

![image](https://user-images.githubusercontent.com/106242658/170892488-c2d4346f-d7f9-438a-a7ff-60ed0678d6d8.png)

Functionality Implemented

1. Form to Submit Card
2. Client Side Validation on Name - Alphanumeric with spaces allowed
3. Client Side validation on Card Number - Numeric with length 16-19
4. On Successful Submit (Successfully add card API call), update the table with Valid Card Details

Not Handled

1. Error is not shown for Add Card API call failure -- <em>Added in 'Jira-Updates' changes</em>
2. No Testcases added

Steps to Run Application
1. Update dependencies
<br/>npm installl
2. Run Application
<br/>npm start

<br/> Aplication is launched on http://localhost:3000/

