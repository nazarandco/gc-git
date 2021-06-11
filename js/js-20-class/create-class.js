//put your code here

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(age) {
    const ageCheck = age < 0 ? false : (this.age = age);

    if (age >= 25) {
      this.requestNewPhoto();
    }

    return ageCheck;
  }

  static createEmpty() {
    return new User('', null);
  }
}

console.log(User.createEmpty());

const user1 = new User('Tom', 17);
console.log(user1.setAge(33));
console.log(user1.age);
