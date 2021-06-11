//put your code here

class Order {
  constructor(price, city, type) {
    this.id = Math.random().toString(36).substring(2, 15);
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = new Date();
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    return this.price > 1000 ? true : false;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell' ? true : false;
  }
}

const order1 = new Order(2500, 'Lviv', 'Buy');
console.log(order1.id);
console.log(order1.checkPrice());
order1.confirmOrder();
console.log(order1.isConfirmed);
console.log(order1.isValidType());
