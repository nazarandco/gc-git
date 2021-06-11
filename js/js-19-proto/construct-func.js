//put your code here

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (age) {
  if (age < 0) {
    return false;
  } else {
    this.age = age;
  }

  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  return this.age;
};

const user1 = new User('Bodik', 22);
user1.sayHi();
user1.requestNewPhoto();
user1.setAge(27);
console.log(user1.setAge(27));
