console.log("Задание: 5.1");

const counterFunc = () => {
  let count = 0;
  return (number) => {
    return (count += number);
  };
};
let counter = counterFunc();

console.log(counter(3));
console.log(counter(5));
console.log(counter(228));

console.log("Задание: 5.2");

let updateArr = () => {
  let arrOfArg = [];

  return function () {
    if (arguments.length == !true) {
      arrOfArg = [];
    } else {
      for (let arg of arguments) {
        arrOfArg.push(arg);
      }
    }

    return arrOfArg;
  };
};

let getUpdatedArr = updateArr();

console.log(getUpdatedArr(3));
console.log(getUpdatedArr(5));
console.log(getUpdatedArr({ name: "Vasya" }));
console.log(getUpdatedArr(3));
console.log(getUpdatedArr());
console.log(getUpdatedArr(4));
