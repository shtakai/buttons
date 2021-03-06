class DailyCheckRecord {
  /**
   * @param {Date} date
   * @param {CheckCollection} checks
   */
  constructor ({ date, checks }) {
    this.date = date
    this.checks = checks
  }

  count () {
    return this.checks.length
  }

  /**
   * @param {string} buttonId
   */
  isCheckedForButtonId (buttonId) {
    return this.checks.getByButtonId(buttonId) != null
  }

  /**
   * @param {Check} check
   */
  add (check) {
    this.checks.add(check)
  }
}

module.exports = DailyCheckRecord
