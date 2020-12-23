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

console.log("Задание: 5.3");

const timeDiff = () => {
  let start = 0;
  return () => {
    if (start == 0) {
      start = Date.now();
      return console.log("getTime() enabled");
    } else {
      let end = Date.now();
      let lag = Math.round((end - start) / 1000);
      start = Date.now();
      return console.log(
        "Прошло " + lag + " сек c последнего запуска getTime()"
      );
    }
  };
};

let getTime = timeDiff();
let getTimeTimeout = (timeOut) => setTimeout(getTime, timeOut * 1000);
getTimeTimeout();
getTimeTimeout(4);
getTimeTimeout(7);

setTimeout(() => {
  console.log("Задание: 5.4");

  const timer = (time) => {
    let timerSubFunc = setInterval(() => {
      let ss = time % 60;
      if (ss < 10) {
        ss = "0" + ss;
      }
      let mm = Math.floor(time / 60);
      if (mm < 10) {
        mm = "0" + mm;
      }
      console.log(`${mm}:${ss}`);
      time--;
      if (time == 0) {
        clearInterval(timerSubFunc);
        return console.log("Timer End");
      }
    }, 1000);
  };

  timer(179);
}, 7000);
