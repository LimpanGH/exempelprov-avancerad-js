//todo 9 (4p). Du ska skapa två klasser med ES6 syntax, Student och Course.

//! Klassen Student ska ha följande egenskaper:
// Två properties: fullname och courses (en array med kurser som är tom från början)
// Metoderna: registerCourse() som lägger till en kurs till studentens lista.
//            listCourses() som visar en lista på studentens kurser.
// class Student {
//   constructor(fullname) {
//     this.fullname = fullname;
//     this.courses = [];
//   }

//   registerCourse(course) {
//     this.courses.push(course);
//   }

//   listCourses() {
//     const coursesInfo = this.courses.map((course) => ({
//       name: course.name,
//       yhp: course.yhp,
//     }));
//     console.log(`${this.fullname}: `, coursesInfo);
//   }
// }

// //! Klassen Course ska ha följande egenskaper:
// // Två properties: name, yhp (poäng på YH).
// // Metoden: getCourseInfo() som visar information om kursen.
// class Course {
//   constructor(name, yhp) {
//     this.name = name;
//     this.yhp = yhp;
//   }

//   getCourseInfo() {
//     console.log(`${this.name} ${this.yhp}`);
//   }
// }

// // Exempel användning:
// const student1 = new Student('Sandra');
// const student2 = new Student('Torsten');
// const student3 = new Student('Stina');

// const course1 = new Course('HTML', 10);
// const course2 = new Course('CSS', 50);
// const course3 = new Course('Javascript', 2000);

// student1.registerCourse(course1);
// student1.registerCourse(course2);
// student1.registerCourse(course3);
// student2.registerCourse(course1);
// student2.registerCourse(course2);
// student3.registerCourse(course3);

// student1.listCourses(); // Ska logga: [{ name: "HTML", yhp: 10 }, { name: "CSS", yhp: 50 }, { name: "Javascript", yhp: 2000 }]
// student2.listCourses(); // Ska logga: [{ name: "HTML", yhp: 10 }, { name: "CSS", yhp: 50 }]
// student3.listCourses(); // Ska logga: [{ name: "Javascript", yhp: 2000 }]
// course1.getCourseInfo(); // Ska logga: HTML 10
// course2.getCourseInfo(); // Ska logga: CSS 50
// course3.getCourseInfo(); // Ska logga: Javascript 2000

//! Same code with comments ⬇ ------------------------------------------------------------------------------------------

// * Definiera en klass Student -------------------------------------
// class Student {
//   // Konstruktorn tar emot studentens fullständiga namn
//   constructor(fullname) {
//     // Instansvariabel för studentens fullständiga namn
//     this.fullname = fullname;
//     // Instansvariabel för att lagra studentens kurser (börjar som en tom array)
//     this.courses = [];
//   }

//   // Metod för att registrera en kurs för studenten
//   registerCourse(course) {
//     // Lägg till kursen i studentens kurser
//     this.courses.push(course);
//   }

//   // Metod för att lista studentens kurser
//   listCourses() {
//     // Skapa en ny array med information om varje kurs (namn och YH-poäng)
//     const coursesInfo = this.courses.map((course) => ({
//       name: course.name,
//       yhp: course.yhp,
//     }));
//     // Logga informationen om studentens kurser
//     console.log(`${this.fullname}: `, coursesInfo);
//   }
// }

// // * Definiera en klass Course -------------------------------------
// class Course {
//   // Konstruktorn tar emot namnet på kursen och YH-poängen
//   constructor(name, yhp) {
//     // Instansvariabel för kursens namn
//     this.name = name;
//     // Instansvariabel för kursens YH-poäng
//     this.yhp = yhp;
//   }

//   // Metod för att få information om kursen
//   getCourseInfo() {
//     // Logga kursens namn och YH-poäng
//     console.log(`${this.name} ${this.yhp}`);
//   }
// }

// // * Exempel på användning: -------------------------------------

// // * Skapa instanser av Student och Course
// const student1 = new Student('Sandra');
// const student2 = new Student('Torsten');
// const student3 = new Student('Stina');

// const course1 = new Course('HTML', 10);
// const course2 = new Course('CSS', 50);
// const course3 = new Course('Javascript', 2000);

// // * Registrera kurser för studenterna
// student1.registerCourse(course1);
// student1.registerCourse(course2);
// student1.registerCourse(course3);
// student2.registerCourse(course1);
// student2.registerCourse(course2);
// student3.registerCourse(course3);

// // * Lista studenternas kurser
// console.log('----- listCourses() -----------⬇');
// student1.listCourses(); // Ska logga: [{ name: "HTML", yhp: 10 }, { name: "CSS", yhp: 50 }, { name: "Javascript", yhp: 2000 }]
// student2.listCourses(); // Ska logga: [{ name: "HTML", yhp: 10 }, { name: "CSS", yhp: 50 }]
// student3.listCourses(); // Ska logga: [{ name: "Javascript", yhp: 2000 }]

// // * Hämta information om kurserna
// console.log('----- getCourseInfo() ---------⬇');
// course1.getCourseInfo(); // Ska logga: HTML 10
// course2.getCourseInfo(); // Ska logga: CSS 50
// course3.getCourseInfo(); // Ska logga: Javascript 2000
