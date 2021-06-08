// 1. Person calss
const Person = class {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;

    // validate email here
    this.email = email;
  }

  describe() {
    return `${this.name}, ${this.age} years old`;
  }
}

const user = new Person("John", 19, "joel@john.com");
console.log(user.describe());

// 2. Tick tock
class Clock {
  constructor({ template }) { // object destructuring
    this.template = template;
  }

  render() {
    const date = new Date(); // this loads the current time

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    const output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {}

  start() {
    this.render();
  }
}

const clockConfig = { template: '< h:m >', foo: 123 };
const myClock = new Clock(clockConfig);
myClock.start();

// 3. TV Class
class TV {
  constructor (brand) {
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
  }

  increaseVolume(n) {
    this.volume = this.volume + n;
    if (this.volume > 100) {
      this.volume = 100;
    }
  }

  decreaseVolume(n) {
    this.volume = this.volume - n;
    if (this.volume < 0) {
      this.volume = 0;
    }
  }

  setRandomCannel() {
    this.channel = Math.round(Math.random() * 50);
  }

  reset() {
    this.channel = 1;
    this.volume = 50;
  }

  getStatus() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
  }
}

const telly = new TV("Panasonic");
telly.setRandomCannel();
telly.decreaseVolume(99999);
console.log(telly.getStatus());
telly.reset();
console.log(telly.getStatus());


// BONUS 4. Volume of cylinder
class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    // V = πr^2h
    const volume = Math.PI * this.radius * this.radius * this.height;
    return volume.toFixed(1);
  }
}

const test = new Cylinder(5, 20);
console.log(test.getVolume());