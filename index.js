//creating person class

//constructor name should start with capital letter
function Person(name, address, idNumber) {
    this.name = name;
    this.address = address;
    this.idNumber = idNumber;
}
//adding a method using prototype
Person.prototype.displayInfo = function () {
    console.log(`Student ${this.name}`);
};
//creating student class

function Student(name, address, idNumber) {
    Person.call(this, name, address, idNumber);
    this.profile = 'student';
}
function Teacher(name, address, idNumber) {
    Person.call(this, name, address, idNumber);
    this.profile = 'teacher';
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const brandNewStudent = new Student('Tomasz', 12323);




//creating student using constructor above
const student1 = new Student('Adam', 'Konwaliowa 2', 23232, 'Medical Diagnosis' );
const student2 = new Student('Pawel', 'Wesola 25', '00000', 'Psychology' );
const student3 = new Student('Gawel', 'zxc 222', '111', 'ASD' );
const student4 = new Student('Michal', 'Wesola 25', '00000', 'WQWWWW' );
const student5 = new Teacher('Andrzej', 'OMG', 32377745, 'UUUUUUU' );



// student3.changeId(77777);
//list arr
const studentsList = [];
studentsList.push(student1, student2, student3, student4, student5);

let outputHtml = '';
studentsList.push();
console.log(studentsList);
const htmlAnchor = document.querySelector('.student__container');


//function creating html output
function studentItemDiv(className, item, arg) {
    return `<div class="${className}">${item[arg]}</div>`
}

studentsList.map((element) => {

    outputHtml +=
        '<div class="student__row">' +
        studentItemDiv('student__item', element, 'name') +
        studentItemDiv('student__item', element, 'address') +
        studentItemDiv('student__item', element, 'idNumber') +
        studentItemDiv('student__item', element, 'profile') +
        '</div>' ;
});

htmlAnchor.innerHTML = outputHtml;