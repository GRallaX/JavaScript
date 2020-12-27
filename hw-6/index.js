console.log("Задание: 6.1");

const arr = ["Vasya", "Petya", "Alexey"];

removeUser = function (arrToDel, index) {
  arrToDel.splice(index, 1);
};

removeUser(arr, 1);

console.log(arr);

console.log("Задание: 6.2");

const obj = { name: "Vasya", age: 1 };
getAllKeys = (objWithKeys) => {
  return Object.getOwnPropertyNames(objWithKeys);
};

console.log(getAllKeys(obj));

console.log("Задание: 6.3");

const obj2 = { name: "Vasya", age: 1 };

getAllValues = (objWithValues) => {
  return Object.values(objWithValues);
};

console.log(getAllValues(obj2));

console.log("Задание: 6.4");

const obj3 = {
  id: 3,
  name: "Vasya",
};

const secondObj = {
  id: 4,
  name: "Katya",
};

const arr2 = [
  {
    id: 1,
    name: "Kolya",
  },
  {
    id: 2,
    name: "Petya",
  },
];

const insertIntoArr = (user, searchId) => {
  arr2.splice(
    arr2.findIndex((user) => user.id === searchId),
    0,
    user
  );
};

insertIntoArr(obj3, 2);
console.log(arr2);
insertIntoArr(secondObj, 1);
console.log(arr2);

console.log("Задание: 6.5");

condidateArr.forEach((item) => {
  item.registered = item.registered.split(" ")[0];
});

class Condidate {
  constructor(cond) {
    for (let key in cond) {
      this[key] = cond[key];
    }
    this.state = function () {
      return this.address.split(", ")[2];
    };
  }
}

const condidate1 = new Condidate(condidateArr[0]);

console.log(condidate1);
console.log(condidate1.state());

console.log("Задание: 6.6");

const getCompanyNames = () => {
  let arr = [];
  for (let cond of condidateArr) {
    if (arr.includes(cond.company)) {
      continue;
    }
    arr.push(cond.company);
  }
  return arr;
};

console.log(getCompanyNames());

console.log("Задание: 6.7");

const getUsersByYear = (year) => {
  return condidateArr
    .filter((cond) => cond.registered.split("-")[0] == year)
    .map((cond) => (cond = cond._id));
};

console.log(getUsersByYear(2017));

console.log("Задание: 6.8");

getCondidatesByUnreadMsg = (unreadMsg) => {
  return condidateArr
    .filter((cond) => cond.greeting.split(" ")[5] == unreadMsg)
    .map((cond) => new Condidate(cond));
};

console.log(getCondidatesByUnreadMsg(8));

console.log("Задание: 6.9");

getCondidatesByGender = (gender) => {
  return condidateArr
    .filter((cond) => cond.gender == gender)
    .map((cond) => new Condidate(cond));
};

console.log(getCondidatesByGender("male"));

console.log("Задание: 6.10");

const customReduce = function (callback, accum) {
  let accumulator = accum === undefined ? 0 : accum;
  for (let index in this) {
    // if (accumulator === accum) {
    //   continue;
    // }
    accumulator = callback(accumulator, this[index], index, this);
  }
  return accumulator;
};

const customJoin = function (separator) {
  if (separator === undefined) {
    separator = ",";
  }
  let str = "";
  for (let index in this) {
    if (index == this.length - 1) {
      str += this[index];
      continue;
    }
    str += this[index] + separator;
  }
  return str;
};
Object.defineProperties(Array.prototype, {
  customJoin: { value: customJoin, enumerable: false },
  customReduce: {
    value: customReduce,
    enumerable: false,
  },
});

const exampleArr = [1, 2, 3, 4, 5];

console.log(exampleArr.customJoin());
console.log(exampleArr.customJoin("|||"));

console.log(exampleArr.customReduce((acc, item) => acc + item));
console.log(exampleArr.customReduce((acc, item) => acc + item, 5));
console.log(exampleArr.reduce((acc, item) => acc + item, 5));
