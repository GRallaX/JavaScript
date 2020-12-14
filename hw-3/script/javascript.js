console.log("Задание: 3.1, 3.2");

class Employee {
  constructor(obj) {
    Object.assign(this, obj);
  }
  getFullName() {
    return this.name + " " + this.surname;
  }
  get fullInfo() {
    let properties = [];
    for (let key in this) {
      properties.push(`${key} — ${this[key]}`);
    }

    return properties.join(", ");
  }
  set fullInfo(value) {
    for (let key in value) {
      if (this.hasOwnProperty(key)) {
        this[key] = value[key];
      }
    }
    return this;
  }
}

let employee1 = new Employee(emplyeeArr[0]);
let employee2 = new Employee(emplyeeArr[1]);
let employee3 = new Employee(emplyeeArr[2]);

console.log(employee1);
console.log(employee2);
console.log(employee3);

console.log(employee1.getFullName());
console.log(employee2.getFullName());
console.log(employee3.getFullName());

console.log("Задание: 3.3");

let createEmployesFromArr = (arr) => {
  let arrOfObj = [];
  for (let obj of arr) {
    arrOfObj.push(new Employee(obj));
  }
  return arrOfObj;
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);

console.log(emplyeeConstructArr);

console.log("Задание: 3.4");

const getFullNamesFromArr = (arr) => {
  let fullNames = [];
  for (let gets of arr) {
    fullNames.push(gets.getFullName());
  }
  return fullNames;
};

console.log(getFullNamesFromArr(emplyeeConstructArr));

console.log("Задание: 3.5");

const getMiddleSalary = (arr) => {
  let totalSalary = 0;
  for (let empl of arr) {
    totalSalary += empl.salary;
  }
  return totalSalary / arr.length;
};

console.log(getMiddleSalary(emplyeeConstructArr));

console.log("Задание: 3.6");

const getRandomEmployee = (arr) => {
  const getRandomInt = function (max = arr.length) {
    return Math.floor(Math.random() * Math.floor(max));
  };
  return arr[getRandomInt()];
};

console.log(getRandomEmployee(emplyeeConstructArr));

console.log("Задание: 3.7");
console.log("геттер:");

console.log(employee1.fullInfo);
console.log(employee2.fullInfo);
console.log(employee3.fullInfo);

console.log("cеттер:");
let employeeObj = new Employee(emplyeeArr[0]);
console.log(employeeObj.fullInfo);
employeeObj.fullInfo = {
  name: "Вася",
  salary: 9000,
  email: "ex@mail.ua",
};

console.log(employeeObj.fullInfo);
