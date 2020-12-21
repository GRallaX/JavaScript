console.log("Задание: 4.1");

class Student {
  static listOfStudents = [];
  constructor(enrollee) {
    this.id = Student.listOfStudents.length + 1;
    this.name = enrollee.name;
    this.surname = enrollee.surname;
    this.ratingPoint = enrollee.ratingPoint;
    this.schoolPoint = enrollee.schoolPoint;
    this.isSelfPayment = true;
    if (enrollee.ratingPoint >= 800) {
      if (Student.listOfStudents.length < 5) {
        this.isSelfPayment = false;
      } else if (Student.listOfStudents.length >= 5) {
        let sortedStudents = Student.listOfStudents.sort(function (min, max) {
          if (min.ratingPoint == max.ratingPoint) {
            return max.schoolPoint - min.schoolPoint;
          } else {
            return max.ratingPoint - min.ratingPoint;
          }
        });
        if (enrollee.ratingPoint > sortedStudents[4].ratingPoint) {
          this.isSelfPayment = false;
          sortedStudents[4].isSelfPayment = true;
        } else if (enrollee.ratingPoint == sortedStudents[4].ratingPoint) {
          if (enrollee.schoolPoint > sortedStudents[4].schoolPoint) {
            this.isSelfPayment = false;
            sortedStudents[4].isSelfPayment = true;
          }
        }
      }
    }
    Student.listOfStudents.push(this);
    Student.listOfStudents.sort(function (min, max) {
      if (min.ratingPoint == max.ratingPoint) {
        return max.schoolPoint - min.schoolPoint;
      } else {
        return max.ratingPoint - min.ratingPoint;
      }
    });
  }
}

const studentArr = [
  {
    name: "Сергей",
    surname: "Войлов",
    ratingPoint: 1000,
    schoolPoint: 1000,
    course: 2,
  },
  {
    name: "Татьяна",
    surname: "Коваленко",
    ratingPoint: 880,
    schoolPoint: 700,
    course: 1,
  },
  {
    name: "Анна",
    surname: "Кугир",
    ratingPoint: 1430,
    schoolPoint: 1200,
    course: 3,
  },
  {
    name: "Станислав",
    surname: "Щелоков",
    ratingPoint: 1130,
    schoolPoint: 1060,
    course: 2,
  },
  {
    name: "Денис",
    surname: "Хрущ",
    ratingPoint: 1000,
    schoolPoint: 990,
    course: 4,
  },
  {
    name: "Татьяна",
    surname: "Капустник",
    ratingPoint: 650,
    schoolPoint: 500,
    course: 3,
  },
  {
    name: "Максим",
    surname: "Меженский",
    ratingPoint: 990,
    schoolPoint: 1100,
    course: 1,
  },
  {
    name: "Денис",
    surname: "Марченко",
    ratingPoint: 570,
    schoolPoint: 1300,
    course: 4,
  },
  {
    name: "Антон",
    surname: "Завадский",
    ratingPoint: 1090,
    schoolPoint: 1010,
    course: 3,
  },
  {
    name: "Игорь",
    surname: "Куштым",
    ratingPoint: 870,
    schoolPoint: 790,
    course: 1,
  },
  {
    name: "Инна",
    surname: "Скакунова",
    ratingPoint: 1560,
    schoolPoint: 200,
    course: 2,
  },
];

for (let pupil of studentArr) {
  new Student(pupil);
}

console.log(Student.listOfStudents);

console.log("Задание: 4.2");

class CustomString {
  reverse(str) {
    return str.split("").reverse().join("");
  }
  ucFirst(str) {
    return (
      str[0].split("").toString().toUpperCase() +
      str
        .split("")
        .splice(1, str.length - 1)
        .join("")
    );
  }
  ucWords(str) {
    let arrStr = str.split(" ");
    let resStr = [];
    for (let ucFirst of arrStr) {
      resStr.push(
        ucFirst[0].split("").toString().toUpperCase() +
          ucFirst
            .split("")
            .splice(1, str.length - 1)
            .join("")
      );
    }
    return resStr.join(" ");
  }
}

const myString = new CustomString();

console.log(myString.reverse("qwerty"));
console.log(myString.ucFirst("qwerty"));
console.log(myString.ucWords("qwerty qwerty qwerty"));
