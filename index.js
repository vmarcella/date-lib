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

  shortYear() {
    const yearStr = this.year().toString();
    const slicedYear = yearStr.slice(2, yearStr.length);

    return Number(slicedYear);
  }

  /**
   * @function
   * @desc Get the month from the current date
   * @return {String} Get the full month
   * @example
   * Time('10/10/2019').getMonth() -> October
   */
  month() {
    const month = this.monthMap[this.date.getMonth()];
    return month;
  }

  shortMonth() {
    const month = this.month();
    return month.slice(0, 3);
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

  longDay() {
    const day = this.day();

    if (day < 10) {
      return `0${day}`;
    }

    return String(day);
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

  longHours() {
    const hours = this.hours();

    if (hours < 10) {
      return `0${hours}`;
    }

    return String(hours);
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

  longMinutes() {
    const minutes = this.minutes();

    if (minutes < 10) {
      return `0${minutes.toString()}`;
    }

    return String(minutes);
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

  longSeconds() {
    const seconds = this.seconds();

    if (seconds < 10) {
      return `0${seconds}`;
    }

    return String(seconds);
  }

  format(mask = '') {
    if (mask === '') {
      return `${this.year()} ${this.month()} ${this.longDay()}`;
    }

    const formatter = {
      Y: this.year,
      y: this.shortYear,
      M: this.month,
      m: this.shortMonth,
      D: this.longDay,
      d: this.day,
      H: this.longHours,
      h: this.hours,
      I: this.longMinutes,
      i: this.minutes,
      S: this.longSeconds,
      s: this.seconds,
    };

    const outputStr = [];

    for (let i = 0; i < mask.length; i += 1) {
      const currChar = mask[i];
      if (formatter[currChar]) {
        const replacement = formatter[currChar]();
        outputStr.push(replacement);
      } else {
        outputStr.push(currChar);
      }
    }

    return String(outputStr);
  }
};
