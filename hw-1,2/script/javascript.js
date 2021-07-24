console.log("Задание: 1.1");
let buzBuz = (iter) => {
  let i = 0;
  do {
    ++i;
    if (i % 2 == 0) {
      console.log("Fiz");
    } else if (i % 3 == 0) {
      console.log("FizBuz");
    } else console.log("Buz");
  } while (i <= iter);
};

buzBuz(10);

console.log("Задание: 1.2");

let factorial = (number) => {
  let accum = 1;
  let numOrigin = number;
  while (number) {
    accum = accum * number--;
  }
  console.log(`Факториал от числа ${numOrigin} составляет: ${accum}`);
};

factorial(7);

console.log("Задание: 1.3");

const reamPaper = () => {
  const sheetsInReamPaper = 500;
  const consumptionPerWeek = 1200;
  const weeksAmount = 8;
  return console.log(
    "Минимальное количество пачек бумаги: " +
      Math.ceil((consumptionPerWeek * weeksAmount) / sheetsInReamPaper)
  );
};
reamPaper();

console.log("Задание: 1.4");
const roomsOnFloor = 3;
const floors = 9;

let floorPorchNumber = (roomNumber) => {
  let porch = Math.ceil(roomNumber / roomsOnFloor / floors);
  let floor = 1;
  if ((roomNumber / 3) % 9 == 0) {
    floor = 9;
  } else {
    floor = Math.ceil((roomNumber / 3) % 9);
  }
  return console.log(
    `Квартира ${roomNumber} находится в ${porch} подъезде, этаж ${floor}`
  );
};

floorPorchNumber(456);

console.log("Задание: 1.5");

let yolochka = (numOfLanes) => {
  let yolArr = [];
  let i = 0;
  while (i < numOfLanes * 2 - 1) {
    yolArr.push("-");
    i++;
  }
  let ii = 0;
  while (ii < numOfLanes) {
    yolArr.splice(numOfLanes - ii - 1, 1, "#");
    yolArr.splice(numOfLanes + ii - 1, 1, "#");
    ii++;
    console.log(yolArr.join(""));
  }
};
yolochka(8);
yolochka(12);

console.log("Задание: 2.1");

const citiesAndCountries = {
  Киев: "Украина",
  "Нью-Йорк": "США",
  Амстердам: "Нидерланды",
  Берлин: "Германия",
  Париж: "Франция",
  Лиссабон: "Португалия",
  Вена: "Австрия",
};

let result = function (obj) {
  let arrObj = [];
  for (let key in obj) arrObj.push(`${key} — это ${obj[key]}`);
  return arrObj;
};
console.log(result(citiesAndCountries));

console.log("Задание: 2.2");

function getArray(amount) {
  if (amount % 3 == 0) {
    let arr = [];
    let subArr = [];
    let i = 1;
    do {
      subArr.push(i++);
      if (subArr.length == 3) {
        arr.push(subArr.splice(0, 3));
      }
    } while (i <= amount);
    console.log(arr);
  } else {
    console.log("Введите число кратное трем");
  }
}

getArray(9);
getArray(12);
getArray(10);
getArray(60);

console.log("Задание: 2.3");

const namesOfDays = {
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

function getNameOfDay() {
  const lang = "en";
  const day = 7;
  return console.log(namesOfDays[lang][day - 1]);
}

getNameOfDay();

function getNameOfDay1() {
  const lang = "ru";
  const day = 3;
  return console.log(namesOfDays[lang][day - 1]);
}

getNameOfDay1();

console.log("Задание: 2.4");

let twoSmalerNuberSum = function (arr) {
  let sortArr = [...arr].sort((el1, el2) => {
    return el1 - el2;
  });
  return `Массив: ${arr}
  Сумма двух наименьших чисел массива: ${sortArr[0] + sortArr[1]}`;
};

console.log(twoSmalerNuberSum([10, 800, 3453000, 8010, 790]));
console.log(twoSmalerNuberSum([19, 5, 42, 2, 77]));
console.log(twoSmalerNuberSum([19, 5, 42, 6, 1]));
console.log(twoSmalerNuberSum([19, 5, 42, 2, 77, 1, 3, 8]));
console.log(twoSmalerNuberSum([19, 5, 42, 2, 77, 11, 3, 8, 1]));

console.log("Задание: 2.5");

let binarConverter = function (binarArr) {
  let number = 0;
  let pow = binarArr.length - 1;
  for (let i of binarArr) {
    let sum = i * 2 ** pow--;
    number += sum;
  }
  return `Бинарное число: ${binarArr.join("")}
  Конвертированное целое число: ${number}`;
};

console.log(binarConverter([1, 1, 1, 1]));
console.log(binarConverter([1, 0, 0, 0, 1]));
console.log(binarConverter([1, 0, 0, 1, 0]));
console.log(binarConverter([1, 0, 1, 0, 1]));
console.log(binarConverter([1, 1, 1, 0, 0, 1]));
console.log(binarConverter([1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1]));
