const form = document.getElementById('form');
const enterName = document.getElementById('enterName');
const enterSurame = document.getElementById('enterSurame');
const enterAge = document.getElementById('enterAge');
const enterFaculty = document.getElementById('enterFaculty');
const enterCourse = document.getElementById('enterCourse');
const submitBtn = document.getElementById('submitBtn');
const table = document.getElementById('table');

const students = [

]
form.addEventListener('submit', (event) => {
    event.preventDefault();

        let student = {
            name: `${enterName.value}`,
            surname: `${enterSurame.value}`,
            age: Number(enterAge.value),
            faculty: `${enterFaculty.value}`,
            course: `${enterCourse.value}`,
        }

        students.push(student);
        console.log(student); //test
        console.log(students); //test

        table.innerHTML += `        <tr>
            <td>${student.name}</td>
            <td>${student.surname}</td>
            <td>${student.age}</td>
            <td>${student.faculty}</td>
            <td>${student.course}</td>
            <td class="actions"><button>Редагувати</button><br><button>Видалити</button></td>
        </tr>`; 
        console.log(table);
        form.reset();
    }
);