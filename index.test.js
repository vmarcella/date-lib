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
  date = new Time(2019, 11, 15);
  expect(date.month()).toBe('December');
  date = new Time('10/30/2067');
  expect(date.month()).toBe('October');
});

test('The date library returns the correct day', () => {
  let date = new Time('09/19/1997');
  expect(date.day()).toBe(19);
  date = new Time(2020, 1, 12);
  expect(date.day()).toBe(12);
  date = new Time('10/30/2067');
  expect(date.day()).toBe(30);
});

test('The date library returns the correct hours', () => {
  let date = new Time('09/19/1997');
  expect(date.hours()).toBe(0);
  date = new Time(2020, 12, 12, 16);
  expect(date.hours()).toBe(16);
  date = new Time(2067, 10, 30, 26);
  expect(date.hours()).toBe(2);
});

test('The date library returns the correct minutes', () => {
  let date = new Time('09/19/1997');
  expect(date.minutes()).toBe(0);
  date = new Time(2020, 12, 12, 16, 61);
  expect(date.minutes()).toBe(1);
  date = new Time(2067, 10, 30, 26, 45);
  expect(date.minutes()).toBe(45);
  date = new Time(2067, 10, 30, 22, 65);
  expect(date.minutes()).toBe(5);
});

test('The date library returns the correct seconds', () => {
  let date = new Time('09/19/1997');
  expect(date.seconds()).toBe(0);
  date = new Time(2020, 12, 12, 16, 61, 20);
  expect(date.seconds()).toBe(20);
  date = new Time(2067, 10, 30, 26, 20, 200);
  expect(date.seconds()).toBe(20);
  date = new Time(2067, 10, 30, 22, 60);
  expect(date.seconds()).toBe(0);
});

test('The date library formats the mask properly', () => {
  const date = new Time('09/19/1997');
  expect(date.format('')).toBe('1997 September 19');
});
