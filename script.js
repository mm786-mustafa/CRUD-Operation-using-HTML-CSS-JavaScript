let selectRow = null;
let form = document.getElementById("register-form");
let empName = document.getElementById("name");
let city = document.getElementById("city");
let salary = document.getElementById("salary");
let table = document.getElementById("record-table");

function onSubmitForm() {
    const formData = getFormData();
    if(selectRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
}

const getFormData = () => {
    let formData = {}
    formData["name"] = empName.value;
    formData["city"] = city.value;
    formData["salary"] = salary.value;
    return formData;
}

const insertNewRecord = (data) => {

    form.addEventListener("submit",(e) => {
        e.preventDefault();
    })

    let tableBody = table.getElementsByTagName("tbody")[0];
    let newRow = tableBody.insertRow(tableBody.length);

    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;

    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.city;

    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;

    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onclick="onEdit(this)">Edit</a>`;

    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onclick="onDelete(this)">Delete</a>`;
}

const updateRecord = (formData) => {
    selectRow.cells[0].innerHTML = formData.name;
    selectRow.cells[1].innerHTML = formData.city;
    selectRow.cells[2].innerHTML = formData.salary;
}

const onEdit = (td) => {
    selectRow = td.parentElement.parentElement;
    console.log(selectRow)
    empName.value = selectRow.cells[0].innerHTML;
    city.value = selectRow.cells[1].innerHTML;
    salary.value = selectRow.cells[2].innerHTML;
}

const onDelete = (td) => {
    selectRow = td.parentElement.parentElement;
    let index = selectRow.rowIndex;
    console.log(index);
    table.deleteRow(index);
}

const resetForm = () => {
    empName.value = city.value = salary.value = "";
    selectRow = null;
}