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
    clearBoxes();
}

function addTeacher(){
    var firstName = document.getElementById("firstNameTeacher").value;
    var lastName = document.getElementById("lastNameTeacher").value;
    var teacherSubject = document.getElementById("teacherSubject").value;
    allTeachers.push(new Teacher(firstName,lastName,teacherSubject));
    document.getElementById("added").innerHTML = "Teacher Added";
    clearBoxes();
}
function addSection(){
    var sectionName = document.getElementById("sectionName").value;
    var sectionCount = document.getElementById("sectionCount").value;
    allSections.push(new Section(sectionName,sectionCount));
    document.getElementById("added").innerHTML = "Section Added";
    clearBoxes();
}

function addSelectBox(){
   for(var i = 0; i < allItems[0].length; i++) {
       document.getElementById("studentSearch").innerHTML += "<option>" + allItems[0][i].firstName + " " + allItems[0][i].lastName + "</option>";
    }

    for(var a = 0; a < allItems[1].length; a++) {
      document.getElementById("teacherSearch").innerHTML += "<option>" + allItems[1][a].firstName + " " + allItems[1][a].lastName + "</option>";
    }

    for(var b = 0; b < allItems[2].length; b++) {
        document.getElementById("teacherSection").innerHTML += "<option>" + allItems[2][b].sectionName +  "</option>";
    }
    for(var c = 0; c < allItems[2].length; c++) {
        document.getElementById("studentSection").innerHTML += "<option>" + allItems[2][c].sectionName +  "</option>";
    }
}
function addStudentToSection(){

}
function clearBoxes (){
    var element = document.getElementsByTagName("input");
    for(var i =0;i < element.length;i++){
        if(element[i].type ==="text"){
            element[i].value = " ";
        }
    }

}