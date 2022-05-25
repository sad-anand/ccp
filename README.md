--------------------------------------
# Credit Card Processor System
--------------------------------------

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

![image](https://user-images.githubusercontent.com/106242658/170266916-3a92c181-6024-477f-8bc8-f0397803f170.png)

Steps to Run Application
1. Update dependencies - optional
<br> mvn install
2. Launch Application on port 8080
<br> Run Application.java
--------------------------------------
# FrontEnd

