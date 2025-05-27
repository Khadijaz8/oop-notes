// class method
class BankAccount {
  //# private karnay kay liya hota hai takay koi bahir sai access na kar pay.
  #balance;
  customerName;
  accountId;

  constructor(customerName, balance = 0) {
    this.#balance = balance;
    this.customerName = customerName;
    this.accountId = Date.now();
  }

  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    this.#balance -= amount;
  }
  //agar koi bahir sai private property ko access kar kay uski value badlna chahta hai toh badal sakta hai.
  //set method kay zariya
  set balance(amount) {
    //takay koi string na set kar pay.
    if (isNaN(amount)) {
      throw new Error("invalid");
    }
    this.#balance = amount;
  }
  // takay private ki value badal sakay.
  get balance() {
    return this.#balance;
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

const khadijaAccount = new CurrentAccount("Khadija Ijaz", 1000);
khadijaAccount.balance = 6000;
// get aur set kay humnay methods banay hain magr hum unhain call normal object ki tyarha hi kar rahay hain. aur humnay jo get aur set liya hain wo default/ built in functions hain.
console.log(khadijaAccount);
