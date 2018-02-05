function listItems() {
    var items = document.getElementById("list").value;
    var item = allItems[items];
    var result = "";
    var x = 0;
    for (var i = 0; i < item.length; i++) {
        for (var prop in item[i]) {
            if(items == 2){
                x++;
            }
            if(x>2){
                break;
            }
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

function addStudentToSection(){
    var stud = document.getElementById("studentSearch").selectedIndex-1;
    var studentName = allStudents[stud].firstName + " " + allStudents[stud].lastName;
    var student = allStudents[stud];
    var sectionNum = document.getElementById("studentSection").selectedIndex;
    var section = allSections[sectionNum];
    section.student.push(studentName);
    section.addStudentToSection(student);
}
function removeStudentFromSection(){

}


function addSelectBox(){
   for(var i = 0; i < allItems[0].length; i++) {
       document.getElementById("studentSearch").innerHTML += "<option>" + allItems[0][i].firstName + " " + allItems[0][i].lastName + "</option>";
       document.getElementById("studentSearch2").innerHTML += "<option>" + allItems[0][i].firstName + " " + allItems[0][i].lastName + "</option>";
   }

    for(var c = 0; c < allItems[2].length; c++) {
        document.getElementById("studentSection").innerHTML += "<option>" + allItems[2][c].sectionName +  "</option>";
        document.getElementById("studentSection2").innerHTML += "<option>" + allItems[2][c].sectionName +  "</option>";

    }
}

function clearBoxes (){
    var element = document.getElementsByTagName("input");
    for(var i =0;i < element.length;i++){
        if(element[i].type ==="text"){
            element[i].value = " ";
        }
    }

}

function hideSelect(){
    document.getElementById("Selecting").style.display = "inline";
}
function add(){
    document.getElementById("addThing").style.display = "inline";
}
function hideAdd(){
    document.getElementById("selectBoxes").style.display = "inline";
}
function hideOthers(){
    document.getElementById("selectBoxes").style.display = "none";
    document.getElementById("addThing").style.display = "none";
}
function hideThem(){
    document.getElementById("selectBoxes").style.display = "none";
    document.getElementById("Selecting").style.display = "none";
}
function hideOther(){
    document.getElementById("Selecting").style.display = "none";
    document.getElementById("addThing").style.display = "none";
}
function openIt(){
    document.getElementById("remove").style.display= "inline";
}