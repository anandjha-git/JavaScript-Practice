const accountId=12345678
let accounEmail ="anand@gmail.com"
var accountPassword = "25464655"
accountCity ="Bengaluru"
accountCity="Noida"
let accountState

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
// accountId=7667
console.log(accountId, accounEmail);
console.table([accountId, accounEmail, accountPassword, accountCity, accountState])
console.info(accounEmail, accountId)