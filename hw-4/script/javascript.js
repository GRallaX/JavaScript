console.log("Обязательное задание");

let purse = {
  phone: "iphone",
  wallet: "hugo boss",
  keys: "from home",
  addTo(fieldName, value) {
    this[fieldName] = value;
  },
  deleteFrom(fieldName) {
    delete this[fieldName];
  },
  inside() {
    for (let insidePurse in this) {
      if (typeof this[insidePurse] == "string") {
        console.log(insidePurse + " " + this[insidePurse]);
      }
    }
  },
};

purse.deleteFrom("phone"); // удаляем свойство
purse.addTo("phone", "samsung"); // добавлем свойство

purse.inside(); // выводим содержимое

console.log("Дополнительное задание");
