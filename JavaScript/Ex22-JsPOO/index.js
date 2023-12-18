const App = require("./App")

App.createUser("jose2001@gmail.com", "José Carlos")
App.createUser("joao2003@gmail.com", "João Gabriel")
App.createUser("mota2004@gmail.com", "Lucas Mota")

App.deposit("jose2001@gmail.com", 100)

App.transfer("jose2001@gmail.com", "joao2003@gmail.com", 20)

App.changeLoanFee(10)
App.takeLoan("mota2004@gmail.com", 2000, 24)

console.log(App.findUser("jose2001@gmail.com"))
console.log(App.findUser("jose2001@gmail.com").account)
console.log(App.findUser("joao2003@gmail.com"))
console.log(App.findUser("joao2003@gmail.com").account)
console.log(App.findUser("mota2004@gmail.com"))
console.log(App.findUser("mota2004@gmail.com").account)
console.log(App.findUser("mota2004@gmail.com").account.loans[0].installments)