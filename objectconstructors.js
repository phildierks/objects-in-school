function Student(firstName,lastName,studentGrade){
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentGrade = studentGrade;
}
function Teacher(firstName,lastName,teacherSubject){
    this.firstName = firstName;
    this.lastName = lastName;
    this.teacherSubject = teacherSubject;
}
function Section(sectionName,sectionCount){
    this.sectionName = sectionName;
    this.sectionCount = sectionCount;
}
 var allSections = [];
 var allTeachers = [];
 var allStudents = [];
console.log(allSections);
allSections.push(new Section("IB English",23));
allSections.push(new Section("IB Math",20));

allTeachers.push(new Teacher("Carol","Dorf", "IB Math"));
allTeachers.push(new Teacher("Amanda","Moreno", "IB English"));
allTeachers.push(new Teacher("Matthew","Albinson","IB Computer Science"));

allStudents.push(new Student("Philip","Dierks",11));
allStudents.push(new Student("Nathan","Baker",11));
allStudents.push(new Student("Jacob","Greenberg-Bell",11));
var allItems = [allStudents,allTeachers,allSections];