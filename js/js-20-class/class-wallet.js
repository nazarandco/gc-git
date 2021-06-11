//put your code here

class Wallet {
  _balance = 0; // тут має бути конструктор, але якщо властивість не приходить
  // ззовні, то маємо спрощений синтаксис!

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (this._balance < amount) {
      console.log('No enough funds');
      return;
    }

    this._balance -= amount;
  }
}

const wallet1 = new Wallet();
console.log(wallet1.getBalance());
wallet1.deposit(100);
console.log(wallet1.getBalance());
wallet1.withdraw(50);
console.log(wallet1.getBalance());
