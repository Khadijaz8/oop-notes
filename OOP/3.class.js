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

const khadijaAccount = new BankAccount("Khadija Ijaz", 1000);
khadijaAccount.deposit(1000);
khadijaAccount.withdraw(5000);
console.log(khadijaAccount);
