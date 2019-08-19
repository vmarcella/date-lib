/* global test expect  */
const Time = require('./index');

test('The date library returns the correct year', () => {
  let date = new Time('09/19/1997');
  expect(date.year()).toBe(1997);
  date = new Time('12/12/2020');
  expect(date.year()).toBe(2020);
});

test('The date library returns the correct month', () => {
  let date = new Time('09/19/1997');
  expect(date.month()).toBe('September');
  date = new Time('12/12/2020');
  expect(date.month()).toBe('December');
  date = new Time('10/30/2067');
  expect(date.month()).toBe('October');
});
