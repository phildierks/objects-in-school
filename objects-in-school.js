function listItems() {
    var items = document.getElementById("list").value;
    var item = allItems[items];
    var result = "";
    for (var i = 0; i < item.length; i++) {
        for (var prop in item[i]) {
            result += item[i][prop] + " ";
        }
        result += "<br>";

    }
    document.getElementById("listedItems").innerHTML = result;

}
function addStudent(){
    var firstName = document.getElementById("firstNameStudent").value;
    var lastName = document.getElementById("lastNameStudent").value;
    var grade = document.getElementById("studentGrade").value;
    allStudents.push(new Student(firstName,lastName,grade));
    document.getElementById("added").innerHTML = "Student Added";
}
function addTeacher(){
    var firstName = document.getElementById("firstNameTeacher").value;
    var lastName = document.getElementById("lastNameTeacher").value;
    var teacherSubject = document.getElementById("teacherSubject").value;
    allTeachers.push(new Teacher(firstName,lastName,teacherSubject));
    document.getElementById("added").innerHTML = "Teacher Added";
}
function addSection(){
    var sectionName = document.getElementById("sectionName").value;
    var sectionCount = document.getElementById("sectionCount").value;
    allSections.push(new Section(sectionName,sectionCount));
    document.getElementById("added").innerHTML = "Section Added";
}