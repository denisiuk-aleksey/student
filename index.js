class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return ` ${this.name} " " ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, yearOfAdmission) {
    super(name, surname);
    this.yearOfAdmission = yearOfAdmission;
  }

  set yearOfAdmission(year) {
    debugger;
    const bufferYear = Number(year); // забивается стэк, не могу пофиксить, дебагер пробовал, не помогло ((
    if (typeof(bufferYear) !== 'number') {
      throw new TypeError("Incorect input, incoming data must be numbers");
    }
    if (bufferYear < 1920) {
      throw new RangeError("You must be dead, dont you?");
    }
    this.yearOfAdmission = new Date(bufferYear);
  }

  get yearOfAdmission() {
    return this.yearOfAdmission;
  }

  getCourse(currentYear) {
    if (typeof(currentYear) !== "number") {
      throw new TypeError("Incorect input, incoming data must be numbers");
    }
    return currentYear - Date.this.yearOfAdmission;
  }
}
