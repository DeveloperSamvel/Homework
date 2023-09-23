const gradeLabs = (arr) => {
  let num = Math.floor(Math.random() * 10);

  arr.forEach((lab) => {
    try {
      let result = lab.runLab(num);
      console.log(
        `${lab.student} code worked: ${result === Math.pow(num, num)}`
      );
    } catch (error) {
      console.log("Error thrown", error.message);
    }
  });
};

let studentLabs2 = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];
gradeLabs(studentLabs2);
