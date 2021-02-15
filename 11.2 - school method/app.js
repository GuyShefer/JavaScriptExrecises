(function () {

     const school = {
          teachers: [
               {
                    id: 1,
                    name: "Pinchas",
                    subjects: ["chemistry", "biology", "physics"],
                    students: [],
                    capacityLeft: 3,
               },
               {
                    id: 2,
                    name: "Williams",
                    subjects: ["history", "ethics"],
                    students: [],
                    capacityLeft: 2,
               },
          ],
          students: [
               {
                    id: 10,
                    name: "Jennifer",
                    age: 20,
               },
               {
                    id: 11,
                    name: "Howard",
                    age: 23,
               },
               {
                    id: 12,
                    name: "Old-Timmy",
                    age: 86,
               },
               {
                    id: 13,
                    name: "Houston",
                    age: 21,
               },
          ],
          findPerson: function (type, id) {

               if (type === "teachers") {
                    return this.teachers.find((t) => {
                         return t.id === id;
                    })

               } else if (type === "students") {
                    return this.students.find((t) => {
                         return t.id === id;
                    })
               }
               return null;
          },
          assignStudent: function (studentId, subject) {
               let student = this.findPerson('students', studentId);
               let AvailbleTeacher = this.teachers.find( teacher => {
                    return teacher.subjects.includes(subject) && teacher.students.length < teacher.capacityLeft;
               });
               student && AvailbleTeacher ? AvailbleTeacher.students.push(student) : console.log("Sorry cant complete the action");
          },
          assignTeachersSubject: function(teacherId, newSubject) {
               let teacher = this.findPerson('teachers', teacherId);
               let isAvaiableSubject = !(teacher.subjects.includes(newSubject));
               isAvaiableSubject ? teacher.subjects.push(newSubject) : console.log("Sorry, Cant not add the subject");
          }
     };

     console.log(school.findPerson('students', 11));
     school.assignStudent(11,'biology' );
     school.assignStudent(11,'biology' );
     school.assignStudent(11,'biology' );
     console.log(school.findPerson('teachers', 1));
     school.assignTeachersSubject(1, "Sports");
     console.log(school.findPerson('teachers', 1));
})();