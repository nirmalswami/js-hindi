const accountId = 15542
let accountMail = "nirmal.swami@indiaresults.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed
accountMail = "ns@gmail.com"
accountPassword="214256"
accountCity="udaipur"

/*
prefer not to use var
because of issue in block scope and funtional scope
*/
console.log(accountMail);
console.table([accountId, accountMail, accountPassword, accountCity, accountState]);