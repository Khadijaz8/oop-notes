class Student {
  static id = 1;
  //   static obj = {
  //     1: " some value",
  //   };
  constructor(name, age) {
    this.name = name;
    this.age = age;
    // Static propery
    this.id = Student.id++;
  }
  //   static object() {
  //     console.log(this.obj);
  //   }
  //   static sortingStudents(student1, student2) {
  //     return student1.age - student2.age;
  //   }
}
Student.object();
const student1 = new Student("Khadija", 24);
const student2 = new Student("Alia", 23);
const student3 = new Student("Emaan", 25);
const Students = [student1, student2, student3];
// ya ak instance method hai
//Students.sort((a, b) => a.age - b.age);

//calling static method
// Students.sort(Student.sortingStudents);
// console.log(Students);
