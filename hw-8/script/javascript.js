console.log("Обязательное задание");
let clock = document.getElementById("time");

let time = () => {
  let d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();
  m = checkTime(m);
  s = checkTime(s);
  h = checkTime(h);
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  clock.textContent = h + ":" + m + ":" + s;
};
let clockrefresh = setInterval(time, 1000);
setTimeout(() => {
  clearInterval(clockrefresh);
}, 100000);

console.log("Дополнительное задание 1");

var typeMessage = (function (velocity) {
  let container = document.getElementById("demo")
    ? document.getElementById("demo")
    : document.body.appendChild(document.createElement("h3"));
  container.style = `color: magenta; text-align: center;`;
  var index = 0;
  return function (message) {
    container.textContent = container.textContent + message.charAt(index);
    if (index < message.length) {
      window.setTimeout(() => {
        index++;
        typeMessage(message);
      }, velocity * 1000);
    }
  };
})(1);

typeMessage(`Welcome to the hell`);
