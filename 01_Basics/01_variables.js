const accountId = 1445; 
//  Variable value is fixed / locked and cannot be changed
// accountId = 2255; // Not Allowed
let accountEmail = "gauravjoshi@gmail.com";
var accountPassword = "Password";
accountCity = "New Delhi"; //  variable accountCity will be created and allocated "New Delhi" as value

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// Help us print information to the console in tabular format.
console.table([accountId,accountEmail,accountPassword,accountCity]);

/*
Prefer Not to use var becuase of lot of issue in functional / block scope.
*/

var variable01;
let variable02;
console.log(variable01);
console.log(variable02);