function listItems() {
    var items = document.getElementById("list").selectedIndex;
    var item = allItems[items];
    var result = "";
    var x = 0;
    for (var i = 0; i < item.length; i++) {
        for (var prop in item[i]) {
            if(items === 2){
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
    var student = allStudents[stud];
    console.log(student);
    var sectionNum = document.getElementById("studentSection").selectedIndex-1;
    var section = allSections[sectionNum];
    console.log(section);
    section.addStudentSection(student);
}
function removeStudentFromSection(){
    var stud = document.getElementById("studentSearch").selectedIndex-1;
    var student = allStudents[stud];
    console.log(student);
    var sectionNum = document.getElementById("studentSection").selectedIndex-1;
    var section = allSections[sectionNum];
    console.log(section);
    section.removeStudentSection(student);
}
function addTeacherToSection(){
    var tea = document.getElementById("teacherSearch").selectedIndex-1;
    var teacher = allTeachers[tea];
    var sectionNum = document.getElementById("teacherSection").selectedIndex-1;
    var section = allSections[sectionNum];
    section.addTeacherSection(teacher);
}
function removeTeacherFromSection(){

}


function addSelectBox(){
   for(var i = 0; i < allItems[0].length; i++) {
       document.getElementById("studentSearch").innerHTML += "<option>" + allItems[0][i].firstName + " " + allItems[0][i].lastName + "</option>";
       document.getElementById("studentSearch2").innerHTML += "<option>" + allItems[0][i].firstName + " " + allItems[0][i].lastName + "</option>";
   }
    for(var a = 0; a < allItems[1].length; a++) {
        document.getElementById("teacherSearch").innerHTML += "<option>" + allItems[1][a].firstName + " " + allItems[1][a].lastName + "</option>";
        document.getElementById("teacherSearch2").innerHTML += "<option>" + allItems[1][a].firstName + " " + allItems[1][a].lastName + "</option>";
    }
    for(var b = 0; b < allItems[2].length; b++) {
        document.getElementById("teacherSection").innerHTML += "<option>" + allItems[2][b].sectionName + "</option>";
        document.getElementById("teacherSection2").innerHTML += "<option>" + allItems[2][b].sectionName + "</option>";
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
//all functions below deal with display of divs
function hideSelect(){
    document.getElementById("Selecting").style.display = "inline";
}
function add(){
    document.getElementById("addThing").style.display = "inline";
}
function hideAdd(){
    document.getElementById("selectBoxes").style.display = "inline";
}
function inline(){
    document.getElementById("remove").style.display = "inline";

}
function hideOthers() {
    document.getElementById("selectBoxes").style.display = "none";
    document.getElementById("addThing").style.display = "none";
    document.getElementById("remove").style.display = "none";
}
function hideThem(){
    document.getElementById("selectBoxes").style.display = "none";
    document.getElementById("Selecting").style.display = "none";
    document.getElementById("remove").style.display = "none";
}
function hideOther(){
    document.getElementById("Selecting").style.display = "none";
    document.getElementById("addThing").style.display = "none";
    document.getElementById("remove").style.display = "none";

}
function openIt(){
    document.getElementById("remove").style.display = "inline";
    document.getElementById("Selecting").style.display = "none";
    document.getElementById("addThing").style.display = "none";
    document.getElementById("selectBoxes").style.display = "none";
}
