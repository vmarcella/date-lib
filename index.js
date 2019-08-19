module.exports = class Time {
  constructor(...args) {
    this.date = new Date(...args);
    this.monthMap = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December',
    };
  }

  /**
   * @function
   * @desc Get the full year from the date
   * @return {Number} The full year
   * @example
   * Time('10/10/2019').getFullYear() -> 2019
   */
  year() {
    return this.date.getFullYear();
  }

  /**
   * @function
   * @desc Get the month from the current date
   * @return {Number} Get the full month
   * @example
   * Time('10/10/2019').getMonth() -> October
   */
  month() {
    const month = this.monthMap[this.date.getMonth()];
    return month;
  }

  /**
   * @function
   * @desc Get the day of the month
   * @return {Number} The day of the month in the date object
   * @example
   * Time('10/10/2019').getFullYear() -> 10
   */
  day() {
    return this.date.getUTCDate();
  }

  /**
   * @function
   * @desc Get the hours of the current date
   * @return {Number} The hour of the current date
   * @example
   * Time().getFullYear() -> 2019
   */
  hours() {
    return this.date.getHours();
  }

  /**
   * @function
   * @desc Get the minutes of the current date.
   * @return {Number} The minutes of the current date
   * @example
   * Time().getFullYear() -> 2019
   */
  minutes() {
    return this.date.getMinutes();
  }

  /**
   * @function
   * @desc Get the full year from the date
   * @return {Number} The full year
   * @example
   * Time().getFullYear() -> 2019
   */
  seconds() {
    return this.date.getSeconds();
  }
};
