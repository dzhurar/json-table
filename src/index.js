const form = document.getElementById('form');
const enterName = document.getElementById('enterName');
const enterSurame = document.getElementById('enterSurame');
const enterAge = document.getElementById('enterAge');
const enterFaculty = document.getElementById('enterFaculty');
const enterCourse = document.getElementById('enterCourse');
const submitBtn = document.getElementById('submitBtn');
const tableBody = document.getElementById('tableBody');
const saveBtn = document.getElementById('saveJson');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
})

const students = [

]
let editingIndex = null;

function updateTable(){
    tableBody.innerHTML = '';
    students.forEach((student, index) =>{
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.surname}</td>
        <td>${student.age}</td>
        <td>${student.faculty}</td>
        <td>${student.course}</td>
        <td>
            <button class="edit" data-index="${index}">Редагувати</button>
            <button class="delete" data-index="${index}">Видалити</button>
        </td>`;
        tableBody.appendChild(row);
    });
};

submitBtn.addEventListener('click', ()=>{
    const name = enterName.value;
    const surname = enterSurame.value;
    const age = Number(enterAge.value);
    const faculty = enterFaculty.value;
    const course = enterCourse.value;



    if(name && surname && age && faculty && course){
        if(editingIndex !== null){
            students[editingIndex] = {name, surname, age, faculty, course};
            editingIndex = null;
            submitBtn.textContent = 'Додати';
        } else{
            students.push({name, surname, age, faculty, course})
        }
        updateTable();
        form.reset(); 
    }else{
        alert('заповніть буль ласка всі поля')
    }
});

tableBody.addEventListener('click',(event) =>{
    if(event.target.classList.contains('edit')) {
        editingIndex = event.target.dataset.index;
        const editingStudent = students[event.target.dataset.index];

        enterName.value = editingStudent.name;
        enterSurame.value = editingStudent.surname;
        enterAge.value = editingStudent.age;
        enterFaculty.value = editingStudent.faculty;
        enterCourse.value = editingStudent.course;

        submitBtn.textContent = 'Оновити'
    }
    if(event.target.classList.contains('delete')){
        students.splice(event.target.dataset.index, 1);
        updateTable();
        console.log(students)
    }
});
updateTable();
saveBtn.addEventListener('click', () =>{
    const studentsJson = JSON.stringify(students);
    console.log(studentsJson);
});