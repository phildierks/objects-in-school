function listItems() {
    var items = document.getElementById("list").selectedIndex;
    var item = allItems[items];
    var result = "";
    for (var i = 0; i < item.length; i++) {
    if(items == 2){
        result+= "<br>" + item[i].sectionName + "/ Size: " +item[i].sectionCount;
    }else if(items==1){
        result += "<br>" + "Name: " + item[i].firstName + " " + item[i].lastName + "/ Subject: " + item[i].teacherSubject;
    }else if(items == 0){
        result += "<br>" + "Name: " + item[i].firstName + " " + item[i].lastName + "/ Grade: " + item[i].studentGrade;
    }
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
    var stud = document.getElementById("studentSearch").selectedIndex;
    var student = allStudents[stud];
    var sectionNum = document.getElementById("studentSection").selectedIndex;
    var section = allSections[sectionNum];
    console.log(section);
    section.addStudentSection(student);
}
function removeStudentFromSection(){
    var stud = document.getElementById("studentSearch").selectedIndex;
    var student = allStudents[stud];
    var sectionNum = document.getElementById("studentSection").selectedIndex;
    var section = allSections[sectionNum];
    console.log(section);
    section.removeStudentSection(student);
}
function addTeacherToSection(){
    var tea = document.getElementById("teacherSearch").selectedIndex;
    var teacher = allTeachers[tea];
    var sectionNum = document.getElementById("teacherSection").selectedIndex;
    var section = allSections[sectionNum];
    console.log(section);
    section.addTeacherSection(teacher);
}
function removeTeacherFromSection(){
    var tea = document.getElementById("teacherSearch2").selectedIndex;
    var teacher = allTeachers[tea];
    var sectionNum = document.getElementById("teacherSection2").selectedIndex;
    var section = allSections[sectionNum];
    console.log(section);
    section.removeTeacherSection(teacher);
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
function onChangeSearch(){
var item = document.getElementById("typeItem").selectedIndex;
var result = "";
if(item == 0){
    for(var i = 0; i < allStudents.length ;i++) {
        result += "<option>" + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>";
    }
}
if(item == 1){
    for(var a = 0; a < allTeachers.length ;a++){
        result  += "<option>" + allTeachers[a].firstName + " " + allTeachers[a].lastName + '</option>';
    }
}
if(item == 2){
        for(var b = 0; b < allSections.length ;b++){
            result  += "<option>" + allSections[b].sectionName + '</option>';
        }
    }
    document.getElementById("searchItem").innerHTML = result;
}
//all functions below deal with display of divs
function showList() {
    document.getElementById("Selecting").style.display = "inline";
    document.getElementById("selectBoxes").style.display = "none";
    document.getElementById("addThing").style.display = "none";
    document.getElementById("remove").style.display = "none";
    document.getElementById("searchStuff").style.display= "none";
}
function add(){
    document.getElementById("addThing").style.display = "inline";
    document.getElementById("selectBoxes").style.display = "none";
    document.getElementById("Selecting").style.display = "none";
    document.getElementById("remove").style.display = "none";
    document.getElementById("searchStuff").style.display= "none";
}
function showAddSelect(){
    document.getElementById("selectBoxes").style.display = "inline";
    document.getElementById("Selecting").style.display = "none";
    document.getElementById("addThing").style.display = "none";
    document.getElementById("remove").style.display = "none";
    document.getElementById("searchStuff").style.display= "none";

}
function showRemoveSelect(){
    document.getElementById("remove").style.display = "inline";
    document.getElementById("Selecting").style.display = "none";
    document.getElementById("addThing").style.display = "none";
    document.getElementById("selectBoxes").style.display = "none";
    document.getElementById("searchStuff").style.display= "none";
}
function showSearch(){
    document.getElementById("Selecting").style.display = "none";
    document.getElementById("addThing").style.display = "none";
    document.getElementById("selectBoxes").style.display = "none";
    document.getElementById("remove").style.display = "none";
    document.getElementById("searchStuff").style.display= "inline";
}