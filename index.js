debugger;

const firststudent = {
  name: "Francisco",
  surnames: "Grande Mediano",
  hoursSleptLastNight: 5,

  introduceStudent: function () {
    return `El estudiante se llama ${this.name} ${this.surnames} y anoche durmió ${this.hoursSleptLastNight} horas.`;
  },
  updateSleptHours: function (newHoursSlept) {
    this.hoursSleptLastNight = newHoursSlept;
    return newHoursSlept;
  },
  didStudentSleep: function () {
    return (hasSlept =
      this.hoursSleptLastNight < 2
        ? "The student did not sleep."
        : "the student slept last night.");
  },
};

console.log(firststudent.introduceStudent());
console.log(firststudent.updateSleptHours(8));
console.log(firststudent.didStudentSleep(3));
