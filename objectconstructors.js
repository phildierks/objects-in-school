var currentSize = 1;

var Person = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = currentSize++;
};
Student.prototype = new Person();
Teacher.prototype = new Person();

function Student(firstName,lastName,studentGrade){
 Person.call(this,firstName,lastName);
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentGrade = studentGrade;

}
function Teacher(firstName,lastName,teacherSubject){
    this.id = currentSize++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.teacherSubject = teacherSubject;

}
function Section(sectionName,sectionCount) {
    this.sectionName = sectionName;
    this.sectionCount = sectionCount;
    this.students = [];
    this.teacher = [];
    this.id = currentSize++;
    this.seatRemaining = this.sectionCount - this.students.length;
    this.addStudentSection = function(student) {
        this.students.push(student);
        console.log(this.students);
        console.log(this.students[0]);
        this.seatRemaining--;
        if(this.seatRemaining==-1){
            document.getElementById("error").innerHTML = "Not enough space for this student to be added.";
        }
    };
    this.removeStudentSection = function(student) {
        this.students.splice(student);
        this.seatRemaining++;
        if(this.seatRemaining>this.sectionCount){
            document.getElementById("wrong").innerHTML = "No student to be removed."
        }
        console.log(this.students);
    };
    this.addTeacherSection = function(teacher) {
        this.teacher.push(teacher);
        console.log(this.teacher);
    };
    this.removeTeacherSection = function(teacher) {
        this.teacher.splice(teacher);
        console.log(this.teacher);

    }
}
var allSections = [];
var allTeachers = [];
var allStudents = [];

allSections.push(new Section("IB English",23));
allSections.push(new Section("IB Math",20));

allTeachers.push(new Teacher("Carol","Dorf", "IB Math"));
allTeachers.push(new Teacher("Amanda","Moreno", "IB English"));
allTeachers.push(new Teacher("Matthew","Albinson","IB Computer Science"));

allStudents.push(new Student("Philip","Dierks",11));
allStudents.push(new Student("Nathan","Baker",11));
allStudents.push(new Student("Jacob","Greenberg-Bell",11));

var allItems = [allStudents,allTeachers,allSections];