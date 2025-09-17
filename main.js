const form = document.getElementById('contact-form');
const contacts = [];
const numbers = [];

var tableLines = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLine();
    updateTable();
})

function addLine() {
    const contactName = document.getElementById('contact-name');
    const contactNumber = document.getElementById('contact-number');

    if (contacts.includes(contactName.value)) {
        alert(`The contact "${contactName.value}" is already in your Contact Agenda`);
    } else {
        contacts.push(contactName.value);
        numbers.push(contactNumber.value);

    var newLine = "<tr>";
    newLine += `<td>${contactName.value}</td>`;
    newLine += `<td>${contactNumber.value}</td>`;
    newLine += "</tr>";

    tableLines += newLine;
    }
    contactName.value = '';
    contactNumber.value = '';
}

function updateTable() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = tableLines;
}