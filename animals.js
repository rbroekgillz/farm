class Animal {
  constructor(age = 0) {
    this.age = age;
  }
  getValueInEuros() {
    return this.getWeightInKg() * this.PRICE_PER_KG;
  }

  getWeightInKg() {
    return Math.min(this.MAX_WEIGHT, this.age * this.GROWTH_FACTOR)
  }
}

class Pig extends Animal {
  constructor(age) {
    super(age);
    this.PRICE_PER_KG = 4;
    this.MAX_WEIGHT = 700;
    this.GROWTH_FACTOR = 2.3;
  }
}

class Cow extends Animal {
  constructor(age) {
    super(age);
    this.PRICE_PER_KG = 5;
    this.MAX_WEIGHT = 1200;
    this.GROWTH_FACTOR = 1.5;
  }
}

class Horse extends Animal {
  constructor(age) {
    super(age);
    this.PRICE_PER_KG = 10;
    this.MAX_WEIGHT = 1000;
    this.GROWTH_FACTOR = 1.7;
  }
}

module.exports = { Animal, Pig, Cow, Horse };