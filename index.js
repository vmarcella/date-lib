class Time {
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
      Y: this.year.bind(this),
      y: this.shortYear.bind(this),
      M: this.month.bind(this),
      m: this.shortMonth.bind(this),
      D: this.longDay.bind(this),
      d: this.day.bind(this),
      H: this.longHours.bind(this),
      h: this.hours.bind(this),
      I: this.longMinutes.bind(this),
      i: this.minutes.bind(this),
      S: this.longSeconds.bind(this),
      s: this.seconds.bind(this),
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

    return outputStr.join('');
  }

  when() {
    // Setup variables
    const now = new Date();
    const difference = now - this.date;
    const timeValues = [
      1000,
      1000 * 60,
      1000 * 60 * 60,
      1000 * 60 * 60 * 24,
      1000 * 60 * 60 * 24 * 30,
      1000 * 60 * 60 * 24 * 365,
    ];
    const timeUnits = [
      'millisecond',
      'second',
      'minute',
      'day',
      'month',
      'year',
    ];

    let currDiff;
    let prevDiff;
    // Iterate through the different units of times
    for (let i = 0; i < timeValues.length; i += 1) {
      prevDiff = currDiff;
      currDiff = Math.abs(difference / timeValues[i]);
      console.log(currDiff);
      if (currDiff < 1) {
        prevDiff = Math.round(prevDiff);
        const absDiff = Math.abs(prevDiff);
        const unitsAway = absDiff === 1 ? timeUnits[i - 1] : `${timeUnits[i - 1]}s`;
        if (difference < 0) {
          return `${prevDiff} ${unitsAway} from now`;
        }

        return `${prevDiff} ${unitsAway} ago`;
      }
    }

    currDiff = Math.round(currDiff);
    if (difference < 0) {
      return `${currDiff} years from now`;
    }
    return `${currDiff} years ago`;
  }
}

const d = new Time('8/30/2020');
console.log(d.when());

module.exports = Time;
