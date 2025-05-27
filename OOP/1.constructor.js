function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.account = Date.now();
  this.balance = balance;
  //deposit method
  this.deposit = (amount) => {
    this.balance += amount;
  };
  //withdraw method
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}
// new for creating object
// const khadijaAccount = new BankAccount("Khadija", 1000);
// khadijaAccount.deposit(2000);
// khadijaAccount.withdraw(500);
// console.log(khadijaAccount);

const Accounts = [];
const bankForm = document.querySelector("#bankForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");
const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const Account = new BankAccount(customerName.value, +balance.value);
  alert("Account created");
  Accounts.push(Account);
  console.log(Accounts);
});

//deposit
const depositForm = document.querySelector("#depositForm");
const accountId = document.querySelector("#accountId");
const amount = document.querySelector("#amount");
const depositButton = document.querySelector("#depositButton");
depositButton.addEventListener("click", (e) => {
  e.preventDefault();
  const Account = Accounts.find(
    (Account) => Account.account === +accountId.value
  );

  alert(`Rs${+amount.value} deposited`);
  Account.deposit(+amount.value);
  console.log(Accounts);
});

//withdraw
const withdrawForm = document.querySelector("#withdrawForm");
const accountID = document.querySelector("#accountId");
const withdrawamount = document.querySelector("#withdrawamount");
const withdrawButton = document.querySelector("#withdrawButton");
withdrawButton.addEventListener("click", (e) => {
  e.preventDefault();
  const Account = Accounts.find(
    (Account) => Account.account === +accountID.value
  );

  alert(`Rs ${+withdrawamount.value} withdraw`);
  Account.withdraw(+withdrawamount.value);
  console.log(Accounts);
});
