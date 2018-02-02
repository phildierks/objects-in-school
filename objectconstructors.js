var id = 1;
function Student(firstName,lastName,studentGrade){
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentGrade = studentGrade;
    this.section = [];

}
function Teacher(firstName,lastName,teacherSubject){
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.teacherSubject = teacherSubject;
    this.section = [];

}
function Section(sectionName,sectionCount){
    this.sectionName = sectionName;
    this.sectionCount = sectionCount;
    this.id = id++;
    this.student = [];
    this.teacher = [];
    this.addStudentToSection = function(student){
        this.student.push(student);
    };
    this.removeStudentFromSection = function(student){
        this.student.remove(student);
    };
    this.addTeacherToSection = function(teacher){
        this.teacher.push(teacher);
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