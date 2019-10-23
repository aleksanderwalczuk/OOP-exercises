const ultimateStudentES6 = {
    name: '',
    address: '',
    idNumber: '',
    profile: '',
    setStudentData: function (name, address, idNumber, profile) {
        this.name = name;
        this.address = address;
        this.idNumber = idNumber;
        this.profile = profile;
    },
    displayInfo: function () {
        console.log(`${this.name}\n${this.address}\n${this.idNumber}\n${this.profile}`);
    }


};
const properStudent = Object.create((ultimateStudentES6));
properStudent.setStudentData('Jedrzej', 'Metalowa 666', 12323, 'Medical Student');
properStudent.displayInfo();
const properStudent2 = Object.create((ultimateStudentES6));
properStudent2.setStudentData('Andrzej', 'Rockowa 555', 8850, 'Engineer');

const properStudent3 = Object.create((ultimateStudentES6));


properStudent3.setStudentData('DzejDzej', 'Jazzowa 1358', 12323, 'SSS');

const studentsList = [];


let outputHtml = '';
studentsList.push(properStudent, properStudent2, properStudent3);
console.log(studentsList);
const htmlAnchor = document.querySelector('.student__container');

function studentItemDiv(className, item, arg) {
    return `<div class="${className}">${item[arg]}</div>`
}

studentsList.map((element) => {
    htmlAnchor.innerHTML = outputHtml;

//     outputHtml += `
// <div class="student__row">
// <div class="student__item">${element.name}</div>
// <div class="student__item">${element.address} </div>
// <div class="student__item">${element.idNumber} </div>
// <div class="student__item">${element.profile}</div>
// </div>`;
//
    outputHtml +=
        '<div class="student__row">' +
        studentItemDiv('student__item', element, 'name') +
        studentItemDiv('student__item', element, 'address') +
        studentItemDiv('student__item', element, 'idNumber') +
        studentItemDiv('student__item', element, 'profile') +
        '</div>' ;
});