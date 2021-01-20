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
    const bufferYear = Number(year);
    if (typeof(bufferYear) !== 'number') {
      throw new TypeError("Incorect input, incoming data must be numbers");
    }
    this._yearOfAdmission = new Date();
    this._yearOfAdmission.setFullYear(bufferYear);
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
