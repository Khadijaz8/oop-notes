// class method
class BankAccount {
  balance;
  customerName;
  accountId;

  constructor(customerName, balance = 0) {
    this.balance = balance;
    this.customerName = customerName;
    this.accountId = Date.now();
  }

  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}
//saving account
class SavingAccount extends BankAccount {
  transactionLimit = 1000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }
  settransactionLimit(amount) {
    console.log(" transaction limit is:", amount);
  }
}
class NewAccount extends BankAccount {
  transactionLimit = 1000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }
  settransactionLimit(amount) {
    console.log(`transacion limit is: ${amount}`);
  }
}
// current account
//takay bank account ki properties aur mehtods current account mai a jain.
class CurrentAccount extends BankAccount {
  transactionLimit = 5000;

  constructor(customerName, balance = 0) {
    //takay parent kay constructor ko phelay call karain aur uskay andar values ko set kar sakain
    super(customerName, balance);
  }
  settransactionLimit(amount) {
    console.log(` transaction limit is:${amount}`);
  }
}

const khadijaAccount = new NewAccount("Khadija Ijaz", 1000);
khadijaAccount.deposit(1000);
khadijaAccount.withdraw(500);

console.log(khadijaAccount);

//prototype method

// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.account = Date.now();
//   this.balance = balance;
// }
// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };
// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// // Saving Account

// function SavingAccount(customerName, balance = 0) {
//   //constructor linking
//   BankAccount.call(this, customerName, balance);
//   this.transactionLimit = 5000;
// }
// //prototype linkings
// SavingAccount.prototype = Object.create(BankAccount.prototype);
// //method
// SavingAccount.prototype.transactionLimit = function (amount) {
//   console.log("transaction limit is: ", amount);
// };

// function CurrentAccount(customerName, balance = 0) {
//   BankAccount.call(this, customerName, balance);
//   this.transactionLimit = 1000;
// }
// //prototype linking
// CurrentAccount.prototype = Object.create(BankAccount.prototype);
// //method
// CurrentAccount.prototype.transactionLimit = function (amount) {
//   console.log("transaction limit is: ", amount);
// };
// const khadijaAccount = new CurrentAccount("Khadija", 5000);
// khadijaAccount.withdraw(500);
// console.log(khadijaAccount);
