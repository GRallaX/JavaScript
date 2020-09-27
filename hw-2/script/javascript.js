console.log("Обязательное задание");
var letters = [];

var sentence = "Backend As A Service";
console.log("Имеем строку из слов: " + sentence);

letters = sentence.split(" ").map((item) => item[0]);
console.log("Первые буквы из слов строки: " + letters);
console.log("Массив в строку: " + letters.join(""));

console.log("Дополнительное задание 1");
function oneFormalParameter(b) {
  if (typeof b == "number") {
    var today = new Date();
    var date = String(today.getDate()).padStart(2, "0");
    var month = String(today.getMonth() + 1).padStart(2, "0");
    var year = today.getFullYear();
    var seconds = String(today.getSeconds()).padStart(2, "0");
    var minutes = String(today.getMinutes()).padStart(2, "0");
    var hours = String(today.getHours()).padStart(2, "0");

    today =
      date +
      "-" +
      month +
      "-" +
      year +
      ", " +
      seconds +
      ":" +
      minutes +
      ":" +
      hours;
    return today;
  } else {
    return "Неверный тип данных";
  }
}
console.log("Если параметр функции число: " + oneFormalParameter(3));
console.log(
  "Если параметр функции что-то другое (например, строка): " +
    OneFormalParameter("string")
);

console.log("Дополнительное задание 2");
console.log("return userText.split('<').join('&lt;')");
console.log(
  "Честно нагуглено, сам бы не дошел. Хотелось бы узнать, будет ли работать и не проще ли использовать innerText."
);
