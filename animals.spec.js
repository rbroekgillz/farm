// animals.spec.js
const {Pig, Horse, Cow} = require('./animals');
/**
 * PIG
 */

test('Pig of 0 days calculates proper weight', () => {
  const pig = new Pig(0);
  expect(pig.getWeightInKg()).toBe(0);
});
test('Pig of 10 days calculates proper weight', () => {
  const pig = new Pig(10);
  expect(pig.getWeightInKg()).toBe(23);
});

test('Pig of 10 days calculates proper value', () => {
  const pig = new Pig(10);
  expect(pig.getValueInEuros()).toBe(23 * 4);
});

/**
 * COW
 */

test('Cow of 0 days calculates proper weight', () => {
  const cow = new Cow(0);
  expect(cow.getWeightInKg()).toBe(0);
});
test('Cow of 13 days calculates proper weight', () => {
  const cow = new Cow(13);
  expect(cow.getWeightInKg()).toBe(19.5);
});

test('Cow of 13 days calculates proper value', () => {
  const cow = new Cow(13);
  expect(cow.getValueInEuros()).toBe(19.5 * 5);
});

/**
 * HORSE
 */

test('Horse of 0 days calculates proper weight', () => {
  const horse = new Horse(0);
  expect(horse.getWeightInKg()).toBe(0);
});
test('Horse of 33 days calculates proper weight', () => {
  const horse = new Horse(33);
  expect(horse.getWeightInKg()).toBe(56.1);
});
test('Horse of 33 days calculates proper value', () => {
  const horse = new Horse(33);
  expect(horse.getValueInEuros()).toBe(56.1 * 10);
});

