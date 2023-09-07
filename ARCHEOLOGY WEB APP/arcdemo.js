// script.js
let isDarkMode = false;

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const body = document.body;
    const container = document.querySelector('.container');
    const buttons = document.querySelectorAll('button');
    const darkModeBtn = document.querySelector('.dark-mode-btn');

    if (isDarkMode) {
        body.classList.add('dark-mode');
        container.classList.add('dark-mode');
        buttons.forEach(button => button.classList.add('dark-mode'));
        darkModeBtn.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        container.classList.remove('dark-mode');
        buttons.forEach(button => button.classList.remove('dark-mode'));
        darkModeBtn.classList.remove('dark-mode');
    }
}

function generateTable() {
    const numCourses = parseInt(document.getElementById("numCourses").value);
    let tableHTML = '<table><tr><th>Course Name</th><th>Units</th><th>Units Taken</th><th>Mark</th><th>Grade</th><th>Remark</th></tr>';

    for (let i = 0; i < numCourses; i++) {
        const courseName = prompt(`Enter the name of course ${i + 1}`);
        const units = parseInt(prompt(`Enter the units for ${courseName}`));
        const unitsTaken = parseInt(prompt(`Enter the units taken for ${courseName}`));
        const marks = parseInt(prompt(`Enter the mark for ${courseName}`));
        const grade = (marks >= 50) ? 'Passed' : 'Failed';
        const remark = (marks >= 50) ? 'Passed' : 'Failed';

        tableHTML += `<tr><td>${courseName}</td><td>${units}</td><td>${unitsTaken}</td><td>${marks}</td><td>${grade}</td><td>${remark}</td></tr>`;
    }

    tableHTML += '</table>';
    document.getElementById("output").innerHTML = tableHTML;
}

function downloadData() {
    const numCourses = parseInt(document.getElementById("numCourses").value);
    let data = '';

    for (let i = 0; i < numCourses; i++) {
        const courseName = prompt(`Enter the name of course ${i + 1}`);
        const units = parseInt(prompt(`Enter the units for ${courseName}`));
        const unitsTaken = parseInt(prompt(`Enter the units taken for ${courseName}`));
        const marks = parseInt(prompt(`Enter the mark for ${courseName}`));
        const grade = (marks >= 50) ? 'Passed' : 'Failed';
        const remark = (marks >= 50) ? 'Passed' : 'Failed';

        data += `Course Name: ${courseName}\n`;
        data += `Units: ${units}\n`;
        data += `Units Taken: ${unitsTaken}\n`;
        data += `Mark: ${marks}\n`;
        data += `Grade: ${grade}\n`;
        data += `Remark: ${remark}\n\n`;
    }

    const blob = new Blob([data], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "course_data.txt";
    a.click();
}
