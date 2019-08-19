/* global test expect  */
const Time = require('./index');

test('The date library returns the correct year', () => {
  let date = new Time('09/19/1997');
  expect(date.year()).toBe(1997);
  date = new Time('12/12/2020');
  expect(date.year()).toBe(2020);
});
