const {Farm} = require('./index');
const {Wheat, Sugarcane} = require('./crops');

test('A new Farm can be instantiated', () => {
  const farm = new Farm();
  expect(farm).toBeTruthy();
});

test('A Farm can have a name', () => {
  const name = 'Test farm';
  const farm = new Farm(name);
  expect(farm.name).toBe(name);
});

test('We can add a crop to our farm', () => {
  const farm = new Farm('TEST_NAME');
  farm.addCrop(new Wheat(100));
});

test('The income of an empty farm is 0', () => {
  const farm = new Farm('TEST_NAME');
  expect(farm.calculateIncome()).toBe(0);
});

test('The income of a 100 Wheat + 100 Sugarcane farm is X', () => {
  const farm = new Farm('farm');
  farm.addCrop(new Wheat(100));
  farm.addCrop(new Sugarcane(100));
  expect(farm.calculateIncome()).toBeCloseTo(1918.37, 1);
});